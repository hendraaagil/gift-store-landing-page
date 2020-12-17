import { Link } from 'react-scroll';

import background from '../assets/images/bg-1.png';
import styles from '../assets/styles/Section1.module.css';

const Section1 = ({ id }) => {
  return (
    <section className={styles.Section_One} id={id}>
      <div className={styles.Left}>
        <h1>Find a gift for your wife or girlfriend</h1>
        <p>
          Struggling to find a gift for your wife or girlfriend? No problem!
        </p>
        <Link to="/">Find gift now</Link>
      </div>
      <div className={styles.Right}>
        <img src={background} alt="Background Section 1" />
      </div>
    </section>
  );
};

export default Section1;
