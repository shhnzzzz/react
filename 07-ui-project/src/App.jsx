import React from 'react'
import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'


const App = () => {
  const users = [
    {
     
      img:'https://plus.unsplash.com/premium_photo-1674055047975-70b79b84d871?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      color:'blue',
      intro:'Prime customers, that have access to bank credit and are satisfied with the current product',
      tag:'Satisfied'
    },
    {
      
      img:'https://images.unsplash.com/photo-1730717649700-d363f064efb9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        color:'green',
      intro:'Prime customers, that have access to bank credit and are not satisfied with the current service',
      tag:'Underserved'
    },
    {
    
      img:'https://plus.unsplash.com/premium_photo-1661765873819-2dd94bd32016?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        color:'lightseagreen',
      intro:'Customers from near-prime and sub-prime segments with no access to bank credit',
      tag:'Underbanked'
    },
    
    {
    
      img:'https://images.unsplash.com/photo-1752170080627-0324ede1ddf2?q=80&w=1049&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        color:'blue',
      intro:'Prime customers, that have access to bank credit and are satisfied with the current product',
      tag:'Satisfied'
    },
    
    {
    
      img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        color:'lightseagreen',
      intro:'Customers from near-prime and sub-prime segments with no access to bank credit',
      tag:'Underbanked'
    },
    
  ]
  return (
    <div>
      
      <Section1 users={users}/>
      <Section2/>
    </div>
  )
}

export default App
