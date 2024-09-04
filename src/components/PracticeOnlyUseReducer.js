//Both code are same just state.value and state changes

// import React, { useReducer } from 'react'

// const reducer = (state,action) =>{
//     switch(action.type){
//         case "add" :
//         return state + 1;
//         case "substract" :
//         return state - 1;
//         default : return state;
//     }
// }
// let initialState = 0;

// const PracticeOnlyUseReducer = () => {

//     const [state,dispatch] = useReducer(reducer,initialState);

//   return (
//     <div>
//         <div>
//             <h1>Counter Using UseReducer</h1>
//             <div style={{display:"flex"}}>
//                 <button onClick={() => dispatch({type : "substract"})}>Minus</button>
//                 <h2>{state}</h2>
//                 <button onClick={() => dispatch({type : "add"})}>Plus</button>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default PracticeOnlyUseReducer




// import React, { useReducer } from 'react'

// let initialValue = {
//     value : 0
// };

// const reducer = (state,action) =>{
//     switch (action.type){                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
//         case "add" :
//         return {...state,value : state.value + 1};
//         case "substract" :
//         return {...state,value : state.value - 1};
//         default : return state;
//     }
// }
// const PracticeOnlyUseReducer = () => {

//     const [state,dispatch] = useReducer(reducer,initialValue);
//   return (
//     <div>
//         <div>
//             <button onClick={()=> dispatch({type : "substract"})}>Minus</button>
//             {state.value}
//             <button onClick={()=> dispatch({type : "add"})}>Plus</button>
//         </div> 
//     </div>
//   )
// }

// export default PracticeOnlyUseReducer































// import React, { useReducer } from 'react';

// const reducer = (state,action) =>{
//     switch(action.type){
//         case "Add":
//             return {...state,value:state.value + 1};
//         case "Substract":
//             return {...state,value:state.value - 1};
//         case "Multiply":
//             return {...state,value:state.value * 2};
//         case "Division":
//             return {...state,value:state.value / 2};
//         case "Module":
//             return {...state,value:state.value % 2};
//         default :
//             return state;
//     }
// }
// let initialValue = {
//     value : 0
// }

// const PracticeOnlyUseReducer = () => {

//     const [state,dispatch] = useReducer(reducer,initialValue);

//   return (
//     <div>
//         <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"100vw",minHeight:"30vh"}}>
//             <h1>{state.value}</h1>
//             <div style={{display:"flex",flexDirection:"row",gap:"1rem",marginTop:"1rem"}}>
//                 <button onClick={()=> dispatch({type : "Add"})}>Add</button>
//                 <button onClick={()=> dispatch({type : "Substract"})}>Substract</button>
//                 <button onClick={()=> dispatch({type : "Multiply"})}>Multiply</button>
//                 <button onClick={()=> dispatch({type : "Division"})}>Division</button>
//                 <button onClick={()=> dispatch({type : "Module"})}>Module</button>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default PracticeOnlyUseReducer
