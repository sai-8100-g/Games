import {CgClose} from 'react-icons/cg'
import React from 'react'
import PropTypes from 'prop-types'
import './Popup.css'

function Popup(props) {
  const {closePopup} = props
  return (
    <div className="flip-popup">
      <button
        type="button"
        aria-label="close button"
        onClick={() => closePopup()}
      >
        <CgClose />
      </button>
      <h2>Rules</h2>{' '}
      <div className="flip-ul-container">
        <ul className="flip-list">
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
            Users should be able to compare only two cards at a time.
          </li>
        </ul>
        <ul className="flip-list">
          {' '}
          <li className="item">
            If the two cards have the same image, they remain face up. If not,
            they should be flipped face down again after a short 2 seconds.
          </li>
          <li className="item">
            When the user is not able to find all the cards before the timer
            ends then the game should end and redirect to the Time Up Page.
          </li>
          <li className="item">
            If the user finds all the matching cards before the timer ends, then
            the user should be redirected to the results page.
          </li>
        </ul>
      </div>
    </div>
  )
}


Popup.propTypes = {
    closePopup:PropTypes.func.isRequired
}

export default Popup