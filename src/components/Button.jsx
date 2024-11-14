import React from 'react'

export default function Button(props) {
    const{text, func} = props
  return (
    <button onClick={func} className='border-[2px] shadow duration-200 border-amber-400 bg-stone-800 rounded-lg px-5 py-3 mx-auto'>
        <p>{text}</p> 
    </button>
  )
}
