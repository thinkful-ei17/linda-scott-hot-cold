import React from 'react';

export default function GameForm() {
  return (
    <form>
      <input type="text" name="userGuess" id="userGuess" className="text" maxLength="3" autoComplete="off" placeholder="Enter your Guess" required=""/>
      <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/> 
    </form>
  );
}

// style={opacity: 1;}