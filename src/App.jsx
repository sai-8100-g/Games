import React from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import EmojiGamePage from './pages/EmojiGamePage'
import CardFlipGamePage from './pages/CardFlipGamePage'
import MemoryMatrixGamepage from './pages/MemoryMatrixGamepage'
import RockPaperScissorGamePage from './pages/RockPaperScissorGamePage'

function App() {
  return (
    <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/emoji-game" element={<EmojiGamePage/>}/>
    <Route path='/flip-game' element={<CardFlipGamePage/>}/>
    <Route path='/memory-game' element={<MemoryMatrixGamepage/>}/>
    <Route path='/rock-paper-scissor' element={<RockPaperScissorGamePage/>}/>
  </Routes>
  )
}

export default App
