import React from 'react'
import {useState} from 'react'
import GameRules from './GameRules'
import Game from './Game'


function CardFlipGame() {
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlayState = () => {
    setIsPlaying(true)
  }

  return isPlaying ? <Game /> : <GameRules handlePlayState={handlePlayState} />
}

export default CardFlipGame