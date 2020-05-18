import React from 'react'
import { NavLink } from 'react-router-dom'

import './Nav.css'

const nav = () => (
    <nav className="Nav">
        <ul>
            <li><NavLink to="/">Sign In</NavLink></li>
            <li><NavLink to="/workouts">Workout</NavLink></li>
            <li><NavLink to="/scores">High Scores</NavLink></li>
        </ul>
    </nav>
)

export default nav