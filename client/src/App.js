
import './App.css';
import { Route, Routes } from "react-router-dom";

import Home from './component/Home/Home';

import LandingPageRework from './component/LandingPageRework/LandingPageRework.jsx'
function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<LandingPageRework/>}/>

  <Route path='/home' element={<Home/>}/>


 </Routes>
     
    </div>
  );
}

export default App;
