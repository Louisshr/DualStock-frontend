import { isNumber } from "./homepageUtils";

export default function TrendingStocksElement(props){

    let defaultStyles = {color: 'black'}

    let valueOK = isNumber(props.stock.value);
    if (valueOK) {defaultStyles.color = parseFloat(props.stock.value.replace(',', '.')) >= 0 ? "#3DAE23" : "#E8464A";}    
    
    let changeOK = isNumber(props.stock.change);
    if (valueOK) {defaultStyles.color = parseFloat(props.stock.change.replace(',', '.')) >= 0 ? "#3DAE23" : "#E8464A";}  

    let changePercentOK = isNumber(props.stock.changePercent);
    if (valueOK) {defaultStyles.color = parseFloat(props.stock.change.replace(',', '.')) >= 0 ? "#3DAE23" : "#E8464A";}      

    return(
        <tr>
            <td className="tableRow--text--default" style={{whiteSpace: 'nowrap'}}>
                <div className="trendingStocks--symbol--minimized">
                    <p className="trendingStocks--symbol--minimized--symbol">{props.stock.symbol}</p>
                    <p className="trendingStocks--symbol--minimized--symbol trendingStocks--minimized--name trendingStocks--minimized--display">{props.stock.longName}</p>
                </div>
            </td>
            <td className="trendingStocks--text--style">{props.stock.longName}</td>
            {valueOK && <td className="tableRow--text--default trendingStocks--price--display" style={defaultStyles}>{props.stock.value}</td>}
            {changeOK && <td className="tableRow--text--default trendingsStocks--change--display" style={defaultStyles}>{props.stock.change}</td>}
            {changePercentOK && <td className="tableRow--text--default" style={defaultStyles}>{props.stock.changePercent}%</td>}
        </tr>  
    )
}