import Card from "./Card";

export const CreateExploreStocksCards = (data) =>{    
    let cardElements = []
    let j = data.length >= 4 ? 4 : data.length;
    for (let i = 0; i < j; i++){
        cardElements.push(<Card key={data[i].symbol} stock={data[i]}/>)                
    }    
    return cardElements;
}

export const handleFetchErrors = response => {
    if (!response.ok) {
        console.log("STATUS: handleErrors melding:")
      throw Error(response.statusText);
    }
    return response;
  }

export function isNumber(obj){
    if (obj !== null){  
        try{
            let valueParsed = parseFloat(obj.replace(',', '.').replace('−','-'));                
            if (!isNaN(valueParsed)){                                 
                return true;                  
            }                    
        }
        catch(error){
            console.log("error: ", error.message);
            return false;
        }
    }
    return false;
}

export function parseToNumber(obj){
  if (obj !== null){  
    try{
        let valueParsed = parseFloat(obj.replace(',', '.').replace('−','-')); 
        return valueParsed;                            
    }
    catch(error){
        console.log("error: ", error.message);
        return false;
    }
  }
  return false;
}