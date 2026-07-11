import React, { useState } from 'react'

const App = () => {

  const [num, setnum] = useState(10)

  const btnClicked = () =>{
    // const newNum = [...num]
    // newNum.push(90)
    // setnum(newNum)
    setnum(prev => (prev + 1))
    console.log(newNum)

  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btnClicked}>Click</button>
    </div>
  )
}

export default App
