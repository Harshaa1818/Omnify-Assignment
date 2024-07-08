

import { Route, Routes } from 'react-router-dom'
import './App.css'
import React from 'react'

import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage.jsx'
import Register from './pages/Register'
import UserLandingPage from './pages/UserLandingPage'

function App() {


  return (
    <div>
      <h1>Welcome to FriendBook App</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<Register />} />
        <Route path='UserLandingPage' element={<UserLandingPage/>} />
      
      </Routes>
      
    
    </div>
  )
}

export default App
