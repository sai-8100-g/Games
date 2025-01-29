import React from 'react'
import {BiArrowBack} from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import "./GameRules.css"

function GameRules(props) {
  const {handleIsPlaying} = props
  const navigate = useNavigate()
  const onClickToHomePage = () => {
    navigate("/")
  }
  return (
    <div className="memory-rules">
      <div>
        <button type="button" className="back-btn" onClick={onClickToHomePage}>
          <BiArrowBack /> Back
        </button>
        <h1>Memory Matrix</h1>
        <img
          src="https://res.cloudinary.com/dkbtw06um/image/upload/f_auto,q_auto/j9w39jqe0cbixjdofxir"
          alt="memory matrix"
        />
        <h2>Rules</h2>
        <div className="ul-containers">
          <ul>
            <li>
              In each level of the Game, Users should be able to see the Grid
              with (N X N) size starting from 3 and the grid will highlight N
              cells in Blue, the N highlighted cells will be picked randomly.
            </li>

            <li>
              After N seconds, the grid will clear the N highlighted cells.
            </li>
            <li>
              At N seconds, the user can click on any cell. Clicking on a cell
              that was highlighted before it will turn blue. Clicking on the
              other cells that were not highlighted before then will turn to
              red.
            </li>
          </ul>
          <ul>
            <li>
              The highlighted cells will remain N seconds for the user to
              memorize the cells. At this point, the user should not be able to
              perform any action.
            </li>
            <li>
              The user should be promoted to the next level if they guess all N
              cells correctly in one attempt.
            </li>
            <li>
              The user should be taken to the results page if the user clicks on
              the wrong cell.
            </li>
            <li>
              If the user completed all the levels, then the user should be
              taken to the results page.
            </li>
          </ul>
        </div>

        <button type="button" onClick={() => handleIsPlaying()}>
          Start Playing
        </button>
      </div>
    </div>
  )
}

GameRules.propTypes = {
    handleIsPlaying:PropTypes.func.isRequired,
}

export default GameRules