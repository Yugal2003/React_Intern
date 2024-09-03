// import React, { useEffect, useState } from 'react'
// import img from '../img/Slow-load-times-eCommerce.png'

// const PracticeOnlyUseEffect = () => {

//     const [data,setData] = useState([]);

//     const fetchApi = async() =>{
//         try {
//             let fetchData = await fetch('https://fakestoreapi.com/products');
//             let jsonData = await fetchData.json();
//             console.log(jsonData);
//             setData(jsonData)
//         } 
//         catch (error) {
//             console.log(Error);
//         }
//     }
//     useEffect(() =>{
//         fetchApi()
//     },[])
//   return (
//     <>
//         {
//             data.length > 0 ?
//             <div style={{width:"100vw",justifyContent:"center",alignItems:"center",paddingLeft:"4rem"}}>
//                 <h1 style={{textAlign:"center"}}>Fetch Product Data </h1>
//                 {
//                     data.length > 0 &&
//                     data.map((ele,index) =>{
//                         return(
//                             <div key={index} style={{justifyContent:"center",alignItems:"center",textAlign:"center",padding:"1rem",margin:"0.5rem",display:"inline-block",flexDirection:"row",width:"30%",border:"1px solid grey",borderRadius:"10px"}}>                            
//                                 <div style={{display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center"}}>
//                                     <h3>{ele.id}. &nbsp;</h3>
//                                     <h3>{ele.category}</h3>                     
//                                 </div>
//                                 <img height={100} width={80} src={ele.image} alt='' style={{paddingTop:"1rem"}}/>
//                             </div>
//                         )
//                     })
//                 }
//             </div>
//             : <img style={{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",minHeight:"100vh"}} src={img} alt=''/>
//         }
//     </>
//   )
// }

// export default PracticeOnlyUseEffect