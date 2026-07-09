import Post from "./Post";
import styles from "./PostsList.module.css";
function PostsList({ posts }) {
    console.log(posts);
    return (
        <ul className={styles.posts}>
            {posts.map((post, index) => (
                <Post key={index} author={post.author} body={post.body} />
            ))}
        </ul>
    );
}

export default PostsList;