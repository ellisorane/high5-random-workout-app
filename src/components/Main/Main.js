import React from 'react'
import Range from '../Range/Range'
import './Main.css'
import Button from '../Button/Button'

const main = (props) => {
    // console.log(props)
    let greeting = <h5>Hi {props.username}. Get Ready for your workout!</h5>
    if(!props.username) {
        greeting = <h5>Hi there. Get Ready for your workout!</h5>
    }
    return (
        <div className="Main">
            {greeting}
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