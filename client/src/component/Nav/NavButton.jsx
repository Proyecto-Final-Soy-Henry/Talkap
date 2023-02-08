import React from 'react'

import style from "./NavButton.module.css";


export default function NavButton(props) {
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
