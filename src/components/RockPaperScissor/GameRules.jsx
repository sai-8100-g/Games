import React from 'react'
import {BiArrowBack} from 'react-icons/bi'
import PropTypes from 'prop-types'
import './GameRules.css'
import { useNavigate } from 'react-router-dom'

function GameRules(props) {
  const {handleShowRules} = props
  const navigate = useNavigate()
  return (
    <div className="rock-game-rules">
      <div className="container">
        <button
          type="button"
          className="back-btn"
          onClick={() => {
            navigate("/")
          }}
        >
          <BiArrowBack /> Back
        </button>
        <h1 className="heading">Rock Paper Scissor</h1>
        <img
          src="https://res.cloudinary.com/dkbtw06um/image/upload/f_auto,q_auto/txnnj7evekc6cm2a8opx"
          alt="rock paper scissor"
          className="img"
        />
        <h1 className="h3-heading">Rules</h1>
        <div className="ul-container">
          <ul className="list">
            <li className="item">
              The game result should be based on user and user opponent choices
            </li>
            <li className="item">
              When the user choice is rock and his opponent choice is rock then
              the result will be <span>IT IS DRAW</span>
            </li>
            <li className="item">
              When the user choice is paper and his opponent choice is rock then
              the result will be <span>YOU WON</span>
            </li>
            <li className="item">
              When the user choice is a scissor and his opponent choice is rock
              then the result will be <span>YOU LOSE</span>
            </li>{' '}
            <li className="item">
              When the user choice is paper and his opponent choice is paper
              then the result will be <span>IT IS DRAW</span>
            </li>
            <li className="item">
              When the user choice is scissors and his opponent choice is paper
              then the result will be <span>YOU WON</span>
            </li>
          </ul>
          <ul className="list">
            <li className="item">
              When the user choice is rock and his opponent choice is scissors
              then the result will be <span>YOU WON</span>
            </li>
            <li className="item">
              When the user choice is paper and his opponent choice is scissors
              then the result will be <span>YOU LOSE</span>
            </li>
            <li className="item">
              When the user choice is scissors and his opponent choice is
              scissors then the result will be <span>IT IS DRAW</span>
            </li>
            <li className="item">
              When the result is <span>YOU WON</span>, then the count of the
              score should be incremented by 1
            </li>
            <li className="item">
              When the result is <span>IT IS DRAW</span>, then the count of the
              score should be the same
            </li>
            <li className="item">
              When the result is <span>YOU LOSE</span>, then the count of the
              score should be decremented by 1.
            </li>
          </ul>
        </div>
        <button
          type="button"
          className="start-btn"
          onClick={() => handleShowRules()}
        >
          Start playing
        </button>
      </div>
    </div>
  )
}

GameRules.propTypes = {
  handleShowRules:PropTypes.func.isRequired
}

export default GameRules