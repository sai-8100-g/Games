import React from 'react'
import PropTypes from 'prop-types'
import {BiArrowBack} from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import "./GameRules.css"


function GameRules(props) {
  const {handlePlayState} = props
  const navigate = useNavigate()
  return (
    <div className="card-flip">
      <div className="container">
        <button
          type="button"
          className="back-btn"
          onClick={() => {
            navigate("/")
          }}
        >
          <BiArrowBack />
          Back
        </button>
        <img
          src="https://res.cloudinary.com/dkbtw06um/image/upload/f_auto,q_auto/cgthz0gadcf5gbz0fnwc"
          alt="card flip memory game"
        />
        <h2>Rules</h2>
        <div className="ul-container">
          <ul className="list">
            <li className="item">
              When the game is started, the users should be able to see the list
              of Cards that are shuffled and turned face down.
            </li>
            <li className="item">
              When a user starts the game, the user should be able to see the
              Timer running.
            </li>
            <li className="item">The Timer starts from 2 Minutes.</li>
            <li className="item">
              If the two cards have the same image, they remain face up. If not,
              they should be flipped face down again after a short 2 seconds.
            </li>
          </ul>
          <ul className="list">
            {' '}
            <li className="item">
              Users should be able to compare only two cards at a time.
            </li>
            <li className="item">
              When the user is not able to find all the cards before the timer
              ends then the game should end and redirect to the Time Up Page.
            </li>
            <li className="item">
              If the user finds all the matching cards before the timer ends,
              then the user should be redirected to the results page.
            </li>
          </ul>
        </div>
        <button
          type="button"
          className="start-btn"
          onClick={() => handlePlayState()}
        >
          Start Playing
        </button>
      </div>
    </div>
  )
}

GameRules.propTypes = {
    handlePlayState:PropTypes.func.isRequired
}

export default GameRules