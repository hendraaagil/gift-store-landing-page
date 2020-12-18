import { Link } from 'react-scroll';

import background from '../assets/images/bg-2.png';
import styles from '../assets/styles/Section2.module.css';

const Section2 = ({ id }) => {
  return (
    <section className={styles.Section_Two} id={id}>
      <div className={styles.Right}>
        <img src={background} alt="Background Section 2" />
      </div>
      <div className={styles.Left}>
        <h2>How we work</h2>
        <p>
          We’ve actually already asked hundreds of women what they want, and
          made a database with the results. All you have to do is take our short
          survey that only takes seconds, and our proprietary algorithm will
          match you with a few perfect gift options.
        </p>
        <Link to="/">Learn More</Link>
      </div>
    </section>
  );
};

export default Section2;
