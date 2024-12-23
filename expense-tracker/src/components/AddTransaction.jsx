import React from 'react'
import { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
const AddTransaction = () => {
    const[text,setText] = useState('')
    const[amount,setAmount] = useState('')
    const {addTransaction} = useContext(GlobalContext)
    const onSubmit = (e) =>{
        e.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random() * 1000000000),
        text,
        amount: +amount,
        
        
        }
        addTransaction(newTransaction)

    }
  return (
    <div>
        <h3>Add new transaction</h3>
        <form 
        onSubmit={onSubmit}
        id="form">
            <div className="form-">
                <label htmlFor="text">Title</label>
            <input type="text" value={text} 
           onChange={(e) => setText(e.target.value)} id="text" placeholder='Enter text...' />
            </div>
            <div className="form-control">
                <label htmlFor="amount">
                    Amount <br />
                    (negative = expense, positive = income)
                </label>
                <input type="number" 
                value={amount} 
                onChange={(e) => setAmount(e.target.value)}
                id="amount" placeholder='Enter amount...'/>
            </div>
            <button className="btn">Add</button>
        </form>
    </div>
  )
}

export default AddTransaction