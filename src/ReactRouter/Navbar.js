import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{borderBottom:"1px solid black",paddingBlock:"1rem",textAlign:"center",alignItems:"center",display:"flex",flexDirection:"row",width:"100vw",marginTop:"1rem"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",width:"80vw",marginInline:"auto"}}>
            <NavLink className="list_li" to={'/'}><h1>Practice</h1></NavLink>
            <ul style={{display:"flex",gap:"2rem"}}>
                <NavLink className="list_li" to={'/'}><li style={{listStyleType:"none",fontSize:"22px",cursor:"pointer"}}>Home</li></NavLink>
                <NavLink className="list_li" to={'/men'}><li style={{listStyleType:"none",fontSize:"22px",cursor:"pointer"}}>Men</li></NavLink>
                <NavLink className="list_li" to={'/women'}><li style={{listStyleType:"none",fontSize:"22px",cursor:"pointer"}}>Women</li></NavLink>
                <NavLink className="list_li" to={'/about'}><li style={{listStyleType:"none",fontSize:"22px",cursor:"pointer"}}>About</li></NavLink>
                <NavLink className="list_li" to={'/contact'}><li style={{listStyleType:"none",fontSize:"22px",cursor:"pointer"}}>Contact</li></NavLink>
            </ul>
        </div>
    </div>
  )
}

export default Navbar