import React from 'react'
import PropTypes from 'prop-types'
import './Result.css'

function Result(props) {
  const {gameStatus, formattedScore, restartGame} = props
  return (
    <div className="flip-result">
      <img
        src={
          gameStatus === 'lose'
            ? 'https://res.cloudinary.com/dkbtw06um/image/upload/f_auto,q_auto/amttur5n3ned6ylte4qp'
            : 'https://res.cloudinary.com/dkbtw06um/image/upload/f_auto,q_auto/leqxz2lpyvfp5q1yyl9w'
        }
        alt={
          gameStatus === 'lose' ? 'neutral face' : 'grinning face with big eyes'
        }
      />
      <h1>
        {gameStatus === 'lose' ? 'Better luck next time!' : 'Congratulations!'}
      </h1>
      <p>No.of Flips - {formattedScore}</p>
      <h3>
        {gameStatus === 'won'
          ? 'You matched all of the cards in record time'
          : 'You did not match all of the cards in record time'}
      </h3>
      <button type="button" onClick={() => restartGame()}>
        Play Again
      </button>
    </div>
  )
}

Result.propTypes = {
  gameStatus:PropTypes.string.isRequired,
  formattedScore:PropTypes.number.isRequired,
  restartGame:PropTypes.string.isRequired
}

export default Result