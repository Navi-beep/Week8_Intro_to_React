import React from 'react'

export default function Button(props) {

    return(
        <button className={`btn btn-${props.color ? props.color : 'dark'} w-75`} onClick={() => props.handleClick(props.step)}>+{props.step}</button>
    )
}