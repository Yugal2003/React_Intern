// NEXT AND PREVIOUS IMAGE START

// {import React, { useState } from 'react';
// import img1 from '../img/pc_2.jpeg';
// import img2 from '../img/pc.png';

// const Practice = () => {
//   const images = [img1, img2];
  
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//   };

//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', minHeight: '50vh', justifyContent: 'center', alignItems: 'center' }}>
//       <div>
//         <img width={150} src={images[currentIndex]} alt='carousel' />
//       </div>
//       <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem' }}>
//         <button style={{ padding: '0.5rem 1rem', fontSize: '1rem' }} onClick={handlePrev}>Prev</button>
//         <button style={{ padding: '0.5rem 1rem', fontSize: '1rem' }} onClick={handleNext}>Next</button>
//       </div>
//     </div>
//   );
// }

// export default Practice;}


// NEXT AND PREVIOUS IMAGE END



// TOGGLE IMAGE START


// {import React, { useState } from 'react'
// import img1 from '../img/pc.png'
// import img2 from '../img/pc_2.jpeg'

// const Practice = () => {

//     const [toggle,setToggle] = useState(false);

//   return (
//     <div style={{display:"flex",flexDirection:"column",minHeight:"50vh",justifyContent:"center",alignItems:"center"}}>
//         <div>
//             {toggle
//              ? <img width={150} src={img1} alt=''/>
//              : <img width={150} src={img2} alt=''/> }
//         </div>
//         <div style={{display :"flex",gap:"2rem",marginTop:"2rem"}}>
//             {/* <button style={{padding:"0.5rem 1rem",fontSize:"1rem"}} onClick={()=>setToggle(!toggle)}>Prev</button> */}
//             <button style={{padding:"0.5rem 1rem",fontSize:"1rem"}} onClick={()=>setToggle(!toggle)}>TOGGLE</button>
//         </div>
//     </div>
//   )
// }

// export default Practice}

// TOGGLE IMAGE END




//COUNTER START

// {import React, { useState } from 'react'

// const Practice = () => {

//     const [count,setCount] = useState(0);

//   return (
//     <div>
//         <div>
//             <h1>Counter App</h1>
//             <div style={{display:"flex",gap:"1rem"}}>
//                 <button onClick={()=>setCount(count - 1)}>Minus</button>
//                 <h2>{count}</h2>
//                 <button onClick={()=>setCount(count + 1)}>Plus</button>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Practice}

// COUNTER END





// FORM HANDLING START

// import React, { useState } from 'react'

// const Practice = () => {

//   const [inputValue,setInputValue] = useState("");
//   const [ageValue,setageValue] = useState(1);
//   const [data,setData] = useState([]);


//   const formSubmit = (e) =>{
//     e.preventDefault();
//     if(inputValue === "" || ageValue === ""){
//       alert("Please submit values")
//     }
//     else{
//       let userData = {inputValue,ageValue};
//       setData((data) => [...data,userData]);
//       setInputValue("")
//       setageValue("");
//     }
//   }
//   return (
//     <div>
//       <div>
//           <form>
//               <label>Name : </label>
//               <input type='text' value={inputValue} onChange={(e) =>setInputValue(e.target.value)} required/>
//               <label>Age : </label>
//               <input type='number' value={ageValue} min={"1"} max={"100"} onChange={(e)=>setageValue(e.target.value)} required/>
//               <button onClick={formSubmit}>Submit</button>
//           </form>

//           {
//             data.length > 0 &&
//             data.map((ele,index) => {
//               return(
//                 <div>
//                     <h2>No : {index + 1}</h2>
//                     <h2>Name : {ele.inputValue}</h2>
//                     <h2>Age : {ele.ageValue}</h2>
//                 </div>
//               )
//             })
//           }
//       </div>
//     </div>
//   )
// }

// export default Practice

// FORM HANDLING END



// ADD AND REMOVE ITEM FROM LIST START

// import React, { useState } from 'react'
// import toast from 'react-hot-toast';

// const Practice = () => {

//   const [inputValue,setInputValue] = useState("");
//   const [data,setData] = useState([]);

//   const clickSubmit = (e) =>{
//     e.preventDefault();
//     if(inputValue === ""){
//       toast.error("Please Fill Input Data...");
//     }
//     else{
//       const newInputValue = inputValue;
//       setData((data) => [...data,newInputValue])
//       toast.success("Add Data Sucessfully !")
//     }
//     setInputValue("");
//   }

//   const clickToDeleteData = (id) =>{
//     setData((data) => data.filter((ele,index) => index !== id))
//     toast.error("Delete Data Sucessfully !")
//   }
//   return (
//     <div>
//       <div>
//           <input type='text' value={inputValue} onChange={(e) =>setInputValue(e.target.value)}/>
//           <button onClick={clickSubmit}>Add Item</button>
//       </div>
//       {
//         data.length > 0 &&
//         data.map((ele,index) => {
//           return(
//             <div key={index} style={{display:"flex",gap:"0.5rem",paddingTop:"0.5rem"}}>
//                 <h2>{index + 1}</h2>
//                 <h2>{ele}</h2>
//                 <button onClick={()=>clickToDeleteData(index)} style={{cursor:"pointer"}}>Remove</button>
//             </div>
//           )
//         })
//       }
//     </div>
//   )
// }

// export default Practice

// ADD AND REMOVE ITEM FROM LIST END



