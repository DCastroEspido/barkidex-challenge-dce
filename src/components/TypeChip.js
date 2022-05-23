import React from 'react'
import './TypeChip.css'
export default function TypeChip(props) {
    console.log(props)
    return (
        <div className={`chip ${props.type}`}>{props.type}</div>
  )
}
