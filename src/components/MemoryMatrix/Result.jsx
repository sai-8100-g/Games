import React from 'react'

import './Result.css'
import {Line} from 'rc-progress'
import PropTypes from 'prop-types'

const facesList = [
  {
    id: 1,
    faceUrl:
      'https://res.cloudinary.com/dkbtw06um/image/upload/f_auto,q_auto/lnhw93oppjvlb4xqrf2v',
    name: 'neutral face',
  },
  {
    id: 2,
    faceUrl:
      'https://res.cloudinary.com/dkbtw06um/image/upload/f_auto,q_auto/ubha8nr3nhbq1odrkpx2',
    name: 'grimacing face',
  },
  {
    id: 3,
    faceUrl:
      'https://res.cloudinary.com/dkbtw06um/image/upload/f_auto,q_auto/encgdjfwt4o8rn7ktdbz',
    name: 'slightly smiling face',
  },
  {
    id: 4,
    faceUrl:
      'https://res.cloudinary.com/dkbtw06um/image/upload/f_auto,q_auto/vcqd1wawwvaolxoq8vtt',
    name: 'grinning face with big eyes',
  },
  {
    id: 5,
    faceUrl:
      'https://res.cloudinary.com/dkbtw06um/image/upload/f_auto,q_auto/qcg1pizjlevomlupdm5t',
    name: 'grinning face with smiling eyes',
  },
  {
    id: 6,
    faceUrl:
      'https://res.cloudinary.com/dkbtw06um/image/upload/f_auto,q_auto/kvergmxpqoukdqeksnp2',
    name: 'beaming face with smiling eyes',
  },
  {
    id: 7,
    faceUrl:
      'https://res.cloudinary.com/dkbtw06um/image/upload/f_auto,q_auto/eqkinbpg2xn9cbwzblkt',
    name: 'grinning face',
  },
  {
    id: 8,
    faceUrl:
      'https://res.cloudinary.com/dkbtw06um/image/upload/f_auto,q_auto/mzjsjdndn3ciatkvuerq',
    name: 'smiling face with sunglasses',
  },
]

function Result(props) {
  const {level, retStartGame} = props

  const widthLevel = (level / 15) * 100
  return (
    <div className="memory-result">
      <ul className="img-container">
        {facesList.map(item => (
          <li key={item.id} className="img-list">
            <img src={item.faceUrl} alt={item.name} />
          </li>
        ))}
      </ul>

      <Line
        percent={widthLevel}
        strokeWidth={1}
        strokeColor="#0000ff"
        trailColor="#ecdecf"
        className="progress-bar"
        style={{marginBottom:"20px"}}
      />

      <div className="levels">
        <p>Level 1</p>

        <p>Level 5</p>

        <p>Level 10</p>

        <p>Level 15</p>
      </div>

      <div className="result mt-2">
        <h1 style={{marginBottom:"20px"}}>Congratulations!</h1>
        <h1 style={{marginBottom:"20px", textAlign:"center"}}>You have reached level {level}</h1>
        <button type="button" onClick={() => retStartGame()}>
          Play Again
        </button>
      </div>
    </div>
  )
}

Result.propTypes = {
    level:PropTypes.number.isRequired,
    retStartGame:PropTypes.func.isRequired
}

export default Result