import React from 'react'

export default function NewsItems(props) {
    return (
        <>
            <div className="card col-lg-3 col-md-4 col-sm-12 text-center" style={{ margin: '10px' }}>
                <img src={props.img} className="card-img-top" alt="..." style={{ height: '300px' }} />
                <div className="card-body">
                    <h5 className="card-title" style={{ height: "100px", overflow: "hidden" }}>{props.title}</h5>
                    <p className="card-text" style={{ height: "150px", overflow: "hidden" }}>{props.description}</p>
                    <a href={props.link} target='_blank' rel='noreferrer' className="btn btn-primary">Read More</a>
                </div>
                <div className="card-footer text-muted">
                    {props.days}
                </div>
                <span className="position-absolute top-0 start-50 translate-middle badge bg-danger">
                    {props.source}
                </span>
            </div>
        </>
    )
}
