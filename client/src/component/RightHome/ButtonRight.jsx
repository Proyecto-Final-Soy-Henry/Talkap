import React from 'react'

import style from "./ButtonRight.module.css";


export default function ButtonRight(props) {
    return (
        <div onClick={props.handleClick}
            className={`${style.button} ${props.clicked ? "open"  : ""}`}
        >
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}