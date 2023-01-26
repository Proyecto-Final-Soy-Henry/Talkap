
import './App.css';
import { Route, Routes } from "react-router-dom";
import Login from './component/Login/Login.jsx';
import Home from './component/Home/Home';
import EnterGlobal from './component/EnterGlobal/EnterGlobal';
import Landing from './component/LandingPage/LandingPage'
function App() {
  return (
    <div className="App">
      <Routes>
  <Route path='/' element={<Landing/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path='/home' element={<Home/>}/>
  {/* <Route path="/home" element={<EnterGlobal/>}/> */}

 </Routes>
     
    </div>
  );
}

export default App;
