import "./App.css";
import { Route, Routes } from "react-router-dom";

import Home from "./component/Home/Home";
import AboutUs from "./component/AboutUs/AboutUs";
import LandingPageRework from "./component/LandingPageRework/LandingPageRework.jsx";
import Faq from "./component/LandingPageRework/Faq";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPageRework />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </div>
  );
}

export default App;
