import { Fragment } from 'react';

import Navbar from '../Navbar';
import Section1 from '../Section1';

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <Section1 id="home" />
    </Fragment>
  );
};

export default Home;
