import React from "react";
import img from "../../reactLogo.png"

const Header = () => {
    return (
        <header>
            <nav className="nav-p1">
                <img src={img} alt="reactIcon"/>
                <h2>20220307</h2>
                <h3>Project 1</h3>
            </nav>
        </header>
    )   
}
export default Header