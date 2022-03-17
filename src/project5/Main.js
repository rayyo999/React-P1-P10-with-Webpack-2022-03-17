import React from "react";
import MemeInput from "./components/MemeInput";
import MemeOutput from "./components/MemeOutput";
import { useState } from "react";

const Main = () => {
    //const [memeOutput, memeInput] = useState(["",""]);
    const [memeOutput, memeInput] = useState({topText:'', buttomText:''});
    const [randomUrl, setrandomUrl] = useState("https://picsum.photos/300/200");
    

    return (
        <main className="main-p5">
            <MemeInput memeInput={memeInput} setrandomUrl={setrandomUrl}/>
            <MemeOutput memeOutput={memeOutput} randomUrl={randomUrl}/>
        </main>
    )
}
export default Main