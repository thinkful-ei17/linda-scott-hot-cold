import React from 'react';
import NavItem from './navBarItem';

export default function NavBar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list clearfix">
       < NavItem items={["what?", "+ new game"]}/>
      </ul>
    </nav> 
  );
}