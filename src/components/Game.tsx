import React from 'react';
import Board from './Board';

function Game() {

     
      const squares = Array(9).fill(1);

      const onClick = () =>{
            
      }

      return (
            <div>
                  <div className='game-board'>
                        <Board squares = {squares} onClick = {onClick}></Board>
                  </div>
                  <div className='game-info'>
                        <div>
                              
                        </div>
                        <div>
                              
                        </div>
                  </div>
            </div>
           
      );
}

export default Game