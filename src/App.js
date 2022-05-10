
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import Appointemnt from './Pages/Appointment/Appointemnt';

function App() {
  return (
    <div className=" max-w-7xl mx-auto bg-white">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/appointment" element={<Appointemnt />} />
      </Routes>
    </div>
  );
}

export default App;
