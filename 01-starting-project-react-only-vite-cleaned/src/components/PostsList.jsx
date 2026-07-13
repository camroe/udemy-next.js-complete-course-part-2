import Post from "./Post";
import styles from "./PostsList.module.css";
import NewPost from "./NewPost";

function PostsList({ posts }) {
    console.log(posts);
    return (
        <>
            <NewPost />
            <ul className={styles.posts}>
                {posts.map((post, index) => (
                    <Post key={index} author={post.author} body={post.body} />
                ))}
            </ul>
        </>
    );
}

export default PostsList;