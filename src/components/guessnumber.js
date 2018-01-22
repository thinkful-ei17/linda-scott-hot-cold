import React from 'react';

export default function GuessNumber(props) {
  const guessNumbers = props.numbers; //placeholder numbers

  const guessNumberList = guessNumbers.map((number,index) => (<li className="guess-number" key={index}>{number} </li>));
  return ( 
    guessNumberList
  );
}