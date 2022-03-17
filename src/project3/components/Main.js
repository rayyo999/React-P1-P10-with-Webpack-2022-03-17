import React from "react";
import Card from "./components/Card";
import {Data} from "./Data";

const Main = () => {
    return (
        <main className="main-p3">{
            Data.map(item=>{
                return(
                    <Card key ={item.id} object={item}/>
                )
            })
         }
        </main>
    )
}
export default Main