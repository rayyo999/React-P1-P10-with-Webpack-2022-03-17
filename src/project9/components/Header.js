import React from "react";
import img from "../../reactLogo.png"


const Header = ({darkMode, setdarkMode}) => {
    return (
            <header className="header-p9">
                <nav className={darkMode ? "" : "nav-light"}>
                    <img src={img} alt="reactIcon"/>
                    <h2>20220307</h2>
                    <div className="mode">
                        <p className="lightText ">Light</p>
                        <div 
                            className="toggler" 
                            onClick={()=>{setdarkMode(prev => !prev)}}>
                            <div className="toggler-circle"></div>
                        </div>
                        <p className="darkText">Dark</p>
                    </div>
                </nav>
            </header>
    )
}
export default Header