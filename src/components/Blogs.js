import { Link } from 'react-scroll';

import posts from '../assets/data/posts.json';
import blogImg from '../assets/images/blog.png';
import styles from '../assets/styles/Blogs.module.css';
import Post from './layouts/Post';

const Blogs = ({ id }) => {
  return (
    <div className={styles.Blogs} id={id}>
      <h1>Our Best Blogs Ever</h1>
      <q>Try our blog to find the best tips and tricks to select your gift</q>
      <div className={styles.Hero}>
        <img src={blogImg} alt="Couple of peoples" />
        <div>
          <span>Mr. John Doe</span>
          <h2>The best way to wish your wife</h2>
          <Link to="home" spy={true} smooth={true} offset={-70} duration={500}>
            Read More
          </Link>
        </div>
      </div>
      <div className={styles.Posts}>
        {posts.map((post) => (
          <Post key={post.id} title={post.title} content={post.content} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
