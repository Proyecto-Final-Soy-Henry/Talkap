import "./App.css";
import { Route, Routes } from "react-router-dom";

import Home from "./component/Home/Home";
import AboutUs from "./component/AboutUs/AboutUs";
import LandingPageRework from "./component/LandingPageRework/LandingPageRework.jsx";
import Faq from "./component/LandingPageRework/Faq";
import Blacklist from "./component/BlackList/BlackList.jsx";
import axios from "axios";
// axios.defaults.baseURL ='http://localhost:3001/';//// cambiar a ruta del back end
axios.defaults.baseURL = "https://serverdeploy-production.up.railway.app/"; //// cambiar a ruta del back end

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPageRework />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/blacklist" element={<Blacklist />} />
      </Routes>
    </div>
  );
}

export default App;
