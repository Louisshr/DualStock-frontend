import React from 'react';
import Card from './Card';
//import data from './data.js';
import gainerData from './gainerData.js';
import loserData from './loserData.js';
import Table from 'react-bootstrap/Table';
import TrendingStocksElement from './TrendingStockElement';
import GainersLosersElement from './GainersLosersElement';
import { CreateExploreStocksCards, handleFetchErrors } from './homepageUtils'; 


export default function Homepage(){
    const[stockData, setStockData] = React.useState(null)
    const[exploreStockElements, setExploreStockElements] = React.useState([]);
    const[trendingStocksElements, setTrendingStocksElements] = React.useState([]);
    const[stockGainerElements, setStockGainerElements] = React.useState([]);
    const[stockLoserElements, setStockLoserElements] = React.useState([]);
    const[stockGainerData, setStockGainerData] = React.useState(gainerData);  
    const[stockLoserData, setStockLoserData] = React.useState(loserData);  
    /*
    const cardElements = stockData.trendingStocks.map(stock => {
        return(
            <Card key={stock.symbol} stock={stock}/>
        )
    })

    const trendingStocksElements = stockData.trendingStocks.map(stock => {
        return(
            <TrendingStocksElement key={stock.symbol} stock={stock}/>
        )
    })      
    
    
    const stockGainerElements = stockGainerData.stockGainers.map(stock => {
        return(
            <GainersLosersElement key={stock.symbol} showStockGainers={true} stock={stock}/>
        )
    })
    

    const stockLoserElements = stockLoserData.stockLosers.map(stock => {
        return(
            <GainersLosersElement key={stock.symbol} showStockGainers={false} stock={stock}/>
        )
    })    
    */          

    React.useEffect(() => {        
        fetch("https://localhost:7166/Stock/GetTrendingStocksAndGainersLosers",{
            method: "GET",                                
            headers: new Headers({                    
                'Access-Control-Allow-Origin':'*'
            })
        })
        .then(handleFetchErrors)
        .then(response => response.json())       
        .then((data) => {
            setExploreStockElements(CreateExploreStocksCards(data.trendingStocks));
            setTrendingStocksElements(data.trendingStocks.map(stock => {
                return(
                    <TrendingStocksElement key={stock.symbol} stock={stock}/>                        
                )                
            }))
            setStockGainerElements(data.stockGainers.map(stock => {
                return(
                    <GainersLosersElement key={stock.symbol} showStockGainers={true} stock={stock}/>
                )
            }))      
            setStockLoserElements(data.stockLosers.map(stock => {
                return(
                    <GainersLosersElement key={stock.symbol} showStockGainers={false} stock={stock}/>
                )
            }))      
            setStockData(data);        
        })
        .catch(error => {   
            // checking if there is a problem with the JSON structure
            if (error instanceof SyntaxError){console.log('There was a SyntaxError', error);}
            else{console.error("Failed to fetch:", error);}                     
        });                            
    },[])    

    return(
        <div>
            <div className='outer--input--container'>
                <div className='input--container'>
                    <input
                    type="text"
                    placeholder="Search for symbols..."
                    />
                    <img className='searchicon' src='/images/searchicon1.png' alt=''></img>
                </div>        
            </div>
            <div className='exploreStocks--container'>
                <h1 className='header--default header--exploreStocks'>Explore Stocks</h1>
                <div className='exploreStocks--container--scrollBar'>
                    <div className='exploreStocks--container--cards'>                                                                
                        {exploreStockElements}
                    </div>
                </div>              
            </div>            
            <div className='trendingStocks--container'>
                <h1 className='header--default header--trendingStocks'>Trending Stocks</h1>
                <div className='trendingStocks--container--table'>
                    <Table hover responsive>
                        <thead style={{border: "hidden"}}>
                            <tr style={{backgroundColor: "rgba(164, 164, 164, 0.05)"}}>
                                <th style={{backgroundColor: 'transparent'}} className='table--header--default trendingStocks--symbol--th'>Symbol</th>
                                <th style={{backgroundColor: 'transparent'}} className='table--header--default trendingStocks--name--th'>Name</th>
                                <th style={{backgroundColor: 'transparent', whiteSpace: 'nowrap'}} className='table--header--default trendingStocks--price--th trendingStocks--price--display'>Price (Intraday)</th>
                                <th style={{backgroundColor: 'transparent'}} className='table--header--default trendingStocks--change--th trendingsStocks--change--display'>Change</th>
                                <th style={{backgroundColor: 'transparent'}} className='table--header--default trendingStocks--changePercent--th'>Change (%)</th>                        
                            </tr>
                        </thead>  
                    <tbody>
                        {trendingStocksElements} 
                    </tbody>          
                    </Table> 
                </div>   
            </div>  
            <div className='gainerAndLoser--container'>
                <div className='gainer--container'>
                    <h1 className='header--default header--gainer'>Gainers</h1>
                    <div id='gainer--override--bootstrap' className='gainer--table'>
                        <Table hover responsive className='gainer--table--element'>
                            <thead style={{border: "hidden"}}>
                                <tr style={{backgroundColor: "rgba(164, 164, 164, 0.05)"}}>
                                    <th style={{backgroundColor: 'transparent'}} className='table--header--default gainer--marked--th'>Marked</th>
                                    <th style={{backgroundColor: 'transparent', whiteSpace: 'nowrap'}} className='table--header--default gainer--price--th'>Price (Intraday)</th>
                                    <th style={{backgroundColor: 'transparent', whiteSpace: 'nowrap'}} className='table--header--default gainer--change--th'>Change (%)</th>                                                        
                                </tr>
                            </thead> 
                            <tbody>                            
                                {stockGainerElements}
                            </tbody>
                        </Table> 
                    </div>
                </div>
                <div className='gainer--container'>
                    <h1 className='header--default header--loser'>Losers</h1>
                    <div id='gainer--override--bootstrap' className='gainer--table'>
                        <Table hover responsive className='gainer--table--element'>
                            <thead style={{border: "hidden"}}>
                                <tr style={{backgroundColor: "rgba(164, 164, 164, 0.05)"}}>
                                    <th style={{backgroundColor: 'transparent'}} className='table--header--default gainer--marked--th'>Marked</th>
                                    <th style={{backgroundColor: 'transparent', whiteSpace: 'nowrap'}} className='table--header--default gainer--price--th'>Price (Intraday)</th>
                                    <th style={{backgroundColor: 'transparent', whiteSpace: 'nowrap'}} className='table--header--default gainer--change--th'>Change (%)</th>                                                        
                                </tr>
                            </thead> 
                            <tbody>                            
                                {stockLoserElements}
                            </tbody>
                        </Table> 
                    </div>
                </div>
            </div>                               
        </div>
    )
}   