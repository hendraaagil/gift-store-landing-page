import styles from '../../assets/styles/layouts/Card.module.css';

const Card = ({ title, imgSrc }) => {
  return (
    <div className={styles.Card}>
      <img src={imgSrc} alt={`${title} Illustration`} />
      <h3>{title}</h3>
      <p>See More ›</p>
    </div>
  );
};

export default Card;
