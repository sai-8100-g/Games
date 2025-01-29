import {useEffect, useState} from 'react'
import React from 'react'
import Modal from 'react-modal'
import {CgClose} from 'react-icons/cg'
import {BiArrowBack} from 'react-icons/bi'
import Result from './Result'
import './Game.css'
import { useNavigate } from 'react-router-dom'

const status = {
  progress: 'progress',
  won: 'won',
  lost: 'lost',
}

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
  const [randomNums, setRandomNums] = useState([])
  const [showColor, setShowColor] = useState(true)
  const [clickedIds, setClickedIds] = useState([])
  const [gameStatus, setGameStatus] = useState(status.progress)
  const [level, setLevel] = useState(1)
  const [wrongId, setWrongId] = useState()
  const [modalIsOpen, setIsOpen] = useState(false)
  const [disabled, setDisabled] = useState(true)
  const navigate = useNavigate()

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    const randomArr = []
    while (randomArr.length < 2 + level) {
      const randomNum = Math.floor(Math.random() * ((2 + level) * (2 + level)))
      if (!randomArr.includes(randomNum)) {
        randomArr.push(randomNum)
      }
    }

    setRandomNums(randomArr)
  }, [level])

  useEffect(() => {
    let timer
    if (showColor && disabled === false) {
      timer = setTimeout(() => {
        setShowColor(false)
      }, 2000)

      return () => clearTimeout(timer)
    }

    return () => clearTimeout(timer)
  }, [level, showColor, disabled])

  useEffect(() => {
    const timer = setTimeout(() => {
      if (clickedIds.length === 2 + level) {
        clearTimeout(timer)
      } else {
        setGameStatus(status.lost)
      }
    }, (2 + level + (2 + level)) * 1000 + 2100)

    return () => clearTimeout(timer)
  }, [clickedIds, level])

  useEffect(() => {
    if (clickedIds.length === 2 + level) {
      if (level === 15) {
        setGameStatus(status.won) // Reached final level
      } else {
        setClickedIds([])
        setShowColor(true)
        setDisabled(true)
        setLevel(prevLevel => prevLevel + 1)
      }
    }
  }, [clickedIds, level])

  const boxColor = item => {
    let bgColor
    if (randomNums.includes(item) && showColor) {
      bgColor = '#467AFF'
    } else if (randomNums.includes(item) && clickedIds.includes(item)) {
      bgColor = '#467AFF'
    } else if (wrongId === item) {
      bgColor = '#EF4444'
    } else {
      bgColor = '#CBD5E1'
    }

    return bgColor
  }

  const onClickToSelectItems = e => {
    if (showColor === false) {
      const currentItemId = parseInt(e.currentTarget.id, 10)
      if (randomNums.includes(currentItemId)) {
        if (!clickedIds.includes(currentItemId)) {
          setClickedIds(prevState => [...prevState, currentItemId])
        }
      } else {
        setWrongId(currentItemId)
        setTimeout(() => {
          setGameStatus(status.lost)
        }, 500)
      }
    }
  }

  let listKey = -1

  const retStartGame = () => {
    setGameStatus(status.progress)
    setClickedIds([])
    setRandomNums(() => {
      const randomArr = []
      while (randomArr.length < 3) {
        const randomNum = Math.floor(Math.random() * 9)
        if (!randomArr.includes(randomNum)) {
          randomArr.push(randomNum)
        }
      }

      return randomArr
    })
    setWrongId(null)
    setShowColor(true)
    setLevel(1)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisabled(false)
    }, (2 + level) * 1000)
    return () => clearTimeout(timer)
  }, [level])

  const onClickToHomePage = () => {
    navigate("/")
  }

  return gameStatus === status.progress ? (
    <div className="memory-game">
      <div className="button-container" style={{position:"absolute", top:"10px"}}>
        <button type="button" onClick={onClickToHomePage}>
          <BiArrowBack />
          Back
        </button>
        <button type="button" onClick={() => openModal(true)}>
          Rules
        </button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          className="memory-popup"
        >
          <button
            type="button"
            aria-label="close button"
            className="close-btn"
            data-testid="close"
            onClick={() => closeModal()}
          >
            <CgClose className="icon" />
          </button>
          <h1 className="heading">Rules</h1>
          <div className="memory-ul">
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
              <li>
                The highlighted cells will remain N seconds for the user to
                memorize the cells. At this point, the user should not be able
                to perform any action.
              </li>
              <li>
                The user should be promoted to the next level if they guess all
                N cells correctly in one attempt.
              </li>
              <li>
                The user should be taken to the results page if the user clicks
                on the wrong cell.
              </li>
              <li>
                If the user completed all the levels, then the user should be
                taken to the results page.
              </li>
            </ul>
          </div>
        </Modal>
      </div>
      <h1 style={{marginBottom:"20px"}}>Memory Matrix</h1>
      <p style={{marginBottom:"20px"}}>Level - {level}</p>
      <div className="list">
        {Array.from({length: (2 + level) * (2 + level)}).map(() => {
          listKey += 1
          return (
            <button
              key={listKey}
              id={listKey}
              onClick={onClickToSelectItems}
              style={{
                width: `calc(${100 / (2 + level)}% - 10px)`,
                backgroundColor: boxColor(listKey),
                opacity: disabled ? 0 : 1,
              }}
              className="item"
              type="button"
              aria-label="Game blocks"
              data-testid={
                randomNums.includes(listKey) ? 'highlighted' : 'notHighlighted'
              }
            >
              cell
            </button>
          )
        })}
      </div>
    </div>
  ) : (
    <Result level={level} retStartGame={retStartGame} />
  )
}

export default Game