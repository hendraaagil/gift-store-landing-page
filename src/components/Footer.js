import { Link } from 'react-scroll';

import facebook from '../assets/images/social/social-facebook.svg';
import twitter from '../assets/images/social/social-twitter.svg';
import instagram from '../assets/images/social/social-instagram.svg';
import youtube from '../assets/images/social/social-youtube.svg';
import pinterest from '../assets/images/social/social-pinterest.svg';
import styles from '../assets/styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.Navigation}>
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
      </div>
      <div className={styles.Social}>
        <a
          href="https://facebook.com/hendraaagil"
          target="_blank"
          rel="noreferrer"
        >
          <img src={facebook} alt="Social icon" />
        </a>
        <a
          href="https://twitter.com/hendraaagil"
          target="_blank"
          rel="noreferrer"
        >
          <img src={twitter} alt="Social icon" />
        </a>
        <a
          href="https://instagram.com/hendraaagil"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagram} alt="Social icon" />
        </a>
        <a
          href="https://www.youtube.com/channel/UCy44Cn1aBo3LYrZsh2gKGIA"
          target="_blank"
          rel="noreferrer"
        >
          <img src={youtube} alt="Social icon" />
        </a>
        <a
          href="https://id.pinterest.com/hendraaagil"
          target="_blank"
          rel="noreferrer"
        >
          <img src={pinterest} alt="Social icon" />
        </a>
      </div>
      <div>
        <span>&copy; 2020 by Hendra Agil</span>
      </div>
    </footer>
  );
};

export default Footer;
