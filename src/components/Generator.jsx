import React, { useState } from 'react'
import SectionWrapper from './SectionWrapper'
import { SCHEMES, WORKOUTS } from '../utils/dataSource'
import Button from './Button'


function Header (props){
    const {number, title, description} = props
    return(
        <div className='flex flex-col  text-center justify-center items-center mt-10 gap-2'>
            <div className='flex flex-row gap-8 items-center'>
                <h2 className='text-6xl text-stone-300'>{number}</h2>
                <p className='text-3xl'>{title}</p>
            </div>
            <div className='flex flex-col'>
                <p>{description}</p>
            </div>
            
        </div>
    )
}

export default function Generator(props) {

    const {poison, setPoison, muscles, setMuscles, goal, setGoal, updateWorkout} = props

    const [showModal, setShowModal] = useState(false)

    function handleModal(){
        setShowModal(!showModal)
    }

    function updateMuscles(musclesGroup){
        if(muscles.includes(musclesGroup)){
            setMuscles(muscles.filter(val => val !== musclesGroup))
            return
        }

        if(muscles.length > 2){
            return
        }

        if(poison !== 'individual'){
            setMuscles([musclesGroup])
            setShowModal(false)
            return
        }

        setMuscles([...muscles, musclesGroup])

        if(muscles.length === 2){
            setShowModal(false)
        }
    }
    

  return (
    <>
        <SectionWrapper heading={"GENERATE YOUR WORKOUT"} title={['Lets\'','Hugify','Bro...']}>
            
            <div className='flex flex-col gap-12 mt-8'>

                <div className=''>
                    <Header number={'01'} title={'How to persist'} description={'Select the workout you want to endure'}/>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-6'>
                    {Object.keys(WORKOUTS).map((type,typeIndex) => {
                        return(
                            <button key={typeIndex} onClick={() => {setPoison(type)}}
                            className={'bg-stone-800 px-5 py-3 rounded-lg ' + (poison==type ?  ' border-amber-400 border-[2px]' : ' border-stone-800 border-[2px]')}>
                                <p className='capitalize'>{type.replaceAll('_',' ')}</p>
                            </button>
                        )
                    })}
                </div>

            </div>



            <div className='flex flex-col gap-12 mt-8'>

                <div className=''>
                    <Header number={'02'} title={'Tear Machine'} description={'Select the muscles judged for annihilation'}/>
                </div>

                <div className='bg-stone-800 border border-solid border-amber-500 flex flex-col rounded-xl mx-6'>
                    <button onClick={handleModal} className='flex flex-row p-4 text-center items-center justify-center relative'>
                        <p className='capitalize'>{muscles.length===0 ? 'Select the Muscles Group' : muscles.join(' ')}</p>
                        <i className="fa-solid fa-caret-down absolute right-3 top-1/2-translate-y-1/2"></i>
                    </button>
                

                    {showModal && 
                        <div className='flex flex-col pb-3 px-3 '>
                            {
                                (poison==='individual' ? 
                                WORKOUTS[poison] :
                                Object.keys(WORKOUTS[poison])).map((musclesGroup,musclesGroupIndex) => {
                                    return (
                                        <button key={musclesGroupIndex} 
                                        onClick={() => {
                                            updateMuscles(musclesGroup)
                                        }} 
                                        className={'hover:text-amber-200 duration-150' + (muscles.includes(musclesGroup) ? ' text-amber-400' : ' text-white')}>
                                            <p className='capitalize'>{musclesGroup}</p>
                                        </button>
                                    )
                                })
                            }
                        </div>
                    }
                </div>

            </div>


            <div className='flex flex-col gap-12 mt-8'>

                <div className=''>
                    <Header number={'03'} title={'Final Step'} description={'Select your Ultimate Objective'}/>
                </div>

                <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-6'>
                    {Object.keys(SCHEMES).map((scheme,schemeIndex) => {
                        return(
                            <button key={schemeIndex} onClick={() => {setGoal(scheme)}}
                            className={'bg-stone-800 px-5 py-3 rounded-lg ' + (goal==scheme ?  ' border-amber-400 border-[2px]' : ' border-stone-800 border-[2px]')}>
                                <p className='capitalize'>{scheme.replaceAll('_',' ')}</p>
                            </button>
                        )
                    })}
                </div>

            </div>
            
            <div className='flex flex-col my-20'>
                <Button text={'Formulate Workout'} func={updateWorkout}/>
            </div>
            
        </SectionWrapper>
    </>
    
  )
}
