import React from 'react'
import Button from './Button'

export default function Hero() {
  return (
    <section className='min-h-screen flex flex-col max-w-[800px] justify-center items-center text-center p-4 gap-10 w-full mx-auto'>
        <div className='flex flex-col gap-4 text-md sm: text-base'>
            <p>Do you have, what it takes to be</p>
            <h1 className='text-5xl sm:text-4xl lg:text6xl'>An <span className='text-amber-400 text-6xl sm:text-5xl lg:text-7xl'>Abbs</span>olute Titan</h1>
        </div>
        <div className='flex flex-col '>
            <p className='capitalize'>I acknowledge here that I will go through a <span className='text-amber-400 text-2xl'>transformation</span> so intense that my friends and family can't be able to reconize the <span className='text-amber-400 text-2xl'> brute</span> in front of them, so help me god.</p>
        </div>

        <Button text={'Let\'s March'}/>

    </section>
  )
}
