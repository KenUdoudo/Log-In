import { useState } from 'react'
import './index.css'
import Home from './Home'
import { Route, Routes } from 'react-router-dom'
import SignUp from './Signup'

function App() {
  

  return (
    <>
      <Routes>

      <Route exact path="/" element={ <Home /> }/>
      <Route exact path="/SignUp" element={ <SignUp /> }/>


      </Routes>
    </>
  )
}

export default App
