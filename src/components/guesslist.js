import React from 'react';

import GuessNumber from './guessnumber';

export default function GuessList() {
  return (
    <ul id="guessList" className="guessBox clearfix">
    <GuessNumber />
    </ul> 
  );
}