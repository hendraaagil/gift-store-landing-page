import { Link } from 'react-scroll';

import styles from '../../assets/styles/layouts/Card.module.css';

const Card = ({ title, imgSrc }) => {
  return (
    <div className={styles.Card}>
      <img src={imgSrc} alt={`${title} Illustration`} />
      <div>
        <h3>{title}</h3>
        <Link to="home" spy={true} smooth={true} offset={-70} duration={500}>
          See More ›
        </Link>
      </div>
    </div>
  );
};

export default Card;
