import React from 'react'

const Education = ({subject,updateHour,hour,index,deleteItem}) => {

    // const [hourValue,setHourValue] = useState(hour)
  return (
    <div style={{display:"inline-block",width:"80vw",marginInline:"8rem"}}>
        <div style={{display:"flex",flexDirection:"column",marginTop:"1rem",border:"2px solid black",width:"25vw",textAlign:"center",padding:"2rem"}}>
            <h3>Subject Name : {subject}</h3>
            <h3>Subject Hour : {hour}</h3>

            <div style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",gap:"1rem",textAlign:"center",width:"20vw"}}>
                <button onClick={()=>updateHour(index,parseInt(hour-1))}>Decrease</button>
                <button onClick={()=>updateHour(index,parseInt(hour+1))}>Increase</button>
                <button onClick={()=>deleteItem(index)}>Delete</button>
            </div>
        </div>
    </div>
  )
}

export default Education