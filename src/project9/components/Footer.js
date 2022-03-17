import React from "react";
const Footer = ({darkMode}) => {
    return (
        <footer className={darkMode ? "" : "footer-light"}>Tsai</footer>
    )
}
export default Footer