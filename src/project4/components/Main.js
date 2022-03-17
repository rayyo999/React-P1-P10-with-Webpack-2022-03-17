import React from "react";
import Card from "./Card";
import { data } from "./data";

const Main = () => {
    return (
        <main className="main-p4">
        {
            data.map(item => {
                return <Card key={item.id} info={item}/>
            })
        }
        </main>
    )
}
export default Main