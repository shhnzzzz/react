import React from 'react'
import RightCrad from './RightCrad'

const RightContent = (props) => {
  return (
    <div id='right' className='h-full w-2/3 flex overflow-x-auto flex-nowrap gap-5 p-4'>
      {props.users.map(function(elem,idx){

        return <RightCrad key={idx} id={idx} color={elem.color} intro={elem.intro} img={elem.img} tag ={elem.tag}/>
      })}
    </div>
  )
}

export default RightContent
