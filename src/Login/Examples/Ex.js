import React from 'react'

function handle(){
        alert("Welcome");
}
const Ex = () => {
  return (
    <button onClick={handle}>Click here</button>
  )
}

export default Ex