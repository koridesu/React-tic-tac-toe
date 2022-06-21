import React, { useEffect, useState } from 'react';
import Board from './Board';

// const reducer = (state: State, action: any) => {
//   switch (action.type) {
//     case 'MOVE':
//       return {
//         ...state,
//         history: state.history.concat({ squares: action.payload.squares }),
//         xIsNext: !state.xIsNext,
//       };
//     case 'JUMP':
//       return {
//         ...state,
//         xIsNext: action.payload.move % 2 === 0,
//         history: state.history.slice(0, action.payload.step + 1),
//       };

//     default:
//       return state;
//   }
// };

function Game() {
  //   const [state, dispatch] = useReducer(reducer, {
  //     xIsNext: true,
  //     history: [],
  //   });

  //   const { xIsNext, history } = state;

  //   const clickHandler = (index: number) => {
  //     let current = state.history[history.length - 1];

  //     //     const squares = current.squares.slice();
  //     let winner = calculateWinner();

  //     if (winner || squares[index]) return;
  //     console.log('index', index);

  //     squares[index] = xIsNext ? 'X' : 'O';
  //     dispatch({ type: 'MOVE', payload: { squares } });

  //     current = history[history.length - 1];
  //     winner = calculateWinner();

  //     console.log(squares);

  //     const moves = history.map((step, move) => {
  //       const desc = move ? 'Go to #' + move : 'Start the Game';

  //       return (
  //         <li key={move}>
  //           <button onClick={() => jumpTo(move)}>{desc}</button>
  //         </li>
  //       );
  //     });
  //   };

  //   const calculateWinner = () => {
  //     console.log('ge');
  //     return false;
  //   };

  //   const jumpTo = (move: number) => {
  //     dispatch({ type: 'JUMP', payload: { move } });
  //   };

  const [squares, setSquares] = useState(Array(9).fill(null));

  const [turn, setTurn] = useState(true);

  const [status, setStatus] = useState<string>('');

  const [style, setStyle] = useState('btn');

  useEffect(() => {
    let winner = calculateWinner();

    if (winner && winner !== 'Draw') setStatus('Winner is:' + winner);
    else setStatus(winner);
    console.log(winner);
    
    if(winner !== null){
      setStyle('lock-buttons')
    }
  }, [squares]);


  const clickHandler = (index: number) => {
    if (squares[index] || status !== null) {
      return;
    }

    setSquares((prev) => {
      return [
        ...prev.slice(0, index),
        turn ? 'X' : 'O',
        ...prev.slice(index + 1, prev.length),
      ];
    });
    //     setSquares(() => {
    //       let temp = [...squares];
    //       temp[index] = turn ? 'X' : 'O';
    //       return temp;
    //     });

    setTurn(!turn);
  };

  const calculateWinner = () => {
    const winnerLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    let isDraw = true;

    for (let i = 0; i < winnerLines.length; i++) {
      const [a, b, c] = winnerLines[i];
      if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c])
        return squares[a];

      if (!squares[a] || !squares[b] || !squares[c]) {
        isDraw = false;
      }
    }
    if (isDraw) {
      return 'Draw';
    }
    return null;
  };

  const startGame = () => {
    setSquares(Array(9).fill(null));
    setStatus('');
    setTurn(true);
    setStyle("btn");
  };

  return (
    <div className='game'>
      <div className='game-board'>
        <Board squares={squares} clickHandler={clickHandler} style = {style}></Board>
      </div>
      <div className='game-info'>
        <div>
          <button onClick={startGame}>Start Game</button>
          <p>{status}</p>
        </div>
      </div>
    </div>
  );
}

export default Game;
