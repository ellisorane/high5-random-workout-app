import React from 'react'
import Range from '../Range/Range'
import './Main.css'


const main = (props) => {
    return (
        <div className="Main">
            <Range changeMin={props.changeMin} changeMax={props.changeMax} min={props.min} max={props.max} />
            <p>Workout: {props.currentWorkout}</p>
            <p>Reps: {props.reps}</p>
            <button onClick={props.clicked} className="mainButton">Click</button>
            <br />
            <p>Did you complete the challenge?</p>
        </div>
    )
}


export default main