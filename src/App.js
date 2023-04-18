import React from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css';
import Navbar from './Components/Navbar'
import Signup from './Components/Signup'
import Login from './Components/Login'
import LandingPage from './Components/LandingPage'
import HomePage from './Components/HomePage';
import Profile from './Components/Profile';
import Notifications from './Components/Notifications';
import Admin from './Components/Admin';
import Post from './Components/Post';
import Community from './Components/Community';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile/>} />
      <Route path='/home' element={<HomePage/>}/>
      <Route path='/admin' element={<Admin/>}/>
      <Route path='/community' element={<Community/>}/>
      <Route path='/notification' element={<Notifications/>}/>
      <Route path='/manage/posts' element={<Post/>}/>
    </Routes>
    </div>
  );
}

export default App;
