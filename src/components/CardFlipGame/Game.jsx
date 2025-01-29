import {useState, useEffect} from 'react'
import React from 'react'
import {BiArrowBack} from 'react-icons/bi'
import Result from './Result'
import Popup from './Popup'
import './Game.css'
import { useNavigate } from 'react-router-dom'


const cardsData = [
  {
    id: 1,
    name: 'tiger',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-tiger-img.png',
    isFlip: false,
  },
  {
    id: 2,
    name: 'lion',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-lion-img.png',
    isFlip: false,
  },
  {
    id: 3,
    name: 'rat',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-rat-img.png',
    isFlip: false,
  },
  {
    id: 4,
    name: 'hen',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-hen-img.png',
    isFlip: false,
  },
  {
    id: 5,
    name: 'elephant',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-elephant-img.png',
    isFlip: false,
  },
  {
    id: 6,
    name: 'buffalo',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-buffalo-img.png',
    isFlip: false,
  },
  {
    id: 7,
    name: 'goat',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-goat-img.png',
    isFlip: false,
  },
  {
    id: 8,
    name: 'zebra',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-zebra-img.png',
    isFlip: false,
  },
  {
    id: 9,
    name: 'duck',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-duck-img.png',
    isFlip: false,
  },
  {
    id: 10,
    name: 'pigeon',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-pigeon-img.png',
    isFlip: false,
  },
  {
    id: 11,
    name: 'tiger',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-tiger-img.png',
    isFlip: false,
  },
  {
    id: 12,
    name: 'lion',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-lion-img.png',
    isFlip: false,
  },
  {
    id: 13,
    name: 'rat',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-rat-img.png',
    isFlip: false,
  },
  {
    id: 14,
    name: 'hen',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-hen-img.png',
    isFlip: false,
  },
  {
    id: 15,
    name: 'elephant',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-elephant-img.png',
    isFlip: false,
  },
  {
    id: 16,
    name: 'buffalo',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-buffalo-img.png',
    isFlip: false,
  },
  {
    id: 17,
    name: 'goat',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-goat-img.png',
    isFlip: false,
  },
  {
    id: 18,
    name: 'zebra',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-zebra-img.png',
    isFlip: false,
  },
  {
    id: 19,
    name: 'duck',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-duck-img.png',
    isFlip: false,
  },
  {
    id: 20,
    name: 'pigeon',
    image:
      'https://new-assets.ccbp.in/frontend/content/react-js/card-flip-memory/card-flip-memory-game-pigeon-img.png',
    isFlip: false,
  },
]

const status = {
  progress: 'progress',
  won: 'won',
  lose: 'lose',
}

function Game() {
  const [stateCardsData, setCardsData] = useState(cardsData)
  const [prevName, setPrevName] = useState(null)
  const [names, setNames] = useState([])
  const [count, setCount] = useState(0)
  const [min, setMin] = useState(2)
  const [sec, setSec] = useState(0)
  const [gameStatus, setGameStatus] = useState(status.progress)
  const [showRules, setShowRules] = useState(false)
  const navigate = useNavigate()



  useEffect(() => {
    const timer = setInterval(() => {
      if (names.length < 10) {
        if (min > 0 || sec > 0) {
          if (sec === 0 && min > 0) {
            setMin(prevState => prevState - 1)
            setSec(59)
          } else if (sec !== 0) {
            setSec(prevState => prevState - 1)
          }
        } else {
          clearInterval(timer)
          setGameStatus(status.lose)
        }
      } else {
        clearInterval(timer)
        setGameStatus(status.won)
      }
    }, 1000)
    return () => clearInterval(timer)
  }, [min, sec, names.length])

  const onClickToFlipTrue = e => {
    setCount(prevState => prevState + 1)
    const clickedItemId = parseInt(e.currentTarget.id, 10)

    setCardsData(() =>
      stateCardsData.map(item => {
        if (item.id === clickedItemId) {
          return {...item, isFlip: true}
        }
        return item
      }),
    )

    const clickedItem = stateCardsData.filter(
      item => item.id === clickedItemId,
    )[0]

    setTimeout(() => {
      if (prevName === null) {
        setPrevName(clickedItem.name)
      } else if (prevName === clickedItem.name) {
        setNames(prevState => [...prevState, clickedItem.name])
        setPrevName(null)
      } else if (prevName !== clickedItem.name) {
        setCardsData(() =>
          stateCardsData.map(item => {
            if (!names.includes(item.name)) {
              return {...item, isFlip: false}
            }
            return item
          }),
        )

        setPrevName(null)
      }
    }, 500)
  }

  const onClickToFlipFalse = e => {
    const clickedItemId = parseInt(e.currentTarget.id, 10)
    const clickedItem = stateCardsData.filter(
      item => item.id === clickedItemId,
    )[0]
    setCardsData(() =>
      stateCardsData.map(item => {
        if (item.id === clickedItemId && !names.includes(clickedItem.name)) {
          return {...item, isFlip: false}
        }
        return item
      }),
    )
  }

  const shuffleCardsData = data => {
    const newCardsData = [...data]
    newCardsData.forEach((_, index) => {
      const randomIndex = Math.floor(Math.random() * stateCardsData.length)
      ;[newCardsData[randomIndex], newCardsData[index]] = [
        newCardsData[index],
        newCardsData[randomIndex],
      ]
    })

    setCardsData(() => newCardsData.map(item => ({...item, isFlip: false})))
  }

  const restartGame = () => {
    setNames([])
    shuffleCardsData(stateCardsData)
    setMin(2)
    setSec(0)
    setCount(0)
    setGameStatus(status.progress)
    setPrevName(null)
  }

  const closePopup = () => {
    setShowRules(false)
  }

  

  const formattedCount = count.toString().padStart(2, 0)
  const formattedMin = min.toString().padStart(2, 0)
  const formattedSec = sec.toString().padStart(2, 0)
  const formattedScore = names.length.toString().padStart(2, 0)

  return gameStatus === status.progress ? (
    <div className="flip-game">
      <div className="container">
        <div className="button-container" style={{position:"absolute", top:"10px", paddingLeft:"20px", paddingRight:"20px"}}>
          <button
            type="button"
            onClick={() => {
              navigate("/")
            }}
          >
            <BiArrowBack />
            Back
          </button>
          <button type="button" onClick={() => setShowRules(true)}>
            Rules
          </button>
        </div>
        <h1 className="h1-heading" style={{textAlign:"center", marginBottom:"30px"}}>Card-Flip Memory Game</h1>
        <p className='d-md-none fw-bold text-white'>
            {formattedMin}:{formattedSec}
          </p>
        <div className="list" style={{marginBottom:"20px"}}>
          <p className="item">Card flip count - {formattedCount}</p>
          <p className="item time1">
            {formattedMin}:{formattedSec}
          </p>
          <p className="item">Score - {formattedScore}</p>
        </div>
        <ul className="game">
          {stateCardsData.map(item => (
            <li key={item.id} className="item">
              <button
                type="button"
                id={item.id}
                onClick={onClickToFlipFalse}
                className={item.isFlip ? 'rotate-in' : 'rotate-out'}
              >
                <img src={item.image} alt={item.name} />
              </button>
              <button
                data-testid={item.name}
                type="button"
                id={item.id}
                onClick={onClickToFlipTrue}
                className={item.isFlip ? 'rotate-out' : 'rotate-in'}
              >
                <img
                  src="https://res.cloudinary.com/dkbtw06um/image/upload/f_auto,q_auto/f0w9afohvcrdpevuvijc"
                  alt="foot prints"
                  className="foot-prints"
                />
              </button>
            </li>
          ))}
        </ul>
        {showRules && <Popup closePopup={closePopup} />}
      </div>
    </div>
  ) : (
    <Result
      gameStatus={gameStatus}
      formattedScore={formattedScore}
      restartGame={restartGame}
    />
  )
}

export default Game