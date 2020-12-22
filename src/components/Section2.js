import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

import background from '../assets/images/bg-2.webp';
import styles from '../assets/styles/Section2.module.css';

const Section2 = ({ id }) => {
  return (
    <section className={styles.Section_Two} id={id}>
      <motion.div
        className={styles.Left}
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        transition={{ type: 'spring' }}
      >
        <img src={background} alt="Background Section 2" />
      </motion.div>
      <motion.div
        className={styles.Right}
        initial={{ x: 500 }}
        animate={{ x: 0 }}
        transition={{ type: 'spring' }}
      >
        <h2>How we work</h2>
        <p>
          We’ve actually already asked hundreds of women what they want, and
          made a database with the results. All you have to do is take our short
          survey that only takes seconds, and our proprietary algorithm will
          match you with a few perfect gift options.
        </p>
        <Link to="home" spy={true} smooth={true} offset={-70} duration={500}>
          Learn More
        </Link>
      </motion.div>
    </section>
  );
};

export default Section2;
