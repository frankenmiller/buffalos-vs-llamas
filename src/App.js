import { useState } from "react";

function Square({ value, onSquareClick }) { // <!------------------- Square()
  const [darkMode, setDarkMode] = useState(true);
  return (
    <button className="square"
      onClick={onSquareClick}> {value}
    </button>
  );
} // <!------------------------------------------------------------ Square()

export default function Board() {
  // <!----------------------------- Board()
  const [XisNext, setXisNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [darkMode, setDarkMode] = useState(true);
  const winner = calculateWinner(squares);
  let status;
  let loser;
  let linkedin;
  let github;
  let instructLineOne;
  let instructLineTwo;
  let instructLineThree;
  let instructLineFour;
  let bufficornBrigade;

  function handleClick(i) {
    // <!----------------------------- handleClick()
    if (squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (XisNext) {
      nextSquares[i] = "🦬";
    } else {
      nextSquares[i] = "🦙";
    }
    setSquares(nextSquares);
    setXisNext(!XisNext);
  } // <!--------------------------------------------------- handleClick()

  if (winner) {
    status = winner + winner + winner + "'s Win!";
    loser = (XisNext ? "🦬" : "🦙") + (XisNext ? "🦬" : "🦙") + "'s SUCK!";
    instructLineOne = "Thank you for testing my";
    instructLineTwo = "game! Please hit browser";
    instructLineThree = "refresh button play 🦬's ";
    instructLineFour = "vs 🦙's again and again!";
    linkedin = (XisNext ? "🧑🏽‍💻 Let's hang out and BUIDL" : "linkedin.com/in/frankenmiller");
    github = (XisNext ? "https://github.com/frankenmiller" : "🧑🏽‍💻 I want to be on your team!")    
  } else {
    status = "Next player: " + (XisNext ? "🦬" : "🦙");
    loser = "FIGHT! FIGHT!";
    instructLineOne = "Take turns clicking on";
    instructLineTwo = "squares. The 1st player";
    instructLineThree = "to get all 3-in-a-row will";
    instructLineFour = "be declared the winner!";
    linkedin = (XisNext ? "I want to be on your team!" : "linkedin.com/in/frankenmiller");
    github = (XisNext ? "https://github.com/frankenmiller" : "Let's build cool things together")
  }
  if (winner) {
    if (calculateWinner(squares) === "🦬") {
      bufficornBrigade = "👏🏽 👏🏽 Buffaloes Win! 👏🏽 👏🏽";
    } else if (calculateWinner(squares) === "🦙") {
      bufficornBrigade = "👏🏽👏🏽👏🏽 llamas Win! 👏🏽👏🏽👏🏽";
    }
  } else {
    bufficornBrigade = "🦬 Buffaloes vs llamas 🦙";
  }

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <div className="container">
        <span id="sunandmoon">☀️</span>
        <div className="switch-checkbox">
        <label className="switch">
        <input type="checkbox" 
        onChange={() => setDarkMode(!darkMode)}
        />
        <span className="slider round"> </span>
        </label>
        </div>
        <span id="sunandmoon">🌓</span>
        
      </div >         
      <p className={darkMode ? "dark-mode" : "light-mode"}>
        Frankenmiller's Tic-Tac-Toe game
        <br />
        Created January 2023 in ReactJS
      </p>
      <p className={darkMode ? "bufficorns light-mode" : "bufficorns dark-mode"}>🦬 Buffaloes vs llamas 🦙</p>
      <div className={darkMode ? "gamebox light-mode" : "gamebox dark-mode"}>
        <div className={darkMode ? "status light-mode" : "status dark-mode"}>{status}</div>
        <div className={darkMode ? "loser_box light-mode" : "loser_box dark-mode"}>{loser}</div>
        <div className="instructions" id="line_one">
          {instructLineOne}
        </div>
        <div className="instructions" id="line_two">
          {instructLineTwo}
        </div>
        <div className="instructions" id="line_three">
          {instructLineThree}
        </div>
        <div className="instructions" id="line_four">
          {instructLineFour}
        </div>
        <div className={darkMode ? "board-row dark-mode" : "board-row light-mode"}>
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="board-row">
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="board-row">
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </div>
      <div className="footer">
        <div className={darkMode ? "social_links dark-mode" : "social_links light-mode"} id="linkedin">{linkedin}</div>
        <div className={darkMode ? "social_links dark-mode" : "social_links light-mode"} id="github">{github}</div>
      </div>     
    </div>
  );
} // <!------------------------------------------------------------- Board()

function calculateWinner(squares) {
  // <!------------------ calculateWinner()
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
} // <!---------------------------------------------------- calculateWinner()

