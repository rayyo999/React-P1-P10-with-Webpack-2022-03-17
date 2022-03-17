import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Intro from "./components/Intro";

const Header = () => {
    return (
        <header className="header-p3">
            <Nav />
            <Hero />
            <Intro />
        </header>
    )
}

export default Header