import React from 'react'
import {useState} from 'react'
import GameRules from './GameRules'
import Game from './Game'


function Home() {
  const [isPlaying, setIsPlaying] = useState(false)
  const handlePlayingState = () => {
    setIsPlaying(true)
  }
  return isPlaying ? (
    <Game />
  ) : (
    <GameRules handlePlayingState={handlePlayingState} />
  )
}

export default Home