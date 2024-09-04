import React from 'react'
import men from '../img/men.jpeg';

const Mens = () => {
  return (
    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",minHeight:"80vh"}}>
        <img src={men} alt=''/>
        <h1>Mens Page</h1>
    </div>
  )
}

export default Mens