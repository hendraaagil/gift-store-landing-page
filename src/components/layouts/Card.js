import styles from '../../assets/styles/layouts/Card.module.css';

const Card = ({ title, imgSrc }) => {
  return (
    <div className={styles.Card}>
      <img src={imgSrc} alt={`${title} Illustration`} />
      <div>
        <h3>{title}</h3>
        <p>See More ›</p>
      </div>
    </div>
  );
};

export default Card;
