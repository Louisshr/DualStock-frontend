import React from "react";

export default function Card(props){           
    let x = parseFloat(props.stock.change.replace(',', '.'));    
    let style = {color: x >= 0 ? "#3DAE23" : "#E8464A"};
          
    return(
        <div className='exploreStocks--card'>
            <div className='content--container'>
                <div className='content--info'>
                    <p className='content--info--symbol txt-default'>{props.stock.symbol}</p>
                    <p className='content--info--longname txt-default'>{props.stock.longName}</p>                            
                </div>                
                <div className='content--numbers'>
                    <p className='content--numbers--default txt-default' style={style}>{props.stock.value}</p>
                    <p className='content--numbers--default txt-default' style={style}>{props.stock.changePercent}%</p>
                </div>
            </div>
        </div>
    )
}

// fiks
// hva hvis nummer ikke finnes