import React from 'react'
import Range from '../Range/Range'
import './Main.css'
import Button from '../Button/Button'

const main = (props) => {
    // console.log(props)
    let greeting = <h4>Hi {props.username}. Get Ready for your workout!</h4>
    if(!props.username) {
        greeting = <h4>Hi there. Get Ready for your workout!</h4>
    }
    if(props.workoutStarted) {
        greeting = <h4>Don't stop now, keep going!</h4>
    }
    return (
        <div className="Main">
            {greeting}
            <Range changeMin={props.changeMin} changeMax={props.changeMax} min={props.min} max={props.max} />
            <p><strong>Workout:</strong> {props.currentWorkout}</p>
            <p><strong>Reps:</strong> {props.reps}</p>
            <Button clicked={props.clicked} max={props.max}>START</Button>
            <br />
            <p>Did you complete the challenge?</p>
            <Button clicked={props.clickYes} max={props.max}>YES</Button>
            <Button clicked={props.clickNo} max={props.max}>NO</Button>
        </div>
    )
}


export default main