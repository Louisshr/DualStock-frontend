import './Homepage.css';

export default function Homepage(){
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
            <div className='outer--exploreStocks--container'>
                <h1 className='header--exploreStocks'>Explore Stocks</h1>
                <div className='exploreStocks--container'>
                    <div className='content--container'>
                        <div className='content--info'>
                            <p className='content--info--symbol txt-default'>MSFT</p>
                            <p className='content--info--longname txt-default'>Microsoft</p>                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}