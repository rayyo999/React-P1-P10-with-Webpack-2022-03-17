import React from "react";

const Card = ({object}) => {
    const {available,url,rate,comment,country,description,price} = object;
    return (
        <div className="card-p3">
            {available === 0 ? <h4 className="available">SOLD OUT</h4>:<h4 className="available">ONLINE</h4>}
            <img src={url} />
            <h5>
                <i className="bi bi-star-fill"></i>
                <span> {rate} ({comment}) - {country}</span>
            </h5>
            <p>{description}</p>
            <p><span>From ${price}</span> / person</p>
        </div>
    )
}
export default Card

//const Card = () => {
// return (
//     <div className="card">
//         <img src="https://picsum.photos/id/137/200/300" />
//         <h5>
//             <i className="bi bi-star-fill"></i>
//             <span> 5.0 (6) - USA</span>
//         </h5>
//         <p>Life lessons with reflection</p>
//         <p><span>From ${number}</span> / person</p>
//     </div>
// )
//}