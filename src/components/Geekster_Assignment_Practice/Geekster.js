// DAY 5 HOMEWORK START

import React, { useState } from 'react'
import Education from './Education'
import toast from 'react-hot-toast';

const Geekster = () => {
    const [subject,setSubject] = useState("");
    const [hour,setHour] = useState("");
    const [array,setArray] = useState([]);

    const addItem = () =>{
        if(subject && hour){
            let newData = {subject,hour};

            setArray((array) => [...array,newData])
            setSubject("");
            setHour("");
        }
        else{
            toast.error("All Field are Required !")
        }
    }

    const updateHour = (id,newHour) =>{
        setArray((array) =>array.map((ele,index) =>
            index === id ? {...ele,hour:newHour} : ele
        ))
    }

    const clickDelete = (id) =>{
        setArray((array) => array.filter((ele,index) => index !== id));
    }

    const clickAllDelete = () =>{
        setArray([])
    }

    return (
    <div>
        <div>
            <h1>Education Planner</h1>
                <label>Subject :</label>
                <input required type='text' value={subject} onChange={(e) =>setSubject(e.target.value)}/>
                <label>Hour :</label>
                <input required type='number' value={hour} onChange={(e) =>setHour(parseInt(e.target.value))}/>
                <button onClick={addItem}>Add</button>
                {
                    array.length >=1 &&
                    <button onClick={clickAllDelete}>Remove All Data</button>
                }
        </div>
        {
            array.length >= 1 &&
            array.map((ele,index) =>{
                return(
                    <Education updateHour={updateHour} key={index} subject={ele.subject} hour={ele.hour} index={index} deleteItem={clickDelete}/>
                )
            })
        }
    </div>
  )
}

export default Geekster

// DAY 5 HOMEWORK START


//WEEKLY TEST 1 START

// import React, { useState } from 'react'
// import toast from 'react-hot-toast';

// const Geekster = () => {
//     const [inputValue,setInputValue] = useState(8);
//     const [upperCase,setUpperCase] = useState(true);
//     const [lowerCase,setLowerCase] = useState(true);
//     const [numbers,setNumbers] = useState(true);
//     const [symbols,setSymbols] = useState(true);
//     const [copyPassword,setCopyPassword] = useState("")

//     const clickGenerateBtn = () =>{
//         let set = "";

//         if(upperCase){
//             set += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
//         }
//         if(lowerCase){
//             set += 'abcdefghijklmnopqrstuvwxyz'
//         }
//         if(numbers){
//             set += '0123456789'
//         }
//         if(symbols){
//             set += '!@#$%^&*()-_+='
//         }
//         // console.log(inputValue);
        
//         if(inputValue >= 8){
//             let newPassword = "";
//             for(let i=1;i<=inputValue;i++){
//                 const calculate = Math.floor(Math.random() * set.length)
//                 newPassword += set[calculate]
//             }
//             // console.log(newPassword);
//             setCopyPassword(newPassword)
//         }
//         else{
//             toast.error('Enter an Number Greater than 8 !')
//         }
//     }

//     const copyPass = () =>{
//         navigator.clipboard.writeText(copyPassword);
//         toast.success("Password Copy Success !")
//     }
//   return (
//     <div>
//         <div>
//             <h1>Password Generator</h1>
//             <div>
//                 <input type='text' value={copyPassword}/>
//                 <button onClick={copyPass}>Copy Password</button>
//             </div>

//             <div style={{display:"flex",marginBlock:"1rem"}}>
//                 <h3>Select Password length(8 to 50)</h3>
//                 <input type='number' value={inputValue} onChange={(e)=>setInputValue(e.target.value)} min={8} max={50}/>
//             </div>

//             <div>
//                 <input type='checkbox' checked={upperCase} onChange={()=>setUpperCase(!upperCase)}/>
//                 <label>Include UpperCase</label><br/>
//                 <input type='checkbox' checked={lowerCase} onChange={()=>setLowerCase(!lowerCase)}/>
//                 <label>Include LowerCase</label><br/>
//                 <input type='checkbox' checked={numbers} onChange={()=>setNumbers(!numbers)}/>
//                 <label>Include Numbers</label><br/>
//                 <input type='checkbox' checked={symbols} onChange={()=>setSymbols(!symbols)}/>
//                 <label>Include Symbols</label><br/>

//                 <button onClick={clickGenerateBtn}>Generate Password</button>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Geekster


//WEEKLY TEST 1 END