import React from 'react';
import Square from './Square';


interface Props{
      squares:any[],
      onClick:(i:number)=>any
}
const rows = Array(3).fill(null);

const columns = Array(3).fill(null);

function Board(props:Props) {
      return(     
      
            <div className='game'>
                        {
                              rows.map((value,i)=>{
                                    return <div key={i} className='row'>
                                    {
                                          columns.map((value,i)=>{
                                                return <Square key={i} value={props.squares[i]} 
                                                onClick={()=>{
                                                      props.onClick(i);
                                                }}
                                                ></Square>
                                          })
                                    }
                                    </div>
                              })
                        }

                

             
               
            </div>
      );
}

export default Board;