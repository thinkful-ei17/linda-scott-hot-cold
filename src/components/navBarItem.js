import React from 'react';

export default function NavItem(props) {
   const navItems = props.items.map((item, index) => 
          <li className="navbar-item" key={index}>
            <a href="#">{item}</a>
          </li>
   );
   return navItems;
  }