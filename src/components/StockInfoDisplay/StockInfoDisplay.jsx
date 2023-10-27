import { useLocation } from "react-router-dom"

export default function StockInfoDisplay(){
    const {state} = useLocation();
    state.daily.forEach(d => {
        console.log(d.volume);
    })
    console.log("fra sid: " + state.daily);
    return(
        <h1>stock info display</h1>
    )
}