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

import React, { useState } from 'react'
import toast from 'react-hot-toast';

const Geekster = () => {

    const [inputValue,setInputValue] = useState("");
    const [cost,setCost] = useState("");
    const [array,setArray] = useState([]);
    const [remaining,setRemaining] = useState(2000);
    const [spant,setSpant] = useState(0);

    const addItems = () =>{
        if(inputValue && cost){
            let newItem = {newname : inputValue,newcost : cost}
            setArray((array) => [...array,newItem])
            console.log(array);
            setRemaining((remaining) => remaining - cost)
            setSpant((spant) => spant + cost)
            setInputValue("");
            setCost("");
        }
        else{
            toast.error("Please Fill All Input Field !")
        }
    }

    const clickSingleData = (id) =>{
        const itemToDelete = array[id];

        // Update remaining and spant when deleting an item
        setRemaining((remaining) => remaining + itemToDelete.newcost);
        setSpant((spant) => spant - itemToDelete.newcost);
        setArray((array) =>array.filter((ele,index)=>index !== id));
    }
  return (
    <div>
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",minHeight:"30vh"}}>
            <h1>My Budget Planner</h1>
            <div style={{display:"flex",flexDirection:"row",gap:"1rem",marginTop:"1rem",width:"90vh",marginInline:"auto"}}>
                <h2>Budget RS.2000</h2>
                <h2>Remaining RS.{remaining}</h2>
                <h2>Spant RS.{spant}</h2>
            </div>

            <div style={{marginTop:"3rem",width:"30vw"}}>
                <h2 style={{textAlign:"center"}}>Expences</h2>
                {
                    array.length >=1 &&
                    array.map((ele,index) =>{
                        return(
                            <div key={index} style={{marginTop:"1rem",display:"flex",justifyContent:"space-between"}}>
                                <h2>{ele.newname}</h2>
                                <h2>{ele.newcost}</h2>
                                <button onClick={()=>clickSingleData(index)}>&#x274C;</button>
                            </div>
                        )
                    })
                }
            </div>
            

            <h2 style={{marginTop:"1rem"}}>Add Expenses</h2>
            <div style={{display:"flex",marginTop:"1rem",flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                <div style={{display:"flex",marginTop:"1rem",flexDirection:"row",gap:"1rem"}}>
                    <div style={{display:"flex",flexDirection:"column"}}>
                        <label>Name :</label>
                        <input type='text' value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
                    </div>
                    <div style={{display:"flex",flexDirection:"column"}}>
                        <label>Cost :</label>
                        <input type='number' value={cost} onChange={(e)=>setCost(parseInt(e.target.value))} />
                    </div>
                </div>
            </div>
            <button onClick={addItems} style={{marginTop:"1rem"}}>Save</button>
        </div>
    </div>
  )
}

export default Geekster

// Day 14 Home Work end