import { Fragment, useState } from 'react';
import { Link } from 'react-scroll';
import { Spin as Hamburger } from 'hamburger-react';
import useMediaQuery from '../hooks/useMediaQuery';

import styles from '../assets/styles/Navbar.module.css';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const isPageWide = useMediaQuery('(min-width: 481px)');

  return (
    <Fragment>
      <nav className={styles.Navbar}>
        <h1 className={styles.Logo}>logo</h1>
        {isPageWide && (
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
        )}
        {isPageWide && (
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
        )}
        {!isPageWide && (
          <Hamburger
            size={28}
            color="#231f20"
            label="Show menu"
            toggled={open}
            toggle={setOpen}
            rounded
          />
        )}
      </nav>
      {open && <div style={{ paddingTop: '80px' }}>Ini Navigasi mobile</div>}
    </Fragment>
  );
};

export default Navbar;
