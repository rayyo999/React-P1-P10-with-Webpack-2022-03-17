import React, {useState, useEffect} from "react";
import Card from "./Card";
const Main = () => {
    const [cards, setcards] = useState([0,0,0,0,0,0,0,0,0,0]);
    const [won, setwon] = useState(false);
    const [start, setstart] = useState(true);

    function initCards() {
        setcards(() => {
            const cardsArray = [];
            for(let i=0; i<10;i++){
                const info = {
                    id:i,
                    roll:true,
                    number:Math.ceil(Math.random()*6)
                }
                cardsArray.push(info)
            }
            return cardsArray
        })
        setstart(false);
        setwon(false);
    }
    function rollCards() {
        setcards(prevCards => {
            const newArray = [];
            for(let i=0; i<prevCards.length;i++){
                const currentCard = prevCards[i];
                if(currentCard.roll === true){
                    const updateCard = {
                        ...currentCard,
                        number:Math.ceil(Math.random()*6)
                    }
                    newArray.push(updateCard)
                } else {
                    newArray.push(currentCard)
                }
            }
            return newArray
        })
    }
    function setRollStop(id) {
        setcards(prevCards=>{
            const newArray = [];
            for(let i=0; i<prevCards.length;i++){
                const currentCard = prevCards[i];
                if(currentCard.id === id){
                    const updateCard = {
                        ...currentCard,
                        roll:!currentCard.roll
                    }
                    newArray.push(updateCard)
                }
                else{
                    newArray.push(currentCard)
                }
            }
            return newArray
        })
        
        
    }

    
    useEffect(() => {
        if(cards.length){
            const reset = cards.every(card => card.roll === false)
            const checkNumber = cards[0].number;
            const allSame = cards.every(card => card.number === checkNumber)
            if(reset && allSame){
                setwon(true)
            }
        }
    }, [cards]);

    return (
        <div className="main-p10">
            <div className="displayCards">
                {
                    cards.map((card, index)=>{
                        return <Card 
                            key={card.id ? card.id : index} 
                            id={card.id}
                            roll={card.roll}
                            number={card.number}
                            setRollStop={setRollStop}
                        />
                    })
                }
            </div>
            {
                start && 
                <button 
                    className="startBtn"
                    onClick={initCards}
                >
                    Start
                </button>
            }
            {
                !start &&
                !won &&
                <button 
                    className="rollBtn"
                    onClick={rollCards}
                >
                    Roll
                </button>
            }
            {   
                !start &&
                won &&
                <button 
                    className="resetBtn"
                    onClick={initCards}
                >
                    You Won!!!
                </button>
            }
        </div>
    )
}
export default Main