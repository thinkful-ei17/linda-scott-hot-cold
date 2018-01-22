import React from 'react';

export default function GameCount(props) {
  return (
    <p>
      Guess #
      <span id="count">{props.count}</span>
      !
    </p> 
  );
}