import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CategoryState } from '../context/GlobalContext';

export default function Navbar() {
    const { setcategory, setsearch } = CategoryState();
    const [searchInput, setsearchInput] = useState('')
    const [hide, sethide] = useState(false)

    const handleinput = (e)=>{
        setsearchInput(e.target.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        setsearch(searchInput)
        setsearchInput('');
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100" style={{ position: 'fixed', top: '0', zIndex: "1" }}>
                <div className="container-fluid">
                    <h1 className="navbar-brand mt-1 fst-italic fw-bold fs-1">NewTidings</h1>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" onClick={()=>sethide(false)}></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav" style={{display:(hide?'none':"")}}>
                        <ul className="navbar-nav">
                            <li className="nav-item fs-5 fw-bolder">
                                <Link className="nav-link active" aria-current="page" to="/NewTidings" onClick={()=> {setcategory('top'); sethide(true)}}>Home</Link>
                            </li>

                            <li className="nav-item fs-5 fw-bolder">
                                <Link className="nav-link active" aria-current="page" to="/buisness" onClick={() => {setcategory('business'); sethide(true)}}>Buisness</Link>
                            </li>

                            <li className="nav-item fs-5 fw-bolder">
                                <Link className="nav-link active" aria-current="page" to="/crime" onClick={() => {setcategory('crime'); sethide(true)}}>Crime</Link>
                            </li>

                            <li className="nav-item fs-5 fw-bolder">
                                <Link className="nav-link active" aria-current="page" to="/education" onClick={() => {setcategory('education'); sethide(true)}}>Education</Link>
                            </li>

                            <li className="nav-item fs-5 fw-bolder">
                                <Link className="nav-link active" aria-current="page" to="/entertainment" onClick={() => {setcategory('entertainment'); sethide(true)}}>Entertainment</Link>
                            </li>

                            <li className="nav-item fs-5 fw-bolder">
                                <Link className="nav-link active" aria-current="page" to="/health" onClick={() => {setcategory('health'); sethide(true)}}>Health</Link>
                            </li>

                            <li className="nav-item fs-5 fw-bolder">
                                <Link className="nav-link active" aria-current="page" to="/politics" onClick={() => {setcategory('politics'); sethide(true)}}>Politics</Link>
                            </li>

                            <li className="nav-item fs-5 fw-bolder">
                                <Link className="nav-link active" aria-current="page" to="/sports" onClick={() => {setcategory('sports'); sethide(true)}}>Sports</Link>
                            </li>

                            <li className="nav-item fs-5 fw-bolder">
                                <Link className="nav-link active" aria-current="page" to="/technology" onClick={() => {setcategory('technology'); sethide(true)}}>Technology</Link>
                            </li>
                        </ul>

                        <form className="d-flex mx-5" onSubmit={handleSubmit}>
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchInput} onChange={handleinput}/>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}
