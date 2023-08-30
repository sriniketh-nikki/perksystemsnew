import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';

import Aboutus from "./aboutus";
import Services from "./services";
import Clients from "./clients";
import Careers from "./careers";
import Contactus from "./contactus";
import Home from "./home";
import Navigation from "./navigation";
import Footer from "./footer";
import Login from "./login";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navigation/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="aboutus" element={<Aboutus />} />
          <Route path="services" element={<Services />} />
          <Route path="clients" element={<Clients/>} />
          <Route path="careers" element={<Careers/>} />
          <Route path="contactus" element={<Contactus/>} />
          <Route path="login" element={<Login/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
