
import './App.css';
import { Route, Routes } from "react-router-dom";
import Login from './component/Login/Login.jsx';
import Home from './component/Home/Home';
import LandingPage from './component/LandingPage/LandingPage.jsx'
import AboutUs from "./component/AboutUs/AboutUs";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path='/home' element={<Home />} />

        <Route path="/aboutUs" element={<AboutUs />} />
      </Routes>

    </div>
  );
}

export default App;
