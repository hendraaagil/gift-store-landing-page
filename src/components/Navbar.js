import { Link } from 'react-scroll';

import styles from '../assets/styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
      <h1 className={styles.Logo}>logo</h1>
      <ul className={styles.Link}>
        <li>
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li>
          <Link to="/">About Us</Link>
        </li>
        <li>
          <Link to="/">Services</Link>
        </li>
        <li>
          <Link to="/">Blogs</Link>
        </li>
      </ul>
      <Link to="/" className={styles.Button}>
        Gift Finder
      </Link>
    </nav>
  );
};

export default Navbar;
