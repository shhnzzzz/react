import React from 'react'

const Card = (props) => {
    console.log(props)
  return (
     <div className="card">
        <img src={props.img} alt="profile" /><h1>{props.user}</h1>
        <p>Age: {props.age}</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, saepe?</p>
      <button>View Details</button>
      </div>
  )
}

export default Card
