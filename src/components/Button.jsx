import React from 'react'


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