import { Fragment } from 'react';

import Navbar from '../Navbar';
import Section1 from '../Section1';
import Section2 from '../Section2';
import Service from '../Service';

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <Section1 id="home" />
      <Section2 id="about" />
      <Service id="service" />
    </Fragment>
  );
};

export default Home;
