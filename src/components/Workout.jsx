import React from 'react'
import SectionWrapper from './SectionWrapper'
import ExerciseCard from './ExerciseCard'

export default function Workout(props) {
    const {workout, i} = props
    console.log("Mic Check 1 2 3", workout)
  return (
    <div>
        <SectionWrapper heading={'Welcome to'} title={['The ', ' Danger ', ' Zone ']}>
            {workout.map((card,cardIndex) => {
                    return(
                        <ExerciseCard card={card} key={cardIndex} cardIndex={cardIndex}/>
                    )
            })}
        </SectionWrapper>
    </div>
  )
}
