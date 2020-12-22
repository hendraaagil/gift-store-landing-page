import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

import posts from '../assets/data/posts.json';
import blogImg from '../assets/images/blog.webp';
import styles from '../assets/styles/Blogs.module.css';
import Post from './layouts/Post';

const Blogs = ({ id }) => {
  return (
    <div className={styles.Blogs} id={id}>
      <motion.h2
        initial={{ x: -500 }}
        animate={{ x: 0 }}
        transition={{ type: 'spring' }}
      >
        Our Best Blogs Ever
      </motion.h2>
      <motion.q
        initial={{ x: 500 }}
        animate={{ x: 0 }}
        transition={{ type: 'spring' }}
      >
        Try our blog to find the best tips and tricks to select your gift
      </motion.q>
      <motion.div
        className={styles.Hero}
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        transition={{ type: 'spring' }}
      >
        <motion.img
          src={blogImg}
          alt="Couple of peoples"
          initial={{ x: -500 }}
          animate={{ x: 0 }}
          transition={{ type: 'spring' }}
        />
        <div>
          <span>Mr. John Doe</span>
          <h2>The best way to wish your wife</h2>
          <Link to="home" spy={true} smooth={true} offset={-70} duration={500}>
            Read More
          </Link>
        </div>
      </motion.div>
      <motion.div
        className={styles.Posts}
        initial={{ x: 1000 }}
        animate={{ x: 0 }}
        transition={{ type: 'spring' }}
      >
        {posts.map((post) => (
          <Post key={post.id} title={post.title} content={post.content} />
        ))}
      </motion.div>
    </div>
  );
};

export default Blogs;
