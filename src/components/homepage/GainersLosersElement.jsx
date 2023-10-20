export default function GainersLosersElement(props){
    // if rendering stock GAINERS; numbers will be green
    // if rendering stock LOSERS; numbers will be red
    const performanceIndicatorColor = {'color': props.showStockGainers ? "#3DAE23" : "#E8464A"}    
    return(
        <tr className='position--relative'>                                                            
            <td className='gainer--cells'>
                <div className='gainer--marked--div'>
                    <p className='tableRow--text--default position--relative'>{props.stock.symbol}</p>
                    <p className='gainer--marked--longname'>{props.stock.longName}</p>
                </div>
            </td>                                                                                              
            <td className='gainer--price--td'>       
                <p style={performanceIndicatorColor} className='gainer--price--td--text'>{props.stock.value}</p>                                                                                                                                        
            </td> 
            <td className='gainer--change--td'>       
                <p style={performanceIndicatorColor} className='gainer--change--td--text'>{props.stock.changePercent}%</p>                                                                                                                                        
            </td>                                                                                                                               
        </tr>  
    )
}