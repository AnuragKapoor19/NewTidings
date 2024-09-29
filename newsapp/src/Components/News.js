import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import NewsItems from './NewsItems'
import InfiniteScroll from 'react-infinite-scroll-component';
import { CategoryState } from '../context/GlobalContext';
import {DNA} from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-hot-toast';

export default function News() {
    const navigate = useNavigate();
    const [articles, setarticles] = useState([])
    const [nextpage, setnextpage] = useState()
    const [totalresults, settotalresults] = useState()
    const { category, search } = CategoryState();
    const [loading, setloading] = useState(true)
    const getdata = async () => {
        try {
            const response = await fetch(`https://newsdata.io/api/1/latest?apikey=pub_5288782fa08f19cf42f80c251aa24f905a385&country=in&language=en&size=6&image=1&removeduplicate=1&category=${category}`)
            const data = await response.json()
            setloading(false)
            setnextpage(data.nextPage)
            const articles = await data.results
            setarticles(articles)
            settotalresults(articles.totalResults)
            // console.log(data)
        } catch (error) {
            toast.error('API Limit! Please Try again after 15 minutes')
        }
    }

    const searchedData = async() =>{
        try {
            const response = await fetch(`https://newsdata.io/api/1/latest?apikey=pub_5288782fa08f19cf42f80c251aa24f905a385&country=in&language=en&size=6&image=1&qInTitle="${search}"&removeduplicate=1&category=${category}`)
            const data = await response.json()
            setloading(false)
            setnextpage(data.nextPage)
            const articles = await data.results
            setarticles(articles)
            settotalresults(articles.totalResults)
        } catch (error) {
            toast.error('API Limit! Please Try again after 15 minutes')
        }
    }

    useEffect(()=>{
        searchedData();
        // eslint-disable-next-line
    },[search])

    const fetchMoreData = () => {
        setloading(true)
        setTimeout(async () => {
            const response = await fetch(`https://newsdata.io/api/1/latest?apikey=pub_5288782fa08f19cf42f80c251aa24f905a385&country=in&language=en&size=6&image=1&removeduplicate=1&category=${category}&page=${nextpage}`)
            const data = await response.json()
            setloading(false)
            setnextpage(data.nextPage)
            const newarticles = await data.results
            setarticles(articles.concat(newarticles))
        }, 1500);
    };

    useEffect(() => {
        getdata()
        window.scrollTo(0, 0)
        if(category === 'top'){
            navigate('/')
        }
        // eslint-disable-next-line
    }, [category])

    const capitalizeFirstLetter = (string) => {
        if (string === 'top') {
            return;
        }
        else {
            return (string.charAt(0).toUpperCase() + string.slice(1) + ':');
        }
    }

    return (
        <>
            <Navbar />
            <div className='title text-center' style={{ margin: '7rem 0 3rem 0' }}><h1>{capitalizeFirstLetter(category)}Top HeadLines</h1></div>
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalresults}
                loader={<div className='w-100 text-center'>
                    <DNA
                    visible={loading}
                    height="80"
                    width="80"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper"
                /></div>}
            >
                <div className='container d-flex flex-wrap justify-content-center w-100' style={{ gap: "20px" }}>
                    {articles.map((article) => (
                        <NewsItems key={article.article_id} days={article.pubDate} img={article.image_url} title={article.title} description={article.description} link={article.link} source={article.source_name} />
                    ))}
                </div>
            </InfiniteScroll>
        </>
    )
}


