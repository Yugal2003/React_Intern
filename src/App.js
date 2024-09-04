import './App.css';
// import Practice from './components/PracticeOnlyUsestate';
// import toast, { Toaster } from 'react-hot-toast';
// import PracticeOnlyUseReducer from './components/PracticeOnlyUseReducer';
// import PracticeOnlyUseEffect from './components/PracticeOnlyUseEffect';
import { BrowserRouter,Route,Router, Routes } from 'react-router-dom';
import Main from './ReactRouter/Main';
import Mens from './ReactRouter/Mens';
import Women from './ReactRouter/Women';
import About from './ReactRouter/About';
import Contact from './ReactRouter/Contact';
import Home from './ReactRouter/Home';

function App() {
  return (
    <div>
      {/* <PracticeOnlyUseReducer/> */}
      {/* <PracticeOnlyUseEffect/> */}
      {/* <Practice/> */}
      {/* <Toaster/> */}

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}>
            {/* child routes */}
              <Route path='/' element={<Main/>} />
              <Route path='/men' element={<Mens/>}/>
              <Route path='/women' element={<Women/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/contact' element={<Contact/>}/>
            <Route/>
          </Route>
        </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;
