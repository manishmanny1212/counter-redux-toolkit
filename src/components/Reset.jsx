import React from 'react'
import { useDispatch } from 'react-redux'
import { resetAll } from '../Store/CounterSlice/CounterSlice'

function Reset() {
   const dispatch=useDispatch()
  const resetHandler=()=>{
    dispatch(resetAll())
  }
  return (
    <div><button onClick={()=>{
      resetHandler()
    }}>reset all</button></div>
  )
}

export default Reset