import React from 'react';
import Square from './Square';

interface Props {
  squares: any[];
  clickHandler: (i: number) => any;
}

function Board(props: Props) {
  return (
    //     <div className='board'>
    //       {rows.map((value, i) => {
    //         return (
    //           <div key={i} className='row'>
    //             {columns.map((value, i) => {
    //               counter += 1;
    //               return (
    //                 <Square
    //                   key={counter}
    //                   value={props.squares[counter]}
    //                   index={counter}
    //                   clickHandler={props.clickHandler}
    //                 ></Square>
    //               );
    //             })}
    //           </div>
    //         );
    //       })}
    //       {(counter = 0)}
    //     </div>

    <div className='board'>
      <div className='row'>
        <Square
          value={props.squares[0]}
          index={0}
          clickHandler={props.clickHandler}
        />
        <Square
          value={props.squares[1]}
          index={1}
          clickHandler={props.clickHandler}
        />
        <Square
          value={props.squares[2]}
          index={2}
          clickHandler={props.clickHandler}
        />
      </div>
      <div className='row'>
        <Square
          value={props.squares[3]}
          index={3}
          clickHandler={props.clickHandler}
        />
        <Square
          value={props.squares[4]}
          index={4}
          clickHandler={props.clickHandler}
        />
        <Square
          value={props.squares[5]}
          index={5}
          clickHandler={props.clickHandler}
        />
      </div>
      <div className='row'>
        <Square
          value={props.squares[6]}
          index={6}
          clickHandler={props.clickHandler}
        />
        <Square
          value={props.squares[7]}
          index={7}
          clickHandler={props.clickHandler}
        />
        <Square
          value={props.squares[8]}
          index={8}
          clickHandler={props.clickHandler}
        />
      </div>
    </div>
  );
}

export default Board;
