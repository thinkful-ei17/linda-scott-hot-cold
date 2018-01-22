//sub-comp = status, input, button, count, display guesses

import React from 'react';
import GameForm from './gameform';
import GameCount from './gamecount';
import GuessList from './guesslist';

import './gamesection.css';

export default function GameSection() {
  return (
    <section className="game">
      <h2 id="feedback">WHAT AM I</h2>
      <GameForm />
      <GameCount count={0}/>
      <GuessList />
    </section>
  );
}