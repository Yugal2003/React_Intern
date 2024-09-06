// Day 6  START



// Day 6 END




// Day 7 - ClassWork start

// import React, { useState } from 'react'
// import Education from './Education'
// import toast from 'react-hot-toast';

// const Geekster = () => {

//   const [inputValue,setInputValue] = useState("");
//   const [array,setArray] = useState([]);

//   const  clickBtn = () =>{
//     if(inputValue !== ""){
//       setArray((array) => [...array,inputValue]);
//       setInputValue("");
//     }
//     else{
//       toast.error("Please Fill an Input !")
//     }
//   }

//   const clickDelete = (id) =>{
//     setArray((array) =>array.filter((ele,index) => index !== id));
//   }

//   const deleteItemAll = () =>{
//     setArray([])
//   }

//   return (
//     <div>
//       <div>
//         <h1>Grocery Bud</h1>
//         <div>
//           <input type='text' value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
//           <button onClick={clickBtn}>Add Item</button>
//           {
//             array.length >= 1 && <button onClick={deleteItemAll}>Remove All</button>
//           }
//         </div>
//       </div>
//         {
//           array.length >= 1 &&
//           array.map((ele,index) =>{
//             return(
//               <Education ele={ele} index={index} key={index} deleteItem={clickDelete}/>
//             )
//           })
//         }
//     </div>
//   )
// }

// export default Geekster

// Day 7 - ClassWork end




// DAY 5 HOMEWORK START

// import React, { useState } from 'react'
// import Education from './Education'
// import toast from 'react-hot-toast';

// const Geekster = () => {
//     const [subject,setSubject] = useState("");
//     const [hour,setHour] = useState("");
//     const [array,setArray] = useState([]);

//     const addItem = () =>{
//         if(subject && hour){
//             let newData = {subject,hour};

//             setArray((array) => [...array,newData])
//             setSubject("");
//             setHour("");
//         }
//         else{
//             toast.error("All Field are Required !")
//         }
//     }

//     const updateHour = (id,newHour) =>{
//         setArray((array) =>array.map((ele,index) =>
//             index === id ? {...ele,hour:newHour} : ele
//         ))
//     }

//     const clickDelete = (id) =>{
//         setArray((array) => array.filter((ele,index) => index !== id));
//     }

//     const clickAllDelete = () =>{
//         setArray([])
//     }

//     return (
//     <div>
//         <div>
//             <h1>Education Planner</h1>
//                 <label>Subject :</label>
//                 <input required type='text' value={subject} onChange={(e) =>setSubject(e.target.value)}/>
//                 <label>Hour :</label>
//                 <input required type='number' value={hour} onChange={(e) =>setHour(parseInt(e.target.value))}/>
//                 <button onClick={addItem}>Add</button>
//                 {
//                     array.length >=1 &&
//                     <button onClick={clickAllDelete}>Remove All Data</button>
//                 }
//         </div>
//         {
//             array.length >= 1 &&
//             array.map((ele,index) =>{
//                 return(
//                     <Education updateHour={updateHour} key={index} subject={ele.subject} hour={ele.hour} index={index} deleteItem={clickDelete}/>
//                 )
//             })
//         }
//     </div>
//   )
// }

// export default Geekster

// DAY 5 HOMEWORK END


// DAY 5 CLASSWORK START

// import React, { useState } from 'react'
// import toast from 'react-hot-toast';

// const Geekster = () => {
//     const data = [
//         "1)Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut. Carrot cake caramels pie sweet apple pie tiramisu carrot cake. Marzipan marshmallow croissant tootsie roll lollipop. Cupcake lemon drops bear claw gummies. Jelly bear claw gummi bears lollipop cotton candy gummi bears chocolate bar cake cookie. Cupcake muffin danish muffin cookie gummies. Jelly beans tiramisu pudding. Toffee soufflé chocolate cake pastry brownie. Oat cake halvah sweet roll cotton candy croissant lollipop. Macaroon tiramisu chocolate bar candy candy carrot cake jelly sweet. Gummies croissant macaroon dessert. Chocolate cake dragée pie.",

//         "2)Next level tbh everyday carry, blog copper mug forage kitsch roof party pickled hammock kale chips tofu. Etsy shoreditch 8-bit microdosing, XOXO viral butcher banh mi humblebrag listicle woke bicycle rights brunch before they sold out ramps. Twee shabby chic taiyaki flannel, enamel pin venmo vape four loko. Hexagon kale chips typewriter kitsch 8-bit organic plaid small batch keffiyeh ethical banh mi narwhal echo park cronut.",

//          "3)Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.",

//         "4)Cat gets stuck in tree firefighters try to get cat down firefighters get stuck in tree cat eats firefighters' slippers kitty power ignore the squirrels, you'll never catch them anyway for what a cat-ass-trophy! or purr as loud as possible, be the most annoying cat that you can, and, knock everything off the table. Pretend you want to go out but then don't bite off human's toes, yet disappear for four days and return home with an expensive injury; bite the vet so catch eat throw up catch eat throw up bad birds.",

//         "5)This opera's as lousy as it is brilliant! Your lyrics lack subtlety. You can't just have your characters announce how they feel. That makes me feel angry! Anyhoo, your net-suits will allow you to experience Fry's worm infested bowels as if you were actually wriggling through them. I just told you! You've killed me! Fry! Quit doing the right thing, you jerk! Michelle, I don't regret this, but I both rue and lament it. Morbo can't understand his teleprompter because he forgot how you say that letter that's shaped like a man wearing a hat.",

//         "6)Airedale hard cheese mozzarella. Pecorino melted cheese port-salut emmental babybel cheese and wine melted cheese manchego. Everyone loves blue castello everyone loves fromage cheese slices airedale cheddar cream cheese. Bavarian bergkase who moved my cheese halloumi port-salut gouda jarlsberg ricotta rubber cheese. Stinking bishop smelly cheese brie.",
        
//         "7)Salvia glossier subway tile, leggings mustache YOLO semiotics chia. Pitchfork tbh af blog church-key meggings vaporware PBR&B master cleanse post-ironic man bun pabst mustache letterpress synth. Snackwave raw denim godard, 3 wolf moon shaman offal kitsch unicorn live-edge selvage schlitz fashion axe vaporware drinking vinegar prism. Shabby chic tacos artisan, chambray chicharrones cardigan leggings typewriter af pop-up williamsburg meditation PBR&B viral. You probably haven't heard of them DIY jean shorts subway tile fashion axe bushwick kitsch tumeric cloud bread vaporware freegan franzen pork belly chicharrones banh mi.",

//         "8)Man braid celiac synth freegan readymade, pitchfork fam salvia waistcoat lomo bitters gentrify four loko. Pitchfork semiotics post-ironic vegan. Tofu meditation microdosing hashtag semiotics venmo. Flexitarian vape tilde taiyaki. Prism poutine farm-to-table, messenger bag vegan taxidermy tattooed sartorial squid jean shorts fixie selvage trust fund vape."
// ]
//     const [inputValue,setInputValue] = useState("");
//     const [paraLength,setParaLength] = useState([]);

//     const generatePara = () =>{
//         if(inputValue){
//             if(inputValue >= 8){
//                 toast.success(" Ayyo ! you are demanding very much paragraph in one go, kindly take little litlle 😀");
//                 setParaLength(data)
//             }
//             else if(inputValue < 8 && inputValue >=1 ){
//                 let newPara = data.slice(0,inputValue);
//                 setParaLength(newPara)
//             }
//             else{
//                 toast.error(" Ayyo ! you know that you wrote negative input 😵")
//             }
//         }
//         else{
//             toast.error("Please Type an Number !")
//         }
//     }
//   return (
//     <div>
//         <div style={{display:"flex",flexDirection:"column",gap:"1rem",justifyContent:"center",alignItems:"center",width:"100vw",minHeight:"50vh"}}>
//             <h2>TIRED OF BORING LOREM IPSUM?</h2>
            
//             <div style={{display:"flex"}}>
//                 <h3>Paragraphs:</h3> <input type='number' value={inputValue} onChange={(e) =>setInputValue(parseInt(e.target.value))}/>

//                 <button onClick={generatePara}>GENERATE</button>
//             </div>
//         </div>
//         {
//             paraLength.length >= 1 &&
//             paraLength.map((ele,index) =>{
//                 return(
//                     <p>{ele}</p>
//                 )
//             })
//         }
//     </div>
//   )
// }

// export default Geekster

// DAY 5 CLASSWORK END

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




// Day 14 Home Work start

// import React, { useState } from 'react'
// import toast from 'react-hot-toast';

// const Geekster = () => {

//     const [inputValue,setInputValue] = useState("");
//     const [cost,setCost] = useState("");
//     const [array,setArray] = useState([]);
//     const [remaining,setRemaining] = useState(2000);
//     const [spant,setSpant] = useState(0);

//     const addItems = () =>{
//         if(inputValue && cost){
//             let newItem = {newname : inputValue,newcost : cost}
//             setArray((array) => [...array,newItem])
//             console.log(array);
//             setRemaining((remaining) => remaining - cost)
//             setSpant((spant) => spant + cost)
//             setInputValue("");
//             setCost("");
//         }
//         else{
//             toast.error("Please Fill All Input Field !")
//         }
//     }

//     const clickSingleData = (id) =>{
//         const itemToDelete = array[id];

//         // Update remaining and spant when deleting an item
//         setRemaining((remaining) => remaining + itemToDelete.newcost);
//         setSpant((spant) => spant - itemToDelete.newcost);
//         setArray((array) =>array.filter((ele,index)=>index !== id));
//     }
//   return (
//     <div>
//         <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",minHeight:"30vh"}}>
//             <h1>My Budget Planner</h1>
//             <div style={{display:"flex",flexDirection:"row",gap:"3rem",justifyContent:"center",alignItems:"center",marginTop:"1rem",width:"90vh",marginInline:"auto"}}>
//                 <h2>Budget RS.2000</h2>
//                 <h2>Remaining RS.{remaining}</h2>
//                 <h2>Spant RS.{spant}</h2>
//             </div>

//             <div style={{marginTop:"3rem",width:"30vw"}}>
//                 <h2 style={{textAlign:"center"}}>Expences</h2>
//                 {
//                     array.length >=1 &&
//                     array.map((ele,index) =>{
//                         return(
//                             <div key={index} style={{marginTop:"1rem",display:"flex",justifyContent:"space-between"}}>
//                                 <h2>{ele.newname}</h2>
//                                 <h2>{ele.newcost}</h2>
//                                 <button onClick={()=>clickSingleData(index)}>&#x274C;</button>
//                             </div>
//                         )
//                     })
//                 }
//             </div>
            

//             <h2 style={{marginTop:"1rem"}}>Add Expenses</h2>
//             <div style={{display:"flex",marginTop:"1rem",flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
//                 <div style={{display:"flex",marginTop:"1rem",flexDirection:"row",gap:"1rem"}}>
//                     <div style={{display:"flex",flexDirection:"column"}}>
//                         <label>Name :</label>
//                         <input type='text' value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
//                     </div>
//                     <div style={{display:"flex",flexDirection:"column"}}>
//                         <label>Cost :</label>
//                         <input type='number' value={cost} onChange={(e)=>setCost(parseInt(e.target.value))} />
//                     </div>
//                 </div>
//             </div>
//             <button onClick={addItems} style={{marginTop:"1rem"}}>Save</button>
//         </div>
//     </div>
//   )
// }

// export default Geekster

// Day 14 Home Work end




// practice for chatgpt code start


// 1.back-color changer start


//   back-color changer end
// import React, { useState } from 'react'

// const ChatGPT = () => {
    
//     const [color,setColor] = useState("white");

//     const colorList = ["blue","black","orange","sky","cyan","yellow","grey","pink","purple","brown"];

//     const changeBack = () =>{
//         let newColor = colorList[Math.ceil(Math.random() * colorList.length)];
//         setColor(newColor)
//     }

//   return (
//     <div>
//         <div style={{backgroundColor:color,border:"1px solid red",height:"30vh"}}>
//             <button onClick={changeBack}>Back-Changer</button>
//         </div>
//     </div>
//   )
// }

// export default ChatGPT

// practice for chatgpt code end




// react interview start 


// import React, { useState } from 'react';

// const ChatGPT = () => {
//   const [array, setArray] = useState([]);
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     dob: '',
//     password: ''
//   });

//   const handleChange = (e) => {
//     console.log(e);
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Check if all form fields are filled
//     if (formData.name && formData.email && formData.dob && formData.password) {
//       // Handle form submission, e.g., send data to server
//       console.log(formData);
//       setArray([...array, formData]);
//       console.log("setArray", array);
//       setFormData({ name: '', email: '', dob: '', password: '' });
//       setStep(1); // Reset to the first step
//     } 


//   };

//   const nextStep = () => {
//     setStep(step + 1);
//   };

//   const prevStep = () => {
//     setStep(step - 1);
//   };

//   const renderStep = () => {
//     switch (step) {
//       case 1:
//         return (
//           <div>
//             <label>Name:</label>
//             <input
//             required
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//             />
//             <button onClick={nextStep}>Next</button>
//           </div>
//         );
//       case 2:
//         return (
//           <div>
//             <label>Email:</label>
//             <input
//             required
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//             />
//             <button onClick={nextStep}>Next</button>
//             <button onClick={prevStep}>Back</button>
//           </div>
//         );
//       case 3:
//         return (
//           <div>
//             <label>Date of Birth:</label>
//             <input
//             required
//               type="date"
//               name="dob"
//               value={formData.dob}
//               onChange={handleChange}
//             />
//             <button onClick={nextStep}>Next</button>
//             <button onClick={prevStep}>Back</button>
//           </div>
//         );
//       case 4:
//         return (
//           <div>
//             <label>Password:</label>
//             <input
//             required
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//             />
//             <button onClick={handleSubmit}>Submit</button>
//             <button onClick={prevStep}>Back</button>
//           </div>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div>
//       <h2>Multi-Step Form</h2>
//       <form onSubmit={handleSubmit}>
//         {renderStep()}
//       </form>

//       {
//         array.length > 0 && (
//           <div>
//             {array.map((item, index) => (
//               <div key={index}>
//                 <p>Name: {item.name}</p>
//                 <p>Email: {item.email}</p>
//                 <p>DOB: {item.dob}</p>
//                 <p>Password: {item.password}</p>
//               </div>
//             ))}
//           </div>
//         ) 
//       }
//     </div>
//   );
// };

// export default ChatGPT;


// react interview end



// cat image carousol start

// import React, { useState } from 'react'

// const Geekster = () => {

//     const [image,setImage] = useState("");
//     const array = [
//         {
//             img : "https://imgs.search.brave.com/bAdI7a7qnuuOIJphttt3DfbzLnCU7ZDMtnkejXq6UII/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdDIu/ZGVwb3NpdHBob3Rv/cy5jb20vMTAwMDkz/OC81NDk5L2kvNDUw/L2RlcG9zaXRwaG90/b3NfNTQ5OTg2MTMt/c3RvY2stcGhvdG8t/Z2luZ2VyLWNhdC5q/cGc"
//         },
//         {
//             img : "https://imgs.search.brave.com/YzG9FgYN5qLWsiYyJ4dUEvxav9e98dBH0loR8YPRA1E/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTc0/ODc3NTY1L3Bob3Rv/L3BvcnRyYWl0LW9m/LWEtYnJvd24tY2F0/LWFnYWluc3QtYS1n/cmF5LWJhY2tncm91/bmQuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPWlGcFFNSzlF/aTIzVm9XcExLa2Zh/TFVtdXN5Y3VaWllV/OWtWMjNzT2F6YzQ9"
//         },
//         {
//             img : "https://imgs.search.brave.com/lZtf1S7JKFcaZs2lhxTpAtaJzTk_V35Xt8ys4htuVBU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/Y2F0LXBvc2VzLXBl/cmZlY3RseS5qcGc_/d2lkdGg9MTAwMCZm/b3JtYXQ9cGpwZyZl/eGlmPTAmaXB0Yz0w"
//         },
//         {
//             img : "https://imgs.search.brave.com/t6Nv0DwxoIACRxxtX2h7yt31ux5SCXHWgHVpoGh1diw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzM2Lzk5LzIy/LzM2MF9GXzIzNjk5/MjI4M19zTk94Q1ZR/ZUZMZDVwZHFhS0do/OERSR01aeTdQNFhL/bS5qcGc"
//         }
//     ];

//   return (
//     <div>
//         <div>
//             {
//                 array.map((ele,index) =>{
//                     return(
//                         <img src={ele.img} alt='' width={"100"} onClick={()=>setImage(ele.img)}/>
//                     )
//                 })
//             }<br/>
//             <img src={image} width={"100"} alt=''/>
//         </div>
//     </div>
//   )
// }

// export default Geekster


// cat image carousol end


//fruit project start

// import React, { useState } from 'react'

// const Geekster = () => {

//     const initialFruits = [
//         "Apple", "Apricot", "Avocado", "Banana", "Blackberry", "Blueberry", "Boysenberry", 
//         "Cherry", "Coconut", "Cranberry", "Date", "Dragonfruit", "Durian", "Elderberry", 
//         "Fig", "Gooseberry", "Grape", "Grapefruit", "Guava", "Honeydew", "Jackfruit", 
//         "Kiwi", "Lemon", "Lime", "Lychee", "Mango", "Mangosteen", "Mulberry", "Nectarine", 
//         "Orange", "Papaya", "Passionfruit", "Peach", "Pear", "Persimmon", "Pineapple", 
//         "Plum", "Pomegranate", "Pomelo", "Raspberry", "Redcurrant", "Starfruit", 
//         "Strawberry", "Tangerine", "Ugli fruit", "Watermelon", "Yellow Passion Fruit", 
//         "Zucchini (Technically a fruit)"
//       ];

//       const [fruits,setFruits] = useState(initialFruits);
//       const [array,setArray] = useState([])
//       const [inputValue,setInputValue] = useState("");

//       const filterOutData = fruits.filter((fruit) =>(
//         fruit.toLowerCase().includes(inputValue.toLowerCase())
//       ))

//       const handleClickOnFruit = (fruitName) =>{
//         if(!array.find((fruit) => fruit.name === fruitName)){
//             setArray([...array,
//                 {name : fruitName,linethrough : false}]
//             );
//             setInputValue("");
//         }
//       }

//       const changeCheckBox = (fruitName) =>{
//         const changeData = array.map((ele,index) =>(
//             ele.name === fruitName
//             ? {...ele,linethrough : !ele.linethrough}
//             : ele
//         ))
//         setArray(changeData);
//       }

//       const handleDleteItem = (fruitName) =>{
//         setArray((array) =>array.filter((ele,index) => ele.name !== fruitName))
//       }

//       const handleDleteItemAll = () =>{
//         setArray([])
//       }
//   return (
//     <div>
//         <div>
//             <label>Fruit Name : </label>
//             <input placeholder='Search Fruit Name...' type='text' value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
//             {
//                 inputValue &&
//                 <ul>
//                     {
//                         filterOutData.map((ele,index) => {
//                             return(
//                                 <li onClick={()=>handleClickOnFruit(ele)}>{ele}</li>
//                             )
//                         })
//                     }
//                 </ul>
//             }
//             {
//                 array.length >=1 &&
//                 array.map((ele,index) =>{
//                     return(
//                         <div style={{display:"flex",gap:"1rem"}}>
//                             <input type='checkbox' checked={ele.linethrough} onChange={()=>changeCheckBox(ele.name)}/>
//                             <p style={{textDecoration : ele.linethrough ? "line-through" : 'none'}}>{ele.name}</p>
//                             <button onClick={()=>handleDleteItem(ele.name)}>Delete</button>
//                         </div>
//                     )
//                 })
//             }
//             {
//                 array.length >=1 &&
//                 <button onClick={handleDleteItemAll}>Remove All</button>
//             }
//         </div>
//     </div>
//   )
// }

// export default Geekster

//fruit project end







// bg-color change box start

// import React, { useState } from 'react'

// const ChatGPT = () => {
//   const [inputValue, setInputValue] = useState("");
//   const [getValue, setGetValue] = useState(0);

//   const data = [
//     {
//       id: 1
//     },
//     {
//       id: 2
//     },
//     {
//       id: 3
//     },
//     {
//       id: 4
//     },
//     {
//       id: 5
//     },
//     {
//       id: 6
//     }
//   ];

//   const clickHandler = () => {
//     setGetValue(inputValue);
//   };

//   const clearHandler = () => {
//     setGetValue("white")
//   };

//   return (
//     <div>
//       <input
//         type='number'
//         max={"6"}
//         min={"1"}
//         value={inputValue}
//         onChange={(e) => setInputValue(parseInt(e.target.value))}
//       />
//       <button onClick={clickHandler}>Click</button>
//       <button onClick={clearHandler}>Clear</button>
//       {
//         data.map((item, index) => (
//           <div
//             style={{
//               border: "1px solid black",
//               width: "50px",
//               height: "50px",
//               backgroundColor: item.id === getValue ? "red" : "white"
//             }}
//             key={index}
//           >
//             {item.id}
//           </div>
//         ))
//       }
//     </div>
//   );
// };

// export default ChatGPT;

// bg-color change box end




// pagination in react start

// import React, {useState } from 'react'

// const Geekster = () => {

//     const array = [
//                 {
//                     id: 1,
//                     food: "Pizza",
//                     price: "10"
//                 },
//                 {
//                     id: 2,
//                     food: "Burger",
//                     price: "20"
//                 },
//                 {
//                     id: 3,
//                     food: "Fries",
//                     price: "30"
//                 },
//                 {
//                     id: 4,
//                     food: "Pasta",
//                     price: "40"
//                 },
//                 {
//                     id: 5,
//                     food: "Salad",
//                     price: "50"
//                 },
//                 {
//                     id: 6,
//                     food: "Tacos",
//                     price: "15"
//                 },
//                 {
//                     id: 7,
//                     food: "Sushi",
//                     price: "25"
//                 },
//                 {
//                     id: 8,
//                     food: "Sandwich",
//                     price: "12"
//                 },
//                 {
//                     id: 9,
//                     food: "Steak",
//                     price: "35"
//                 },
//                 {
//                     id: 10,
//                     food: "Chicken",
//                     price: "18"
//                 },
//                 {
//                     id: 11,
//                     food: "Ice Cream",
//                     price: "8"
//                 },
//                 {
//                     id: 12,
//                     food: "Cake",
//                     price: "22"
//                 },
//                 {
//                     id: 13,
//                     food: "Pancakes",
//                     price: "14"
//                 },
//                 {
//                     id: 14,
//                     food: "Spaghetti",
//                     price: "16"
//                 },
//                 {
//                     id: 15,
//                     food: "Fried",
//                     price: "13"
//                 },
//                 {
//                     id: 16,
//                     food: "Nachos",
//                     price: "17"
//                 },
//                 {
//                     id: 17,
//                     food: "Hot Dog",
//                     price: "11"
//                 },
//                 {
//                     id: 18,
//                     food: "Donut",
//                     price: "7"
//                 },
//                 {
//                     id: 19,
//                     food: "Bagel",
//                     price: "9"
//                 },
//                 {
//                     id: 20,
//                     food: "Smoothie",
//                     price: "6"
//                 },
//                 {
//                     id: 21,
//                     food: "Burrito",
//                     price: "19"
//                 },
//                 {
//                     id: 22,
//                     food: "Ramen",
//                     price: "23"
//                 },
//                 {
//                     id: 23,
//                     food: "Quesala",
//                     price: "21"
//                 },
//                 {
//                     id: 24,
//                     food: "Crepe",
//                     price: "20"
//                 },
//                 {
//                     id: 25,
//                     food: "Falafel",
//                     price: "15"
//                 }
//             ];

//     const [data,setData] = useState(array);


//     const [currentPage,setCurrentPage] = useState(1);

//     const itemPerPage = 6;
//     let lastIndex = itemPerPage * currentPage;
//     let firstIndex = lastIndex - itemPerPage;
//     let pagePerItem = data.slice(firstIndex,lastIndex);

//     let paginate = currentPage => setCurrentPage(currentPage);

//     let totalPage = Math.ceil(data.length / itemPerPage);

//     const pageButtons = [];
//   for (let i = 1; i <= totalPage; i++) {
//     pageButtons.push(
//       <button
//       style={{padding:"0.3rem"}}
//         key={i}
//         onClick={()=>paginate(i)}
//       >
//         {i}
//       </button>)}

//   return (
//     <div style={{width:"100vw",display:"flex",flexDirection:"column",justifyContent:"center"}}>
//         <div style={{display:"flex",justifyContent:"center"}}>
//             <button disabled={currentPage === 1} onClick={()=>paginate(currentPage - 1)}>Prev</button>
//             {pageButtons}
//             <button disabled={currentPage === totalPage} onClick={()=>paginate(currentPage + 1)}>Next</button>
//         </div>
//         <div style={{width:"80vw",display:"inline-block",flexDirection:"row",justifyContent:"center",alignItems:"center",marginInline:"auto"}}>
//             {
//                 pagePerItem.length >=1 &&
//                 pagePerItem.map((ele,index) =>{
//                     return(
//                         <div style={{width:"33%",height:"350px",display:"inline-block",flexDirection:"row",justifyContent:"center",marginInline:"auto",alignItems:"center",border:"1px solid red",padding:"8rem",textAlign:"center"}}>
//                             <h3>{ele.title}</h3>
//                             <img style={{marginTop:"2rem"}} height={80} width={60} src={ele.image} alt=''/>
//                             <div style={{display:"flex",flexDirection:"row",width:"100vw",gap:"1rem",marginTop:"2rem",textAlign:"center"}}>
//                                 <h3>Rating :{ele.food}</h3>
//                                 <h3>Price : {ele.price}</h3>
//                             </div>
//                         </div>
//                     )
//                 })
//             }
//         </div>
//     </div>
//   )
// }

// export default Geekster



// pagination in react end







// crud operation in react start

// import React, { useState } from 'react'
// import toast from 'react-hot-toast';

// const Geekster = () => {

//     const [inputValue,setInputValue] = useState("");
//     const [array,setArray] = useState([]);
//     const [editIndex,setEditIndex] = useState(null);

//     const handleSubmit = () =>{
//         if(editIndex !== null){
//             let newData = array.map((ele,index) =>(
//                 index === editIndex ? inputValue : ele
//             ))
//             setArray(newData)
//             setEditIndex(null)
//         }
//         else{
//             setArray([...array,inputValue]);
//         }
//         setInputValue("");
//     }

//     const editIndexText = (index) =>{
//         setInputValue(array[index]);
//         setEditIndex(index);
//     }
//     const clickDelete = (id) =>{
//         setArray((array) =>array.filter((ele,index) =>index !== id));
//     }
//     const handleRemoveAll = () =>{
//         setArray([]);
//     }
//   return (
//     <div>
//         <div>
//             <input type='text' value={inputValue} onChange={(e)=>setInputValue(e.target.value)} placeholder='Enter hear...'/>
//             <button onClick={handleSubmit}>{editIndex === null ? "Submit" : "Update"}</button>
//             {array.length >=1 && <button onClick={handleRemoveAll}>Remove All</button>}
//         </div>
//         {
//             array.length >= 1 &&
//             array.map((ele,index) =>{
//                 return(
//                     <div style={{display:"flex",gap:"1rem"}}>
//                         <p>{ele}</p>
//                         <button onClick={()=>editIndexText(index)}>Edit</button>
//                         <button onClick={()=>clickDelete(index)}>Delete</button>
//                     </div>
//                 )
//             })
//         }
//     </div>
//   )
// }

// export default Geekster

// crud operation in react end
