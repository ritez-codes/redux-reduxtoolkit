import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { incNum, decNum } from '../actions'

function Counter() {
     const num = useSelector(state => {
          return state.changeTheNum
     })
     const dispatch = useDispatch();
     return (
          <div>
               <h2>Increment/Decrement</h2>
               <div className='box'>
                    <button onClick={() => { dispatch(decNum()) }} >-</button>
                    <p className='count'>{num}</p>
                    <button onClick={() => { dispatch(incNum()) }} >+</button>
               </div>
          </div>
     )
}

export default Counter
