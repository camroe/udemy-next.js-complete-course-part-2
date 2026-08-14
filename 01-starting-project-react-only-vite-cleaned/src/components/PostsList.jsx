import Post from "./Post";
import styles from "./PostsList.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";
import { useState } from "react";
import MainHeader from "./MainHeader";

function PostsList({ posts, closeModalHandler, modalVisible }) {
    console.log(posts);
    const [postsList, setPostsList] = useState(posts);
    function setPostList(newPost) {
        setPostsList((prevPosts) => {
            return [newPost, ...prevPosts];
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
        <ul className={styles.posts}>
            {postsList.map((post, index) => (
                <Post key={index} author={post.author} body={post.body} />
            ))}
        </ul>
    </>
);
}

export default PostsList;