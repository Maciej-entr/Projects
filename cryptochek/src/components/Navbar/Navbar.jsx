import React, { useContext } from 'react'
import './Navbar.css'
import { Context } from '../../context/Context'
const Navbar = () => {

const {setCurrency} = useContext(Context)

const currencyHandler = (event) => {
switch (event.target.value){
    case "usd":{
        setCurrency({name: 'usd', symbol:'$'});
        break;
    }
    case "eur":{
        setCurrency({name: 'eur', symbol:'€'});
        break;
    }
    case "pln":{
        setCurrency({name: 'pln', symbol:'zl'});
        break;
    }
    default: {
        setCurrency({name: 'pln', symbol:'zl'});
        break;
    }
}
}

  return (
    <div className='navbar'>
        <h1>CRYPTO-CHECK</h1>
        <ul>
            <li>Home</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Blog</li>
        </ul>
        <div className="nav-right">
            <select onChange={currencyHandler}>
                <option value="usd">USD</option>
                <option value="pln">PLN</option>
                <option value="eur">EUR</option>
            </select>
            <button>Sign Up</button>
        </div>

    </div>
  )
}

export default Navbar