import React from 'react'
import './Range.css'

const range = (props) => {
    return (
        <div className="Range">
            <p>Minimum reps:</p>
            <input type="number" onChange={props.changeMin} value={props.min} />
            <p>Maximum reps:</p>
            <input type="number" onChange={props.changeMax} value={props.max} />
        </div>
    )
}

export default range 