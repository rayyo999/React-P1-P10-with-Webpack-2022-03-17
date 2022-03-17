import React from "react";

const MemeOutput = ({memeOutput, randomUrl}) => {
    return (
        <div className="output-p5">
            <h1 className="topText">{memeOutput.topText}</h1>
            <h1 className="bottomText">{memeOutput.buttomText}</h1>
            <img src={randomUrl}/>
        </div>
    )
}
export default MemeOutput