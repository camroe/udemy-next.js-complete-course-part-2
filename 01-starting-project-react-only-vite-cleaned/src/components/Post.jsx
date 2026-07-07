// function Post(props) {
// console.log (props.author, props.body);
// }
import styles from "./Post.module.css";

function Post({ author, body }) {
  console.log(author, body);
  return (
    <div className={styles.post}>
      <p className={styles.author}>{author}</p>
      <p className={styles.text}>{body}</p>
    </div>
  );
}

export default Post;
