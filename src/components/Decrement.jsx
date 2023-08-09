import React from 'react'
import { useDispatch } from 'react-redux'
import { decrement } from '../Store/CounterSlice/CounterSlice';

function Decrement() {
  const paylode=5;
  const dispatch=useDispatch();
  const decrementHandler=()=>{
    dispatch( decrement(paylode))
  }
  return (
    <div><button onClick={()=>{decrementHandler()}}>decrement by five</button></div>
  )
}

export default Decrement