import React from "react";

const Card = ({info}) => {
    const {imgUrl, country, location, fromDate, toDate, introduction} = info;
    return (
        <div className="card-p4">
            <img src={imgUrl}/>
            <div className="info-p4">
                <i className="bi bi-geo-alt-fill"></i>
                <span className="country">{country}</span>
                <a href="">View on Google Maps</a>
                <h1>{location}</h1>
                <h4>{fromDate} - {toDate}</h4>
                <p>{introduction}</p>
            </div>
        </div>
    )
}
export default Card