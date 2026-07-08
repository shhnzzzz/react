import React from 'react'

const RightCardContent = (props) => {
  return (
     <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between '>
            <h2 className='bg-white rounded-full h-12 w-12 text-center text-xl font-bold flex justify-center items-center'>{props.id+1}</h2>
            <div>
                <p className='text-shadow-xs text-xl text-white leading-relaxed mb-14'>{props.intro}</p>
                <div className='flex flex-row justify-between'>
                    <button style={{backgroundColor:props.color}} className=' text-white font-normalf px-7 py-2 rounded-full text-1xl'>{props.tag}</button>
                    <button style={{backgroundColor:props.color}} className=' text-white font-medium px-3 py-2 rounded-full text-1xl'><i class="ri-arrow-right-line"></i></button>
                </div>
            </div>
           

        </div>
  )
}

export default RightCardContent
