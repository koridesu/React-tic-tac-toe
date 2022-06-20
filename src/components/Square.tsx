import React from 'react';

function Square(props: any) {
  return (
    <button className='btn' onClick={() => props.clickHandler(props.index)}>
      {props.value}
    </button>
  );
}

export default Square;
