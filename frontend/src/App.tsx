import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import Question from './components/Question'

function App() {

  return (
    <>
      {/* <Home /> */}
      <Routes>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/questions" element={<Question/>}></Route>
      </Routes>
    </>
  )
}

export default App
