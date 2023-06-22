import { useState } from 'react'
import './index.css'
import Home from './Home'
import { Route, Routes } from 'react-router-dom'
import SignUp from './Signup'
import LogIn from './Login'

function App() {
  

  return (
    <>
      <Routes>

      <Route exact path="/" element={ <Home /> }/>
      <Route exact path="/SignUp" element={ <SignUp /> }/>
      <Route exact path="/LogIn" element={ <LogIn /> }/>


      </Routes>
    </>
  )
}

export default App
