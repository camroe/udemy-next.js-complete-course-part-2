import Post from "./Post";
import styles from "./PostsList.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";
import { useState } from "react";
import MainHeader from "./MainHeader";

function PostsList({ posts, closeModalHandler, modalVisible }) {
    console.log(posts);
    const [postsList, setPostsList] = useState(posts);

    /* 
    The setPostList function is used to update the postsList state with a new post.
    (new state depends on old state)
    It prepends the new post to the existing list of posts.
    */
    function setPostList(newPost) {
        setPostsList((existingPosts) => {
            return [newPost, ...existingPosts];
        });
    }

    return (
        <>
            {modalVisible && (
                <Modal closeModalHandler={closeModalHandler}>
                    <NewPost
                        onCancel={closeModalHandler}
                        setPostList={setPostList}
                    />
                </Modal>
            )}
             {postsList.length === 0 && <p><h2>No Posts Available.</h2></p>}
             {
                postsList.length > 0 && (
                    <ul className={styles.posts}>
                        {postsList.map((post, index) => (
                            <Post key={index} author={post.author} body={post.body} />
                        ))}
                    </ul>
                )
            }
        </>
    );
}

export default PostsList;