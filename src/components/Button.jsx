import React from 'react'
import axios from "axios"

const Button = ({ setProperty, setKey, buttonStyle, buttonText, buttonKey, buildRequestUrl, setListItems, getData}) => {


  const handleSubmit = (key, property) => {
    setKey(key)
    setProperty(property)
  }


  return (
    <button type="button" onClick={() => handleSubmit(buttonKey, buttonText)} className={buttonStyle}>{buttonText}</button>
  )
}

export default Button