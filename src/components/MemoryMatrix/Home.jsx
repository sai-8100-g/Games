import React from 'react'
import {useState} from 'react'
import GameRules from './GameRules'
import Game from './Game'
// import './index.css'

function Home() {
  const [isPlaying, setIsPlaying] = useState(false)
  const handleIsPlaying = () => {
    setIsPlaying(true)
  }
  return isPlaying ? <Game /> : <GameRules handleIsPlaying={handleIsPlaying} />
}

export default Home