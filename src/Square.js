import React from 'react';


function Square(props) {
  return (
    <button className="square" key={props.key} onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default Square;
