import classes from 'classnames';
import NavStyles from './Nav.module.css';

function Burger({ menuToggle, setMenuToggle }) {
  return (
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
  );
}

export default Burger;
