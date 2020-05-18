import React from 'react'
import './Button.css'

const button = (props) => {
    let btn = <button onClick={props.clicked} className={props.className} disabled>{props.children}</button>
    if(props.max > 0) {
        btn = <button onClick={props.clicked} className={props.className}>{props.children}</button>
    }

    

    return btn        
}

export default button