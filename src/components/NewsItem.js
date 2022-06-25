import React, { Component } from 'react'


export default class NewsItem extends Component {

   
    render() {
        let {title,description,imageUrl,url} = this.props;
        return (
            <>
           
                <div className="card my-3 mx-2"  style={{width: "18rem"}}>
                    <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                        <img style = {{height:"10rem"}}src={imageUrl?imageUrl:"https://media.istockphoto.com/photos/abstract-digital-news-concept-picture-id1290904409?b=1&k=20&m=1290904409&s=170667a&w=0&h=6khncht98kwYG-l7bdeWfBNs_GGcG1pDqzLb6ZXhh7I="} className="img-fluid" />
                        <a href="#!">
                            <div className="mask mx-2" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
                        </a>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title mb-2 text-muted">{title ?title.slice(0,50)+"..." : ""}</h5>
                        <p className="card-text">{description ? description.slice(0,90)+"..." : ""}</p>
                        <a href={url} target="_blank" className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </>
        )
    }
}
