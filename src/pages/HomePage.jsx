import React from 'react';
import { Link } from 'react-router-dom';

// const imgArr = [
//     {
//       id: 1,
//       imageUrl:
//         'https://res.cloudinary.com/dkbtw06um/image/upload/f_auto,q_auto/druzptbxubid4rord04l',
//       name: 'emoji game',
//       path: 'emoji-game',
//       className: 'home-emoji-game',
//       para: '',
//     },
//     {
//       id: 2,
//       imageUrl:
//         'https://res.cloudinary.com/dkbtw06um/image/upload/f_auto,q_auto/j9w39jqe0cbixjdofxir',
//       name: 'memory matrix game',
//       path: 'memory-matrix',
//       className: 'home-memory-game',
//       para: 'Memory Matrix',
//     },
//     {
//       id: 3,
//       imageUrl:
//         'https://res.cloudinary.com/dkbtw06um/image/upload/f_auto,q_auto/txnnj7evekc6cm2a8opx',
//       name: 'rock paper scissor',
//       path: 'rock-paper-scissor',
//       className: 'home-rock-game',
//       para: 'ROCK  PAPER  SCISSOR',
//     },
//     {
//       id: 4,
//       imageUrl:
//         'https://res.cloudinary.com/dkbtw06um/image/upload/f_auto,q_auto/cgthz0gadcf5gbz0fnwc',
//       name: 'card flip memory game',
//       path: 'card-flip-memory-game',
//       className: 'home-flip-game',
//       para: '',
//     },
//   ]

const HomePage = () => {
  return (
    <div
      style={{
        backgroundImage:
          'linear-gradient(117.3deg, #834d9b 2.24%, #d04ed6 173.83%)',
      }}
      className="container-fluid vh-100"
    >
      <div className="row pt-4">
        <h1
          style={{ fontSize: '50px' }}
          className="text-white text-center fw-bold"
        >
          Games
        </h1>
        <div className="col-12 col-md-10 m-auto d-flex flex-wrap  gap-2 justify-content-center align-items-center ">
          <Link
            to="/emoji-game"
            className="col-12 col-md-5 bg-white d-flex justify-content-center align-items-center p-2 rounded shadow"
          >
            <img
              src="https://res.cloudinary.com/dkbtw06um/image/upload/f_auto,q_auto/druzptbxubid4rord04l"
              alt="emoji-game"
              style={{width:"250px"}}
              className=""
            />
          </Link>
          <Link
            to="/memory-game"
            className="col-12 col-md-5 bg-white text-decoration-none text-dark d-flex flex-column justify-content-center align-items-center p-2 rounded shadow"
          >
            <h4 className="fw-bold ">Memory Matrix</h4>
            <img
              src="https://res.cloudinary.com/dkbtw06um/image/upload/f_auto,q_auto/j9w39jqe0cbixjdofxir"
              alt="emoji-game"
              style={{width:"300px"}}
              className=""
            />
          </Link>
          <Link
            to="/flip-game"
            className="col-12 col-md-5 bg-white d-flex justify-content-center align-items-center p-2 rounded shadow"
          >
            <img
              src="https://res.cloudinary.com/dkbtw06um/image/upload/f_auto,q_auto/cgthz0gadcf5gbz0fnwc"
              alt="emoji-game"
              style={{
                width:"250px",
                height:"270px"
              }}
              className="w-100"
            />
          </Link>
          <Link
            to="/rock-paper-scissor"
            className="col-12 col-md-5 bg-white text-decoration-none text-dark  d-flex flex-column justify-content-center align-items-center p-2 rounded shadow"
          >
            <h4 className="fw-bold">Rock Paper Scissor</h4>
            <img
              src="https://res.cloudinary.com/dkbtw06um/image/upload/f_auto,q_auto/txnnj7evekc6cm2a8opx"
              alt="emoji-game"
              className=""
              style={{width:"260px"}}
            />
          </Link>
        </div>

      </div>
    </div>
  );
};

export default HomePage;
