import React from "react";
const Box = ({isDark,changeColor,id}) => {
    const styleBox = {
        backgroundColor: isDark ? "#222222" : "#636363"
    }
    function changeColorFunction() {
        changeColor(id)
    }
    return(
        <div className="box" style={styleBox} onClick={changeColorFunction}></div>
    )
}
export default Box