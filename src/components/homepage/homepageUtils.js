import Card from "./Card";

export const CreateExploreStocksCards = (data) =>{    
    let cardElements = []
    let j = data.length >= 4 ? 4 : data.length;
    for (let i = 0; i < j; i++){
        cardElements.push(<Card key={data[i].symbol} stock={data[i]}/>)                
    }    
    return cardElements;
}