import React from 'react';

export default function GuessNumber() {
  const guessNumbers = [1, 4, 8]; //placeholder numbers

  const guessNumberList = guessNumbers.map((number,index) => (<li className="guess-number" key={index}>{number} </li>));
  return ( 
    guessNumberList
  );
}