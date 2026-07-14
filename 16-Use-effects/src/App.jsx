import React, { useEffect } from 'react'
import { useState } from 'react'

const App = () => {

  const [a, seta] = useState(8)
  const [b, setb] = useState(10)

  function aChanging(){
    console.log("A is changing")

  }
  function bChanging(){
    console.log("B is changing")
  }

  useEffect(function(){
  aChanging()
  },[a,b])
  
  return (
    <div>
      <h1>A is {a}</h1>
      <button 
      onClick={()=>{
        seta(a+1)
      
      }}
      >
        ChangeA</button>
      <h1>B is {b}</h1>
      <button
      onClick={()=>{
          setb(b-1)
      }
      }
      >ChangeB</button>
      
    </div>
  )
}

export default App
