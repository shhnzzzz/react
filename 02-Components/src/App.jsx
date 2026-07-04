import React from 'react'
import Card from './components/card'
import Navbar from './components/navbar'
const App = () => {

  const User= 'Shahi'
  const age = 22
  return (
    <div>
      <div>
        <Navbar/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  )
}

export default App
