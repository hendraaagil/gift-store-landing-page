import { Fragment, useState } from 'react';
import { Link } from 'react-scroll';
import { Spin as Hamburger } from 'hamburger-react';
import { motion } from 'framer-motion';
import useMediaQuery from '../hooks/useMediaQuery';

import styles from '../assets/styles/Navbar.module.css';
import Menu from './Menu';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const isPageWide = useMediaQuery('(min-width: 481px)');

  let menu = null;
  if (open && !isPageWide) {
    menu = <Menu />;
  }

  return (
    <Fragment>
      <motion.nav
        className={styles.Navbar}
        initial={{ y: -150 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring' }}
      >
        <h1 className={styles.Logo}>logo</h1>
        {isPageWide && (
          <ul className={styles.Link}>
            <li>
              <Link
                activeClass={styles.active}
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
                activeClass={styles.active}
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
                activeClass={styles.active}
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
                activeClass={styles.active}
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
      </motion.nav>
      {menu}
    </Fragment>
  );
};

export default Navbar;
