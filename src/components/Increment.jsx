import React from 'react'
import { increment } from '../Store/CounterSlice/CounterSlice'
import { useDispatch } from 'react-redux'


function Increment() {
  const payload=10;
  const dispatch = useDispatch()
const incrementHandler=()=>{
  dispatch(increment(payload))

  }
  return (
    <div><button onClick={()=>incrementHandler()}>increment by 10</button></div>
  )
}

export default Increment