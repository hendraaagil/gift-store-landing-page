import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

import { ReactComponent as Facebook } from '../assets/images/social/social-facebook.svg';
import { ReactComponent as Twitter } from '../assets/images/social/social-twitter.svg';
import { ReactComponent as Instagram } from '../assets/images/social/social-instagram.svg';
import { ReactComponent as Youtube } from '../assets/images/social/social-youtube.svg';
import { ReactComponent as Pinterest } from '../assets/images/social/social-pinterest.svg';
import styles from '../assets/styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <motion.div
        className={styles.Navigation}
        initial={{ x: -500 }}
        animate={{ x: 0 }}
        transition={{ type: 'spring' }}
      >
        <Link to="home" spy={true} smooth={true} offset={-70} duration={500}>
          Home
        </Link>
        <Link to="about" spy={true} smooth={true} offset={-70} duration={500}>
          About
        </Link>
        <h1>logo</h1>
        <Link to="service" spy={true} smooth={true} offset={-70} duration={500}>
          Service
        </Link>
        <Link to="blogs" spy={true} smooth={true} offset={-70} duration={500}>
          Blog
        </Link>
      </motion.div>
      <motion.div
        className={styles.Social}
        initial={{ y: 500 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 50 }}
      >
        <a
          href="https://facebook.com/hendraaagil"
          target="_blank"
          rel="noreferrer"
        >
          <Facebook />
        </a>
        <a
          href="https://twitter.com/hendraaagil"
          target="_blank"
          rel="noreferrer"
        >
          <Twitter />
        </a>
        <a
          href="https://instagram.com/hendraaagil"
          target="_blank"
          rel="noreferrer"
        >
          <Instagram />
        </a>
        <a
          href="https://www.youtube.com/channel/UCy44Cn1aBo3LYrZsh2gKGIA"
          target="_blank"
          rel="noreferrer"
        >
          <Youtube />
        </a>
        <a
          href="https://id.pinterest.com/hendraaagil"
          target="_blank"
          rel="noreferrer"
        >
          <Pinterest />
        </a>
      </motion.div>
      <motion.div
        className={styles.Attribute}
        initial={{ y: 200 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 50 }}
      >
        <span>
          &copy; 2020 by Hendra Agil. Show project on{' '}
          <a
            href="https://github.com/hendraaagil/gift-store-landing-page"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-github"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
        </span>
        <span>
          Designed by{' '}
          <a
            href="https://dribbble.com/ScratchCoders"
            target="_blank"
            rel="noreferrer"
          >
            Mohammad Ali
          </a>
        </span>
      </motion.div>
    </footer>
  );
};

export default Footer;
