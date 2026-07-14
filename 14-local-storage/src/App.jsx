import React from 'react'

const App = () => {
  const user={
    username:'Shahi',
    age:20,
    city:'Silchar'
  }
  localStorage.setItem('user',JSON.stringify(user))
  const user1=localStorage.getItem('user')
  console.log(user1)
  console.log(JSON.parse(user1))
  return (
    <div>
      
    </div>
  )
}

export default App
