import './App.css';
// import Practice from './components/PracticeOnlyUsestate';
// import toast, { Toaster } from 'react-hot-toast';
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
      {/* <Toaster/> */}

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
