import React from "react";
import { useLocation } from "react-router-dom";
import { isNumber, parseToNumber } from "../homepage/homepageUtils";
import appleData from "../homepage/appleData";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
    Animation
  } from 'chart.js';
import { Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
  );
  
export default function StockInfoDisplay(){        
    const [options, setOptions] = React.useState({ 
        type: 'line',
        animation:{
            x:{
                type:'number',
                duration: 0,
                easing: 'linear',                
                from: NaN, 
                /*  
                delay(ctx) {
                    if (ctx.type !== 'data' || ctx.xStarted) {
                      return 0;
                    }
                    ctx.xStarted = true;
                    return ctx.index * 20;
                  }           */           
            },
            y:{
                type:'number',
                duration: 0,
                easing: 'linear',                
                from: 173,   
                /*
                delay(ctx) {
                    if (ctx.type !== 'data' || ctx.yStarted) {
                      return 0;
                    }
                    ctx.yStarted = true;
                    return ctx.index * 20;
                  }     */            
            }
        },
        interaction: {
            intersect: false
        },
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: false,
            /*
            legend:{
                position: 'top'
            },*/
            title: {
            display: false,
            text: 'Chart.js Line Chart',
            },                      
        },
        scales: {
            /*
            x: {
              type: 'linear'
            }*/
          }
      })

    const {state} = useLocation();
    // stockDataPeriod contains either weekly or monthly stock data. Initial value is daily. 
    const [stockDataPeriod, setStockDataPeriod] = React.useState(state.data.daily); 

    let performanceIndicatorColor = {"color":"black"};
    let performanceIndicatorColorChart = {"rgba":"rgba(61, 174, 35, 0.2)"}
    const changeOK = isNumber(state.data.change);
    if (changeOK){
        const changeParsed = parseToNumber(state.data.change);
        if (changeParsed != false)
        {
            performanceIndicatorColor.color = changeParsed >= 0 ? "#3DAE23" : "#E8464A";
            performanceIndicatorColorChart.rgba = changeParsed >= 0 ? "rgba(61, 174, 35, 0.2)" : "rgba(232, 70, 74, 0.2)";
        }            
    }
    
    const chartData = {        
        stockDataPeriod,
        datasets: [
            {
            label: 'Dataset',
            data: stockDataPeriod.map(stock => stock.close),
            borderColor: performanceIndicatorColor.color,
            backgroundColor: performanceIndicatorColorChart.rgba, 
            fill: true,
            borderWidth: 1,
            radius: 3,                       
            },        
        ],        
        labels: stockDataPeriod.map(stock => stock.dateTime.split("T")[0].split("-")[2])
    }

    function changeChart(){
        setStockDataPeriod(state.data.weekly);        
    }

    React.useEffect(() => {
        document.body.style.backgroundColor = "rgba(164, 164, 164, 0.10)";
    },[])
    return(
        <div>
            <div className="white--div--box"></div>
            <hr className="horizontalLine" />
            <div className="stock--overview--panel">
                <div className="stock--details">
                    <div className="stock--details--name">
                        <p className="txt-default stock--details--symbol">{state.data.symbol}</p>
                        <div className="stock--details--separator"></div>
                        <p className="txt-default stock--details--longName">{state.data.longName}</p>
                    </div>
                    <p style={performanceIndicatorColor} className="txt-default stock--details--price">{state.data.value}</p>                        
                </div>
                <div className="buy--sell--container" style={{}}>
                    <button className="buy--button trade--button--default">Buy</button>
                    <button className="sell--button trade--button--default">Sell</button>
                </div>
            </div>
            <hr style={{"marginTop":"0px"}} className="horizontalLine" />
            <div className="intraday--panel">
                <div className="intraday--panel--div--default intraday--panel--price">
                    <p className="txt-default intraday--text--default">Price</p>
                    <p className="txt-default intraday--numbers--default">{state.data.value}</p>
                </div>
                <div className="intraday--panel--div--default intraday--panel--change">
                    <p className="txt-default intraday--text--default">Change</p>
                    <p className="txt-default intraday--numbers--default" style={performanceIndicatorColor}>{state.data.change}</p>
                </div>
                <div className="intraday--panel--div--default intraday--panel--changePercent">
                    <p className="txt-default intraday--text--default">Change(%)</p>
                    <p className="txt-default intraday--numbers--default" style={performanceIndicatorColor}>{state.data.changePercent}</p>
                </div>
                <div className="intraday--panel--div--default intraday--panel--bid">
                    <p className="txt-default intraday--text--default">Bid</p>
                    <p className="txt-default intraday--numbers--default">{state.data.bid}</p>
                </div>
                <div className="intraday--panel--div--default intraday--panel--ask">
                    <p className="txt-default intraday--text--default">Ask</p>
                    <p className="txt-default intraday--numbers--default">{state.data.ask}</p>
                </div>
                <div className="intraday--panel--div--default intraday--panel--high">
                    <p className="txt-default intraday--text--default">High</p>
                    <p className="txt-default intraday--numbers--default">{state.data.high}</p>
                </div>
                <div className="intraday--panel--div--default intraday--panel--low">
                    <p className="txt-default intraday--text--default">low</p>
                    <p className="txt-default intraday--numbers--default">{state.data.low}</p>
                </div>
                <div className="intraday--panel--div--default intraday--panel--volume">
                    <p className="txt-default intraday--text--default">Volume</p>
                    <p className="txt-default intraday--numbers--default">{state.data.volume}</p>
                </div>
            </div>
            <div className="chart--container">
                {<Line options={options} data={chartData}></Line>}
                <button onClick={changeChart} style={{"display":"none"}}>weekly</button>  
            </div>
        </div>
    )
}
