// import React, { useState } from 'react'

// const Div1Show = () => {
//   let isVisible = false;
//   const [inputValue1,setInputValue1] = useState("hello");
//   const [inputValue2,setInputValue2] = useState("hello");

//   const handleChange1 = (e) =>{
//     setInputValue1(e.target.value);
//   }


//   const handleChange2 = (e) =>{
//     setInputValue2(e.target.value);
//   }

//   if(inputValue1 === inputValue2){
//     isVisible = true;
//   }
//   else{
//     isVisible = false;
//   }

//   return (
//     <div>
//       <div style={{height:"200px",width:"200px",border:"1px solid black",display : isVisible ? "block" : "none"}}>
//           <h2>Div 1</h2>
//       </div>

//       <div>
//         <label>Enter Text :</label>
//         <input style={{textAlign:"center"}} type='text' value={inputValue1} onChange={handleChange1}/>
//         <label>Enter Text :</label>
//         <input style={{textAlign:"center"}} type='text' value={inputValue2} onChange={handleChange2}/>
//       </div>
//     </div>
//   )
// }

// export default Div1Show;




// import React, { useState } from 'react'

// const Div1Show = () => {

//   const [count,setCount] = useState(0);
//   const [color,setColor] = useState("white");

//   const handleIncrement = () =>{
//     setCount((prev) => prev  + 1);
//     setColor("green");
//   }

//   const handleDecrement = () =>{
//     setCount((prev) => prev  - 1);
//     setColor("red");
//   }

//   const handleZero = () =>{
//     setCount
//   }

//   return (
//     <div style={{backgroundColor : color,width:"200px",height:"200px",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
//       <button style={{padding:"5px"}} onClick={handleDecrement}>-</button>
//       <button style={{padding:"5px"}} onClick={handleZero}>-</button>
//        Count : {count}
//       <button style={{padding:"5px"}} onClick={handleIncrement}>+</button>
//     </div>
//   )
// }

// export default Div1Show