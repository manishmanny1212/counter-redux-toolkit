import React from 'react'
import { useSelector } from 'react-redux'

function DisplayCounter() {
  const counterData=useSelector((state) => state.counter)
  return (
    <div>DisplayCountern {counterData}</div>
  )
}

export default DisplayCounter