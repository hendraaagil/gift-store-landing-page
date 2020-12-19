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
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="service"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="blogs"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Blogs
          </Link>
        </li>
      </ul>
      <Link
        to="home"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className={styles.Button}
      >
        Gift Finder
      </Link>
    </nav>
  );
};

export default Navbar;
