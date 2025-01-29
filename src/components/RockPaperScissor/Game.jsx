import React from 'react'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import Modal from 'react-modal'
import {BiArrowBack} from 'react-icons/bi'
import {CgClose} from 'react-icons/cg'
import Result from './Result'
import './Game.css'

const status = {
  progress: 'progress',
  lost: 'lost',
  won: 'won',
  draw: 'draw',
}

const choicesList = [
  {
    id: 'rock',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'scissor',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'paper',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}

function Game() {
  const [gameStatus, setGameStatus] = useState(status.progress)
  const [score, setScore] = useState(0)
  const [modalIsOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  const [selectedOptions, setSelectedOptions] = useState({
    userSeletion: '',
    pcSelection: '',
  })

  const [pcSelection, setPcSelection] = useState(() => {
    const gameIds = ['rock', 'paper', 'scissor']
    const randomNum = Math.floor(Math.random() * gameIds.length)
    return gameIds[randomNum]
  })

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  const onClickToSelectItem = e => {
    const clickedItemId = e.currentTarget.id

    setSelectedOptions({
      userSeletion: choicesList.filter(item => item.id === clickedItemId)[0],
      pcSelection: choicesList.filter(item => item.id === pcSelection)[0],
    })

    if (clickedItemId === pcSelection) {
      setGameStatus(status.draw)
    } else if (
      (clickedItemId === 'rock' && pcSelection === 'scissor') ||
      (clickedItemId === 'paper' && pcSelection === 'rock') ||
      (clickedItemId === 'scissor' && pcSelection === 'paper')
    ) {
      setGameStatus(status.won)
      setScore(prevState => prevState + 1)
    } else {
      setGameStatus(status.lost)
      setScore(prevState => prevState - 1)
    }
  }

  const restartGame = () => {
    setGameStatus(status.progress)
    setPcSelection(() => {
      const gameIds = ['rock', 'paper', 'scissor']
      const randomNum = Math.floor(Math.random() * gameIds.length)
      return gameIds[randomNum]
    })
  }

  const onClickToHomePage = () => {
    navigate("/")
  }

  return gameStatus === status.progress ? (
    <div className="rock-game">
      <div className="container">
        <div className="button-container" style={{position:"absolute", top:"10px", paddingLeft:"20px", paddingRight:"20px"}}>
          <button type="button" onClick={onClickToHomePage}>
            <BiArrowBack /> Back
          </button>
          <button type="button" onClick={() => openModal()}>
            Rules
          </button>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            className="rock-popup"
          >
            {' '}
            <button
              type="button"
              aria-label="close button"
              data-testid="close"
              onClick={() => closeModal()}
            >
              <CgClose />
            </button>
            <h2>Rules</h2>
            <div className="ul-container">
              <ul className="list">
                <li className="item">
                  The game result should be based on user and user opponent
                  choices
                </li>
                <li className="item">
                  When the user choice is rock and his opponent choice is rock
                  then the result will be <span>IT IS DRAW</span>
                </li>
                <li className="item">
                  When the user choice is paper and his opponent choice is rock
                  then the result will be <span>YOU WON</span>
                </li>
                <li className="item">
                  When the user choice is a scissor and his opponent choice is
                  rock then the result will be <span>YOU LOSE</span>
                </li>{' '}
                <li className="item">
                  When the user choice is paper and his opponent choice is paper
                  then the result will be <span>IT IS DRAW</span>
                </li>
                <li className="item">
                  When the user choice is scissors and his opponent choice is
                  paper then the result will be <span>YOU WON</span>
                </li>
              </ul>
              <ul className="list">
                <li className="item">
                  When the user choice is rock and his opponent choice is
                  scissors then the result will be <span>YOU WON</span>
                </li>
                <li className="item">
                  When the user choice is paper and his opponent choice is
                  scissors then the result will be <span>YOU LOSE</span>
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
                  When the result is <span>IT IS DRAW</span>, then the count of
                  the score should be the same
                </li>
                <li className="item">
                  When the result is <span>YOU LOSE</span>, then the count of
                  the score should be decremented by 1.
                </li>
              </ul>
            </div>
          </Modal>
        </div>
        <h1 className="heading" style={{marginBottom:"20px"}}>Rock Paper Scissor</h1>
        <h1 className="para" style={{marginBottom:"10px"}}>Let’s pick</h1>
        <div className="frame-container">
          <img
            src="https://res.cloudinary.com/dkbtw06um/image/upload/f_auto,q_auto/sh4b3ucdbuadxgxxgugd"
            alt="frame"
            className="frame"
          />
          <button
            type="button"
            className="rock img-btn"
            id="rock"
            onClick={onClickToSelectItem}
            data-testid="rockButton"
          >
            <img
              src="https://res.cloudinary.com/dkbtw06um/image/upload/f_auto,q_auto/vo26k2qbxiqpvjoht64p"
              alt="rock"
            />
          </button>
          <button
            type="button"
            className="scissor img-btn"
            id="scissor"
            onClick={onClickToSelectItem}
            data-testid="scissorButton"
          >
            <img
              src="https://res.cloudinary.com/dkbtw06um/image/upload/f_auto,q_auto/fbfojcfh6x9izfxhihjn"
              alt="scissor"
            />
          </button>
          <button
            type="button"
            className="paper img-btn"
            id="paper"
            onClick={onClickToSelectItem}
            data-testid="paperButton"
          >
            <img
              src="https://res.cloudinary.com/dkbtw06um/image/upload/f_auto,q_auto/ifl0eseghwktubjbcl2n"
              alt="paper"
            />
          </button>
        </div>
      </div>
    </div>
  ) : (
    <Result
      selectedOptions={selectedOptions}
      gameStatus={gameStatus}
      score={score}
      restartGame={restartGame}
    />
  )
}

export default Game