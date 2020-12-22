import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

import services from '../assets/data/services.json';
import styles from '../assets/styles/Service.module.css';
import Card from './layouts/Card';

const Service = ({ id }) => {
  return (
    <>
      <div className={styles.Service} id={id}>
        <motion.h2
          initial={{ x: -500 }}
          animate={{ x: 0 }}
          transition={{ type: 'spring' }}
        >
          Gifts For All Occasions
        </motion.h2>
        <motion.q
          initial={{ x: 500 }}
          animate={{ x: 0 }}
          transition={{ type: 'spring' }}
        >
          Try our web app to find the best gifts for all occasions
        </motion.q>
        <motion.div
          className={styles.Cards}
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ type: 'spring' }}
        >
          {services.map((service) => (
            <Card key={service.id} title={service.title} imgSrc={service.img} />
          ))}
        </motion.div>
      </div>
      <motion.div
        className={styles.Contact}
        initial={{ x: 1000 }}
        animate={{ x: 0 }}
        transition={{ type: 'spring' }}
      >
        <div className={styles.Left}>
          <h1>Ready to get started?</h1>
          <h2>Sign up or contact us</h2>
        </div>
        <div className={styles.Right}>
          <Link to="home" spy={true} smooth={true} offset={-70} duration={500}>
            Find gift now
          </Link>
          <Link to="home" spy={true} smooth={true} offset={-70} duration={500}>
            How it works
          </Link>
        </div>
      </motion.div>
    </>
  );
};

export default Service;
