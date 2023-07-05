import { useState } from 'react'
import './index.css'
import Home from './Home'
import { Route, Routes } from 'react-router-dom'
import SignUp from './Signup'
import LogIn from './Login'
import Skip from './skipfornow'

function App() {
  

  return (
    <>
      <Routes>

      <Route exact path="/" element={ <Home /> }/>
      <Route exact path="/SignUp" element={ <SignUp /> }/>
      <Route exact path="/LogIn" element={ <LogIn /> }/>
      <Route exact path="/Skip" element={ <Skip /> }/>

      </Routes>
    </>
  )
}

export default App
