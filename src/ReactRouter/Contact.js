import React from 'react'
import contact from '../img/contact.jpeg'

const Contact = () => {
  return (
    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",minHeight:"80vh"}}>
        <img src={contact} alt=''/>
        <h1>Contact Page</h1>
    </div>
  )
}

export default Contact