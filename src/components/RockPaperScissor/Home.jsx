import React from 'react'
import {useState} from 'react'
import GameRules from './GameRules'
import Game from './Game'


function RockPaperScissor() {
  const [isPlaying, setIsPlaying] = useState(false)
  const handleShowRules = () => {
    setIsPlaying(true)
  }
  return isPlaying ? <Game /> : <GameRules handleShowRules={handleShowRules} />
}

export default RockPaperScissor