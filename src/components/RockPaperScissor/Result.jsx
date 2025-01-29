import React from 'react'
import './Result.css'
import PropTypes from 'prop-types'


function Result(props) {
  const {selectedOptions, gameStatus, score, restartGame} = props
  const formattedScore = score.toString().padStart(2, 0)
  console.log(selectedOptions)
  return (
    <div className="rock-result">
      <div className="container">
        <h1 className="heading">Rock Paper Scissor</h1>
        <ul className="result-list">
          <li className="name-item">
            <h2>Rock</h2>
            <h2>Paper</h2>
            <h2>Scissor</h2>
          </li>
          <li className="compound-item">
            <div className="img-item">
              {gameStatus === 'won' && (
                <img
                  src="https://res.cloudinary.com/dkbtw06um/image/upload/f_auto,q_auto/jhk6klbozlvi2ype10tw"
                  alt="won emoji"
                />
              )}
              {gameStatus === 'lost' && (
                <img
                  src="https://res.cloudinary.com/dkbtw06um/image/upload/f_auto,q_auto/prfaiupginvw0vuxbkdo"
                  alt="lose emoji"
                />
              )}
              {gameStatus === 'draw' && (
                <img
                  src="https://res.cloudinary.com/dkbtw06um/image/upload/f_auto,q_auto/qaejih811p2phidint8o"
                  alt="draw emoji"
                />
              )}
            </div>
            <div className="score-item">
              <div>
                <p>Score</p>
                <p>{formattedScore}</p>
              </div>
            </div>
          </li>
        </ul>
        <ul className="result2-list">
          <li className="you">
            <p>You</p>
            <img
              src={selectedOptions.userSeletion.imageUrl}
              alt={selectedOptions.userSeletion.id}
            />
          </li>
          <li className="status">
            <div>
              {gameStatus === 'won' && (
                <img
                  src="https://res.cloudinary.com/dkbtw06um/image/upload/f_auto,q_auto/hiotr2zczho9u5lus64r"
                  alt="Smiling face with star eyes"
                />
              )}
              {gameStatus === 'lost' && (
                <img
                  src="https://res.cloudinary.com/dkbtw06um/image/upload/f_auto,q_auto/osdk3uxdwkwiifkzeito"
                  alt="Frowning face"
                  className="lost-face"
                />
              )}
              {gameStatus === 'draw' && (
                <img
                  src="https://res.cloudinary.com/dkbtw06um/image/upload/f_auto,q_auto/kpbwh2sk9ny0ykyfk2i1"
                  alt="Face without mouth"
                />
              )}
              {gameStatus === 'won' && <p>YOU WON</p>}
              {gameStatus === 'lost' && <p>YOU LOSE</p>}
              {gameStatus === 'draw' && <p>IT IS DRAW</p>}
              <button type="button" onClick={() => restartGame()}>
                Play Again
              </button>
            </div>
          </li>
          <li className="opponent">
            <p>Opponent</p>{' '}
            <img
              src={selectedOptions.pcSelection.imageUrl}
              alt={selectedOptions.pcSelection.id}
            />
          </li>
        </ul>
      </div>
    </div>
  )
}


Result.propTypes = {
    selectedOptions:PropTypes.node.isRequired,
    gameStatus:PropTypes.string.isRequired,
    score:PropTypes.string.isRequired,
    restartGame:PropTypes.string.isRequired
}

export default Result