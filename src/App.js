import './App.css';
// import Practice from './components/PracticeOnlyUsestate';
import toast, { Toaster } from 'react-hot-toast';
import PracticeOnlyUseReducer from './components/PracticeOnlyUseReducer';
// import PracticeOnlyUseEffect from './components/PracticeOnlyUseEffect';

function App() {
  return (
    <div>
      <PracticeOnlyUseReducer/>
      {/* <PracticeOnlyUseEffect/> */}
      {/* <Practice/> */}
      <Toaster/>

    </div>
  );
}

export default App;
