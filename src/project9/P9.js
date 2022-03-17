import React, {useState} from "react";
import "./P9.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

const P9 = () => {
    const [darkMode, setdarkMode] = useState(true);
    return (
        <div className="body-p9">
            <Header darkMode={darkMode} setdarkMode={setdarkMode}/>
            <Main darkMode={darkMode}/>
            <Footer darkMode={darkMode}/>
        </div>
    )
}
export default P9