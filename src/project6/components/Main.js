import React, {useState} from "react";
import boxData from "../boxData";
import Box from "./Box";

const Main = () => {
    const [boxArray, setboxArray] = useState(boxData);
    
    function changeColor(id) {
        setboxArray(prevArray=>{
            const newArray = [];
            for(let i = 0; i < prevArray.length; i++){
                const currentBox = prevArray[i];
                if(currentBox.id === id){
                    const updateBox = {
                        ...currentBox,
                        on : !currentBox.on
                    }
                    newArray.push(updateBox);

                    //const on = currentBox.on;
                    //currentBox.on = !on;
                    // newArray.push(currentBox)

                    // currentBox.on = !currentBox.on;
                    // newArray.push(currentBox)
                }
                else{
                    newArray.push(currentBox);
                }
                
            }
            return newArray
        })
    }
    const listBox = boxArray.map(box => {
        return(
            <Box key={box.id} isDark={box.on} changeColor={changeColor} id={box.id}/>
        )
    })
    
    return (
        <main>{listBox}</main>
    )
}
export default Main