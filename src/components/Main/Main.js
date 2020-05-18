import React from 'react'
import Range from '../Range/Range'
import './Main.css'
import Button from '../Button/Button'

const main = (props) => {
    console.log(props)
    return (
        <div className="Main">
            <Range changeMin={props.changeMin} changeMax={props.changeMax} min={props.min} max={props.max} />
            <p>Workout: {props.currentWorkout}</p>
            <p>Reps: {props.reps}</p>
            <Button clicked={props.clicked} max={props.max} className="mainButton">START</Button>
            <br />
            <p>Did you complete the challenge?</p>
            <Button clicked={props.clickYes} max={props.max} className="Yes">YES</Button>
            <Button clicked={props.clickNo} max={props.max} className="No">NO</Button>
        </div>
    )
}


export default main