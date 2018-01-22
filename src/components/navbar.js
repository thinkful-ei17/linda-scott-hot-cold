import React from 'react';

export default function NavBar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <a className="what" href="#">What?</a>
        </li>
        <li className="navbar-item">
          <a className="newgame" href="#">New Game</a>
        </li>
      </ul>
    </nav> 
  );
}