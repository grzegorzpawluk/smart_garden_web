import React, { useState } from 'react';

import NavStyles from './Nav.module.css';
import { Link } from 'react-router-dom';
import classes from 'classnames';

function Nav() {
  const [menuToggle, setMenuToggle] = useState(false);
  const navStyle = {
    color: 'white',
    textDecoration: 'none',
  };

  return (
    <nav>
      <div className={NavStyles.logo}>
        <Link style={navStyle} to="/">
          <h3>Logo</h3>
        </Link>
      </div>
      <ul
        className={
          menuToggle
            ? classes(NavStyles.open, NavStyles.navLinks)
            : NavStyles.navLinks
        }
      >
        <Link style={navStyle} to="/valves">
          <li onClick={() => setMenuToggle(!menuToggle)}>Zawory</li>
        </Link>
        <Link style={navStyle} to="/weather">
          <li onClick={() => setMenuToggle(!menuToggle)}>Pogoda</li>
        </Link>
        <Link style={navStyle} to="/settings">
          <li onClick={() => setMenuToggle(!menuToggle)}>Ustawienia</li>
        </Link>

        <Link style={navStyle} to="/about">
          <li onClick={() => setMenuToggle(!menuToggle)}>O stronie</li>
        </Link>
        <Link style={navStyle} to="/contact">
          <li onClick={() => setMenuToggle(!menuToggle)}>Kontakt</li>
        </Link>
      </ul>
      <div
        className={
          menuToggle
            ? classes(NavStyles.burger, NavStyles.toggle)
            : NavStyles.burger
        }
        onClick={() => {
          setMenuToggle(!menuToggle);
        }}
      >
        <div className={NavStyles.line1}></div>
        <div className={NavStyles.line2}></div>
        <div className={NavStyles.line3}></div>
      </div>
    </nav>
  );
}

export default Nav;
