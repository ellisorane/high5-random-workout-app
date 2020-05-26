import React from 'react'
import {Link} from 'react-router-dom'

import './SignIn.css'

const signIn = (props) => {
    let button = <Link className="signInLink" onClick={props.clicked} to="/workouts">Enter</Link>
    // console.log(props)
    return (
        <div className="SignIn">
            <h1>Sign In</h1>
            <p>What is your name?</p>
            <input className="signInput" onChange={props.changed} />
            <br />
            {button}
        </div>
    )

} 

export default signIn 