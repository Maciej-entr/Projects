import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../../Context/StoreContext'
const PlaceOrder = () => {
    const {getTotalCartAmount} = useContext(StoreContext)
  return (
    <form className="place-order">
        <div className="place-order-left">
            <p className='title'>Delievery Information</p>
            <div className="multi-fields">
                <input type="text" placeholder='First Name' />
                <input type="text" placeholder='Last Name' />
            </div>
            <input type="email" placeholder='Email address'/>
            <input type="text" placeholder='Street'/>
            <div className="multi-fields">
                <input type="text" placeholder='City' />
                <input type="text" placeholder='Apartment' />
            </div>
            <div className="multi-fields">
                <input type="text" placeholder='Zip' />
                <input type="text" placeholder='Country' />
            </div>
            <input type="number" placeholder='Phone number'/>
        </div>
        <div className="place-order-right">
        <div className="cart-total">
                <h2>Cart Total</h2>
                <div>
                    <div className="cart-total-details">
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="cart-total-details">
                        <p>Delievery Fee</p>
                        <p>${15}</p>
                    </div>
                    <hr />
                    <div className="cart-total-details">
                        <b>Total</b>
                        <b>${getTotalCartAmount()+15}</b>
                    </div>
                </div>
                <button >PROCEED TO PAYMENT</button>
            </div>

        </div>
    </form>
  )
}

export default PlaceOrder