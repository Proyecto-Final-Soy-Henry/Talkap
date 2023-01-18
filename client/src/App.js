
import './App.css';
import { Route, Routes } from "react-router-dom";
import Login from './component/Login/Login.jsx';
import Home from './component/Home/Home';

function App() {
  return (
    <div className="App">
      <Routes>
  <Route path="/" element={<Login/>}/>
  <Route path='/home' element={<Home/>}/>

 </Routes>
     
    </div>
  );
}

export default App;
