import React from 'react'
import './Modal.css'
import Backdrop from '../Backdrop/Backdrop'

const modal = (props) => (
    <div>
        <Backdrop showModal={props.showModal} clicked={props.clicked} />
        <div className="Modal" style={{
            transform: props.showModal ? 'translateY(0)' : 'translateY(-100vh)', opacity: props.showModal ? '1' : '0'
        }}>
            <p>{props.message}</p>
        </div>
    </div>
    
    
)

export default modal