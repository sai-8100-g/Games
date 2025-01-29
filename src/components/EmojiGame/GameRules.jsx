import React from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import './GameRules.css'

function GameRules(props) {
  const { handlePlayingState } = props;
  const navigate = useNavigate();
  const onClickToHomePage = () => {
    navigate('/');
  };
  return (
    <div className="emoji-rules">
      <div className="outer-container">
        <button type="button" style={{fontWeight:"bold"}} className="back-btn" onClick={onClickToHomePage}>
          <BiArrowBack /> Back
        </button>
        <div className="inner-container">
          <div className="img-container">
            <img
              src="https://res.cloudinary.com/dkbtw06um/image/upload/f_auto,q_auto/druzptbxubid4rord04l"
              alt="emoji game"
            />
          </div>
          <div className='rules-container'>
          <h2 style={{fontWeight:"bold"}} className='rules-h2'>Rules</h2>
            <ul className="rules">
              <li>User should be able to see the list of Emojis</li>
              <li>
                When the user clicks any one of the Emoji for the first time,
                then the count of the score should be incremented by 1 and the
                List of emoji cards should be shuffled.
              </li>
              <li>
                This process should be repeated every time the user clicks on an
                emoji card
              </li>
              <li>
                When the user clicks on all Emoji cards without clicking any of
                it twice, then the user will win the game
              </li>
              <li>
                When the user clicks on the same Emoji for the second time, then
                the user will lose the game.
              </li>
              <li>
                Once the game is over, the user will be redirected to the
                results page.
              </li>
            </ul>
            <div className='game-start-btn-container'>
                <button
                  type="button"
                  className="game-start-btn"
                  onClick={() => handlePlayingState()}
                >
                  Start Playing
                </button>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

GameRules.propTypes = {
  handlePlayingState: PropTypes.func.isRequired,
};

export default GameRules;
