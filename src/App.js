// redux start

// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import './App.css';
// import { decrement, increment } from './components/Redux/Actions';


// function App() {
//   const countValue = useSelector((state) => state.count)
//   const dispatch = useDispatch();
//   return (
//     <div>    
//         <div>
//             <h1>Counter App Redux</h1>
//             <div>
//               <button onClick={()=>dispatch(decrement())}>-</button>
//               Count : {countValue}
//               <button onClick={()=>dispatch(increment())}>+</button>
//             </div>
//         </div>
//     </div>
//   );
// }

// export default App;

// redux end

// redux toolkit start

// import React from 'react';
// import './App.css';
// import { useDispatch, useSelector } from 'react-redux';
// import { decrement, increment } from './components/Redux_toolkit/CartSlice';


// function App() {
//   const countValue = useSelector((state) => state.counter.count);
//   const dispatch = useDispatch();

//   return (
//     <div>    
//         <div>
//             <h1>Counter App Redux Toolkit</h1>
//             <div>
//               <button onClick={()=>dispatch(increment())}>-</button>
//               Count : {countValue}
//               <button onClick={()=>dispatch(decrement())}>+</button>
//             </div>
//         </div>
//     </div>
//   );
// }

// export default App;

// redux toolkit end


import './App.css';
import Geekster from './components/Geekster_Assignment_Practice/Geekster'
// import PracticeOnlyUseCallback from './components/PracticeOnlyUseCallback';
// import PracticeOnlyUseMemo from './components/PracticeOnlyUseMemo';
// import Practice from './components/PracticeOnlyUsestate';
import toast, { Toaster } from 'react-hot-toast';
// import PracticeOnlyUseReducer from './components/PracticeOnlyUseReducer';
// import PracticeOnlyUseEffect from './components/PracticeOnlyUseEffect';
// import { BrowserRouter,Route,Router, Routes } from 'react-router-dom';
// import Main from './ReactRouter/Main';
// import Mens from './ReactRouter/Mens';
// import Women from './ReactRouter/Women';
// import About from './ReactRouter/About';
// import Contact from './ReactRouter/Contact';
// import Home from './ReactRouter/Home';


// propdrilling start
// import ComA from './components/Prop_Drilling/ComA';
// import { createContext } from 'react';

// const fname = createContext();
// const currage = createContext();

function App() {
  // let name = "Hello";
  // let age = 21;

  return (
    <div>
      <Geekster/>
      {/* <PracticeOnlyUseCallback/> */}
      {/* <PracticeOnlyUseMemo/> */}
      {/* useContext start */}
      {/* <fname.Provider value={name}>
        <currage.Provider value={age}>
          <ComA/>
        </currage.Provider>
      </fname.Provider> */}
      {/* useContext end */}
      {/* contextApi start */}
      {/* <fname.Provider value={name}>
        <currage.Provider value={age}>
          <ComA/>
        </currage.Provider>
      </fname.Provider> */}
      {/* contextApi end */}
      {/* prop drilling start */}
      {/* <ComA name={name} age={age}/> */}
      {/* prop drilling start */}

      {/* <PracticeOnlyUseReducer/> */}
      {/* <PracticeOnlyUseEffect/> */}
      {/* <Practice/> */}
      <Toaster/>

      {/* implement routing start */}

      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}>
              <Route path='/' element={<Main/>} />
              <Route path='/men' element={<Mens/>}/>
              <Route path='/women' element={<Women/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/contact' element={<Contact/>}/>
            <Route/>
          </Route>
        </Routes>
      </BrowserRouter>       */}

       {/* implement routing end */}
    </div>
  );
}


// export  {fname,currage};
export default App;
