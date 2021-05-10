import React, { useState, useContext } from 'react';

import NavStyles from './Nav.module.css';
import { Link } from 'react-router-dom';
import classes from 'classnames';
import { MyContext } from './../context/MyContext';
import BurgerIcon from './BurgerIcon';

function Nav() {
  const [menuToggle, setMenuToggle] = useState(false);
  const navStyle = {
    color: '#ffffff',
    textDecoration: 'none',
    fontSize: '22px',
  };

  const { rootState, logoutUser } = useContext(MyContext);
  const { isAuth } = rootState;

  if (!isAuth) {
    return (
      <nav>
        <div className={NavStyles.logo}></div>
        <ul
          className={
            menuToggle
              ? classes(NavStyles.open, NavStyles.navLinks)
              : NavStyles.navLinks
          }
        >
          <Link style={navStyle} to="/about">
            <li onClick={() => setMenuToggle(!menuToggle)}>O stronie</li>
          </Link>
          <Link style={navStyle} to="/contact">
            <li onClick={() => setMenuToggle(!menuToggle)}>Kontakt</li>
          </Link>

          <Link style={navStyle} to="/login">
            <li onClick={() => setMenuToggle(!menuToggle)}>Zaloguj</li>
          </Link>
        </ul>
        <BurgerIcon menuToggle={menuToggle} setMenuToggle={setMenuToggle} />
      </nav>
    );
  }
  return (
    <nav>
      <div className={NavStyles.logo}></div>
      <ul
        className={
          menuToggle
            ? classes(NavStyles.open, NavStyles.navLinks)
            : NavStyles.navLinks
        }
      >
        <Link style={navStyle} to="/weather">
          <li onClick={() => setMenuToggle(!menuToggle)}>Pogoda</li>
        </Link>
        <Link style={navStyle} to="/about">
          <li onClick={() => setMenuToggle(!menuToggle)}>O stronie</li>
        </Link>
        <Link style={navStyle} to="/contact">
          <li onClick={() => setMenuToggle(!menuToggle)}>Kontakt</li>
        </Link>
        <Link style={navStyle} to="/">
          <li
            onClick={() => {
              logoutUser();
              setMenuToggle(!menuToggle);
            }}
          >
            Wyloguj
          </li>
        </Link>
      </ul>
      <BurgerIcon menuToggle={menuToggle} setMenuToggle={setMenuToggle} />
    </nav>
  );
}

export default Nav;
