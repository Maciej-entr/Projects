import React, { useContext, useEffect, useState } from 'react'
import './Home.css'
import { Context } from '../../context/Context'
const Home = () => {

    const{allCoin, currency} = useContext(Context)
const[displayCoin,setDisplayCoin] = useState([])
const [search, setSearch] = useState('');

const searchHandler = (event)=>{
setSearch(event.target.value)
if(event.target.value ===""){
    setDisplayCoin(allCoin)
}
}
const formHandler = async (event)=>{
    event.preventDefault()
    const coins = await allCoin.filter((item)=>{
return item.name.toLowerCase().includes(search.toLowerCase())
    })
    const prefix = await allCoin.filter((item)=>{
        return item.symbol.toLowerCase().includes(search.toLowerCase())
    })
    setDisplayCoin(coins && prefix)
}

useEffect(()=>{
    setDisplayCoin(allCoin)
},[allCoin])

  return (
    <div className='home'>
        <div className="hero">
            <h1>Largest Crypto <br />Marketplace</h1>
        <p>Welcome to the world's largest crypto marketplace. Sign up to explore more about this inventious world.</p>
        <form  onSubmit={formHandler}>
            <input onChange={searchHandler} value={search} type="text" placeholder='Search crypto' required/>
            <button type='submit'>Search</button>
        </form>
        </div>
   <div className="crypto-table">
    
    <div className="table-layout">
        <p>#</p>
        <p>Coin</p>
        <p>Price</p>
        <p style={{textAlign:"center"}}>24H change</p>
        <p className='market-cap'>Market Cap</p>
        </div>
        {displayCoin.slice().map((item,index)=> (
            <div className="table-layout" key={index}>
<p>{item.market_cap_rank}</p>
<div>
<img src={item.image} alt="" />
<p>{item.symbol +" "+ item.name}</p>
</div>
<p>{currency.symbol} {item.current_price}</p>
<p>{Math.floor(item.price_change_percentage_24h*100)/100}%</p>
<p className='market-cap'>{Math.floor(item.market_cap/1000000000)}-bln</p>
            </div>
        ))}
    </div>
    </div>
    
  )
}

export default Home