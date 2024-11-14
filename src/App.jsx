import { useState } from 'react'
import Hero from './components/Hero'
import Generator from './components/Generator'
import Workout from './components/Workout'
import {generateWorkout} from './utils/functions'

function App() {

  const [poison, setPoison] = useState('individual');
  const [muscles, setMuscles] = useState([]);
  const [goal, setGoal] = useState('strength_power');
  const [workout, setWorkout] = useState(null);

  function updateWorkout(){
    if(muscles.length < 1){
      return
    }

    let newWorkout = generateWorkout({poison,muscles,goal})
    setWorkout(newWorkout);
    console.log(workout,"here should be workout")
  }

  return (
    <main className='min-h-screen bg-gradient-to-r from-teal-600 to-sky-950 text-white text-sm sm:text-base'>
      <Hero />
      <Generator poison={poison} setPoison={setPoison} muscles={muscles} setMuscles={setMuscles} goal={goal} setGoal={setGoal} updateWorkout={updateWorkout} />
      {workout && <Workout workout={workout}/>}
    </main>
  )
}

export default App