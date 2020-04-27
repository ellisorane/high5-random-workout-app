import React from 'react'
import './Backdrop.css'

const backdrop = (props) => (
    props.showModal ? <div className="Backdrop" onClick={props.clicked}></div> : null
)

export default backdrop