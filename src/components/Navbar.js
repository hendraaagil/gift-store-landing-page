import { Link, NavLink } from 'react-router-dom';

import styles from '../assets/styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
      <h1 className={styles.Logo}>logo</h1>
      <ul className={styles.Link}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/">About Us</NavLink>
        </li>
        <li>
          <NavLink to="/">Services</NavLink>
        </li>
        <li>
          <NavLink to="/">Blogs</NavLink>
        </li>
      </ul>
      <Link to="/" className={styles.Button}>
        Gift Finder
      </Link>
    </nav>
  );
};

export default Navbar;
