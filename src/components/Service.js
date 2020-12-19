import { Fragment } from 'react';
import { Link } from 'react-scroll';

import data from '../assets/data/services.json';
import styles from '../assets/styles/Service.module.css';
import Card from './layouts/Card';

const Service = ({ id }) => {
  return (
    <Fragment>
      <div className={styles.Service} id={id}>
        <h2>Gifts for all Occasions</h2>
        <q>Try our web app to find the best gifts for all occasions</q>
        <div className={styles.Cards}>
          {data.map((service) => (
            <Card key={service.id} title={service.title} imgSrc={service.img} />
          ))}
        </div>
      </div>
      <div className={styles.Contact}>
        <div className={styles.Left}>
          <h1>Ready to get started?</h1>
          <h2>Sign up or contact us</h2>
        </div>
        <div className={styles.Right}>
          <Link to="/">Find gift now</Link>
          <Link to="/">How it works</Link>
        </div>
      </div>
    </Fragment>
  );
};

export default Service;
