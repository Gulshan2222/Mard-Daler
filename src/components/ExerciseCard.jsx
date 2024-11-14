import { useState } from "react"
export default function ExerciseCard(props) {

    const {card, cardIndex} = props

    const [sets,setSets] = useState(0)

    function handleSets(){
        setSets((sets+1) % 6)
    }

  return (

    <div key={cardIndex} className="flex flex-col m-4 bg-stone-800 text-md sm:text-base p-4 max-w-[800px] gap-6">
        <div className="flex flex-row items-center justify-between">
            <h3 className="text-stone-300 text-5xl">{"0" + (cardIndex + 1)}</h3>
            <h4 className="text-xl capitalize">{card.name.replaceAll('_',' ')}</h4>
            <p className="text-stone-400 capitalize">{card.type}</p>
        </div>

        <div className="flex flex-col">
            <p className="text-sm text-stone-400 ">Muscle Groups</p>
            <p className="capitalize">{card.muscles.join(' & ')}</p>
        </div>

        <div className="flex flex-col">
            <p className="">{card.description}</p>
        </div>

        <div className="grid grid-cols-4">
            {['reps','rest','tempo'].map( (deets , deetsIndex) => {
                return(
                    <>
                        <div className="border-2 border-stone-700 p-2 capitalize mx-1" key={deetsIndex}>
                            <h6 className="text-stone-400">{deets==='reps' ? `${card.unit}` : deets}</h6>
                            <p>{card[deets]}</p>
                        </div>
                    </>     
                )
            })}
                    
            <button onClick={handleSets} className="border-2 border-stone-400 p-2 capitalize mx-1 text-left">
                <h6 className="text-stone-400">Sets Completed</h6>
                <p>{sets} / 5</p>
            </button>

        </div>

    </div>

    
)
}
