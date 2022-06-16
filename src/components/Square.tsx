import React from 'react';

function Square(props:any) {
      return (
            <button onClick={props.onClick()}>
                  {props.value}
            </button>
      );
}

export default Square;