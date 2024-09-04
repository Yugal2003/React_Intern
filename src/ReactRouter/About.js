import React from 'react'
import about from '../img/about.jpeg'

const About = () => {
  return (
    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",minHeight:"80vh"}}>
        <img src={about} alt=''/>
        <h1>About Page</h1>
    </div>
  )
}

export default About