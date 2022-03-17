import React from "react";
const Card = ({id, roll, number,setRollStop}) => {
    return(
        <div 
            className={roll ? "card-p10" : "card-p10 card-p10-select"}
            onClick={()=>{setRollStop(id)}}
        >
            {number}
        </div>
    )
}
export default Card