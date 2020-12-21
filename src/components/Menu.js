import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

import styles from '../assets/styles/Menu.module.css';

const containerVariants = {
  hidden: {
    opacity: 0,
    y: '-100vh',
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      type: 'spring',
    },
  },
};

const Menu = () => {
  return (
    <motion.div
      className={styles.Menu}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <ul>
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
    </motion.div>
  );
};

export default Menu;
