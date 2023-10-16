import React from 'react';
import Card from './Card';
import data from './data.js';
import Table from 'react-bootstrap/Table';
import TrendingStocksElement from './TrendingStockElement';


export default function Homepage(){
    const[stockData, setStockData] = React.useState(data)  
    
    const cardElements = stockData.trendingStocks.map(stock => {
        return(
            <Card key={stock.symbol} stock={stock}/>
        )
    })

    const trendingStocksElements = stockData.trendingStocks.map(stock => {
        return(
            <TrendingStocksElement stock={stock}/>
        )
    })      
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
                        {cardElements}
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
        </div>
    )
}