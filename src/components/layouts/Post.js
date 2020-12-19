import { Link } from 'react-scroll';

import styles from '../../assets/styles/layouts/Post.module.css';

const Post = ({ title, content }) => {
  return (
    <div className={styles.Post}>
      <h3>{title}</h3>
      <p>{content}</p>
      <Link to="home" spy={true} smooth={true} offset={-70} duration={500}>
        Read More
      </Link>
    </div>
  );
};

export default Post;
