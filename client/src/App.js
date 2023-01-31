import "./App.css";
import { Route, Routes } from "react-router-dom";
import Faq from './component/LandingPageRework/Faq.jsx'
import Home from "./component/Home/Home";
import AboutUs from "./component/AboutUs/AboutUs";
import LandingPageRework from "./component/LandingPageRework/LandingPageRework.jsx";
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
