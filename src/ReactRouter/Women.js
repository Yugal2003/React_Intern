import React from 'react'
import women from '../img/women.jpeg'

const Women = () => {
  return (
    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",minHeight:"80vh"}}>
        <img src={women} alt=''/>
        <h1>Women Page</h1>
    </div>
  )
}

export default Women