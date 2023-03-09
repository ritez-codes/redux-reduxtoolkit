import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { decNum, incNum } from '../features/counter/counterSlice';

function Counter() {
     const counter = useSelector(state => state.counter)
     const dispatch = useDispatch();


     // console.log(counter)
     return (
          <div className='container'>
               <button onClick={() => {
                    dispatch(decNum(5))
               }} className='btn' >-</button>
               <p className='num-box'>{counter.value}</p>
               <button onClick={() => {
                    dispatch(incNum(5));
               }} className='btn' >+</button>
          </div>
     )
}

export default Counter
