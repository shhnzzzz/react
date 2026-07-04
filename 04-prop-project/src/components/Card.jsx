import React from 'react'
import { Bookmark } from 'lucide-react'

const Card = (props) => {
console.log(props)
  return (
    <div>
      <div className="card">
        <div className="top">
         <img src={props.img} alt={props.name} className="logo" />
          <button className="save">
            Save
            <Bookmark />
          </button>
        </div>
        <div className="body">
          <div className="name">{props.name}
            <div className="updatetime">{props.updatetime}</div>
          </div>
          <div className="position">{props.position}</div>
          <div className="btn">
            <button className="type">{props.type}</button>
            <button className="level">{props.level}</button>
          </div>
        </div> 
        <div className="divider"></div>
        <div className="bottom">
           
          <div className="price">{props.price}
            <div className="location">{props.location}</div>
          </div>
          <button className="apply">Apply now</button>
        </div>
      </div>
    </div>
  )
}

export default Card
