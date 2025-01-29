import React from 'react'

import {useState} from 'react'
import {BiArrowBack} from 'react-icons/bi'
import Modal from 'react-modal'
import {CgClose} from 'react-icons/cg'
import Nav from './Nav'
import './Game.css'
import { useNavigate } from 'react-router-dom'

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

// <h1>Emoji Game</h1>
const emojisList = [
  {
    id: 0,
    emojiName: 'Face with stuck out tongue',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-img.png',
  },
  {
    id: 1,
    emojiName: 'Face with head bandage',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-head-bandage-img.png',
  },
  {
    id: 2,
    emojiName: 'Face with hugs',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-hugs-img.png',
  },
  {
    id: 3,
    emojiName: 'Face with laughing',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-img.png',
  },
  {
    id: 4,
    emojiName: 'Laughing face with hand in front of mouth',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-with-hand-infront-mouth-img.png',
  },
  {
    id: 5,
    emojiName: 'Face with mask',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-mask-img.png',
  },
  {
    id: 6,
    emojiName: 'Face with silence',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-silence-img.png',
  },
  {
    id: 7,
    emojiName: 'Face with stuck out tongue and winked eye',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-and-winking-eye-img.png',
  },
  {
    id: 8,
    emojiName: 'Grinning face with sweat',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/grinning-face-with-sweat-img.png',
  },
  {
    id: 9,
    emojiName: 'Smiling face with heart eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-heart-eyes-img.png',
  },
  {
    id: 10,
    emojiName: 'Grinning face',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/grinning-face-img.png',
  },
  {
    id: 11,
    emojiName: 'Smiling face with star eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-star-eyes-img.png',
  },
]

function Game() {
  const [emojiData, setEmojiData] = useState([...emojisList])
  const [emojiIds, setEmojiIds] = useState([])
  const [gameStatus, setGameStatus] = useState('progress')
  const [score, setScore] = useState(0)
  const [topScore, setTopScore] = useState(0)
  const [modalIsOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  const onClickToShuffleEmoji = () => {
    const emojiArr = [...emojiData]
    emojiArr.forEach((_, index) => {
      const randomIndex = Math.floor(Math.random() * emojiArr.length)
      ;[emojiArr[index], emojiArr[randomIndex]] = [
        emojiArr[randomIndex],
        emojiArr[index],
      ]
    })

    setEmojiData(emojiArr)
  }

  const onClickToCountScore = e => {
    const currentId = e.currentTarget.id
    if (score !== emojiData.length - 1) {
      if (emojiIds.includes(currentId)) {
        setGameStatus('lost')
      } else {
        setEmojiIds(prevState => [...prevState, currentId])
        setScore(prevState => prevState + 1)
        setGameStatus('progress')
        onClickToShuffleEmoji()
      }
    } else {
      setGameStatus('won')
    }
  }

  const formattedScore = score.toString().padStart(2, 0)

  const onClickToRestartGame = () => {
    if (gameStatus === 'won') {
      setTopScore(12)
    } else {
      setTopScore(() => (score > topScore ? score : topScore))
    }
    setGameStatus('progress')
    setScore(0)
    setEmojiIds([])
  }

  const failureRender = () => (
    <div className="failure-card">
      <div>
        <h1>You Lose</h1>
        <p>Score</p>
        <h2>{formattedScore}/12</h2>
        <button type="button" onClick={onClickToRestartGame}>
          Play Again
        </button>
      </div>
      <div>
        <img
          src="https://res.cloudinary.com/dkbtw06um/image/upload/f_auto,q_auto/nmpai7orceqfis5ts7rw"
          alt="lose"
        />
      </div>
    </div>
  )

  const happyRender = () => (
    <div className="failure-card">
      <div>
        <h1>You Won</h1>
        <p>Best Score</p>
        <p>12/12</p>
        <button type="button" onClick={onClickToRestartGame}>
          Play Again
        </button>
      </div>
      <div>
        <img
          src="https://res.cloudinary.com/dkbtw06um/image/upload/f_auto,q_auto/vkp91oqit9vogvj8nltq"
          alt="won"
        />
      </div>
    </div>
  )

  const renderFuntionOnGameStatus = () => {
    switch (gameStatus) {
      case 'lost':
        return failureRender()
      case 'won':
        return happyRender()
      default:
        return null
    }
  }

  const onClickToHomePage = () => {
    navigate("/")
  }

  const formattedTopScore = topScore.toString().padStart(2, 0)
  return (
    <div className="emoji-game">
      <Nav
        formattedScore={formattedScore}
        formattedTopScore={formattedTopScore}
        gameStatus={gameStatus}
      />
      <div className="button-container">
        <button type="button" onClick={onClickToHomePage}>
          <BiArrowBack /> Back
        </button>
        <button type="button" onClick={() => openModal(true)}>
          Rules
        </button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          className="emoji-popup"
        >
          <button
            type="button"
            aria-label="close button"
            data-testid="close"
            onClick={() => closeModal()}
          >
            <CgClose />
          </button>

          <ul>
            <h2>Rules</h2>
            <li>User should be able to see the list of Emojis</li>
            <li>
              When the user clicks any one of the Emoji for the first time, then
              the count of the score should be incremented by 1 and the List of
              emoji cards should be shuffled.
            </li>
            <li>
              This process should be repeated every time the user clicks on an
              emoji card
            </li>
            <li>
              When the user clicks on all Emoji cards without clicking any of it
              twice, then the user will win the game
            </li>
            <li>
              When the user clicks on the same Emoji for the second time, then
              the user will lose the game.
            </li>
            <li>
              Once the game is over, the user will be redirected to the results
              page.
            </li>
          </ul>
        </Modal>
      </div>

      {gameStatus === 'progress' ? (
        <ul className="emoji-ul">
          {emojiData.map(item => (
            <li key={item.id}>
              <button type="button" id={item.id} onClick={onClickToCountScore}>
                <img src={item.emojiUrl} alt={item.emojiName} />
              </button>
            </li>
          ))}
        </ul>
      ) : (
        renderFuntionOnGameStatus()
      )}
    </div>
  )
}

export default Game