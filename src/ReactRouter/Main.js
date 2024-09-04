import React from 'react'
import home from '../img/home.jpeg'

const Main = () => {
  return (
    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",minHeight:"80vh"}}>
        <img src={home} alt=''/>
        <h1>Home Page</h1>
    </div>
  )
}

export default Main