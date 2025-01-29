import React from 'react'
import PropTypes from 'prop-types'
import "./Nav.css"


function Nav(props) {
  const {formattedScore, formattedTopScore, gameStatus} = props
  return (
    <nav className="emoji-nav">
      <div>
        <img
          src="https://res.cloudinary.com/dkbtw06um/image/upload/f_auto,q_auto/tjotykd3iwmlero5dl66"
          alt="emoji logo"
        />
        <p style={{margin:"0px", fontWeight:"bold"}}>Emoji Game</p>
      </div>
      {gameStatus === 'progress' ? (
        <div>
          <p style={{margin:"0px", fontWeight:"bold"}}>Score: <span style={{color:"blue"}}>{formattedScore}</span></p>
          <p style={{margin:"0px", fontWeight:"bold"}}>Top Score : <span style={{color:"blue"}}>{formattedTopScore}</span></p>
        </div>
      ) : (
        ''
      )}
    </nav>
  )
}

Nav.propTypes = {
    gameStatus : PropTypes.string.isRequired,
    formattedScore:PropTypes.string.isRequired,
    formattedTopScore : PropTypes.string.isRequired,
}

export default Nav