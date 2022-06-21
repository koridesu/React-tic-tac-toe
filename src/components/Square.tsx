import React from 'react';

function Square(props: any) {
  return (
    <button className={props.style} onClick={() => props.clickHandler(props.index)}>
      {props.value}
    </button>
  );
}

export default Square;
