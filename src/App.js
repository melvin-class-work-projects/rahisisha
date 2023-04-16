import React from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css';
import Navbar from './Components/Navbar'
import Signup from './Components/Signup'
import Login from './Components/Login'
import LandingPage from './Components/LandingPage'
import HomePage from './Components/HomePage';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/login" element={<Login />} />
    <Route path='/home' element={<HomePage/>}/>
    </Routes>
    </div>
  );
}

export default App;
