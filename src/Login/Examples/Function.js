import React from 'react'

const Function = () => {
  return (
    <Greeting name="Anjali"/>
  )
}

const Greeting = (a) => {
  return (
    <h1>Hello, {a.name}! Welcome to SKCET!</h1>
  )
}

export default Function