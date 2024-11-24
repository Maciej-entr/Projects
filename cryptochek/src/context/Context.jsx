import { createContext, useEffect, useState } from "react";

export const Context = createContext()

const ContextProvider = (props) =>{
   
    const [allCoin,setAllCoin] = useState([])
    const[currency,setCurrency] = useState({
name: "USD",
symbol: "$"
    })

    const fetchAllCoin = async () => {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              'x-cg-demo-api-key': '	CG-8TT3hdEh4c4J8j13NsPbgZGR'
            }
          };
          
          fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
            .then(res => res.json())
            .then(res => setAllCoin(res))
            .catch(err => console.error(err));
    }

useEffect(()=>{
    fetchAllCoin()
},[currency])

const contextValue ={
allCoin,currency,setCurrency
}

    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider