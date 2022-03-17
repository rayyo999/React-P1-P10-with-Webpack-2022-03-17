import React from 'react';
import img from "../../reactLogo.png"


const Header = () => {
    return (
        <header>
            <nav className='nav-pt'>
                <img src={img} alt="reactpicture"/>
                <ul>
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}
export default Header