import data from '../assets/data/services.json';
import styles from '../assets/styles/Service.module.css';
import Card from './layouts/Card';

const Service = ({ id }) => {
  return (
    <div className={styles.Service} id={id}>
      <h2>Gifts for all Occasions</h2>
      <q>Try our web app to find the best gifts for all occasions</q>
      <div className={styles.Cards}>
        {data.map((service) => (
          <Card key={service.id} title={service.title} imgSrc={service.img} />
        ))}
      </div>
    </div>
  );
};

export default Service;
