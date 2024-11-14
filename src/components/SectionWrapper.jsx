import React, { Children } from 'react'

export default function SectionWrapper(props) {

    const {children, heading, title} = props

  return (
    <section className='w-full flex flex-col gap-4 '>
        <div className='bg-stone-800 flex flex-col text-lg justify-center items-center py-6 gap-4 '>
            <p className=''>{heading}</p>
            <p className='text-3xl lg:text-4xl sm:text-2xl'>{title[0]}  <span className='spanStyling text-5xl text-amber-500 lg:text-6xl sm:text-4xl'>{title[1]}</span>  {title[2]}</p>
        </div>
        
        <div className='flex flex-col mx-auto'>
            {children}
        </div>
    </section>
  )
}
