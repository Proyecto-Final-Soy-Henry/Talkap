
import './App.css';
import { Route, Routes } from "react-router-dom";

import Home from './component/Home/Home';

import Landing from './component/LandingPage/LandingPage'
function App() {
  return (
    <div className="App">
      <Routes>
  <Route path='/' element={<Landing/>}/>

  <Route path='/home' element={<Home/>}/>


 </Routes>
     
    </div>
  );
}

export default App;
