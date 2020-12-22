import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

import background from '../assets/images/bg-1.webp';
import styles from '../assets/styles/Section1.module.css';

const Section1 = ({ id }) => {
  return (
    <section className={styles.Section_One} id={id}>
      <motion.div
        className={styles.Left}
        initial={{ x: -500 }}
        animate={{ x: 0 }}
        transition={{ type: 'spring' }}
      >
        <h1>Find a gift for your wife or girlfriend</h1>
        <p>
          Struggling to find a gift for your wife or girlfriend? No problem!
        </p>
        <Link to="home" spy={true} smooth={true} offset={-70} duration={500}>
          Find gift now
        </Link>
      </motion.div>
      <motion.div
        className={styles.Right}
        initial={{ x: 1000 }}
        animate={{ x: 0 }}
        transition={{ type: 'spring' }}
      >
        <img src={background} alt="Background Section 1" />
      </motion.div>
    </section>
  );
};

export default Section1;
