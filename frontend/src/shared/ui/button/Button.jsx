import React from 'react'
import './Button.css'

export default function Button({children, className = "", onClick}) {
  return <button className={`button ${className}`} onClick={onClick}>{children}</button>
}
