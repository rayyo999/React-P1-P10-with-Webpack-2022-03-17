import React from "react";
import img from "../Meme.png"

const Header = () => {
    return (
        <header className="header-p5">
            <img src={img} />
            <h2>Meme Generator</h2>
        </header>
    )
}
export default Header