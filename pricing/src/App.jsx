import './App.css';
import PricingCard from './components/PricingCard';
import { useState } from 'react';
function App() {
  const [selectMonthly,setSelectMonthly] = useState(true)
  return (
    <div className="PricingApp">
      <div className="AppContainer">
        <header>
          <h1 className='header-topic'>Our Pricing Plan</h1>
          <div className="header-row">
            <p>Anually</p>
            <label className='price-switch'>
              <input type="checkbox" className='price-checkbox'
              onChange={() =>
                setSelectMonthly((prev) => !prev)
              }/>
              <div className="switch-slider"></div>
            </label>
            <p>Monthly</p>
          </div>

        </header>
        <div className="pricing-cards">
          <PricingCard
          title = 'Essential'
          price ={selectMonthly ? '19.99' : '199.99'}
          storage ='600GB Storage'
          users='5'
          sendUp="5"
          />
          <PricingCard
          title = 'Deluxe'
          price ={selectMonthly ? '29.99' : '299.99'}
          storage ='1200GB Storage'
          users='20'
          sendUp="20"
          />
          <PricingCard
          title = 'Premium'
          price ={selectMonthly ? '49.99' : '499.99'}
          storage ='2400GB Storage'
          users='50'
          sendUp="50"
          />
        </div>
      </div>
    </div>
    

  )
}

export default App;
