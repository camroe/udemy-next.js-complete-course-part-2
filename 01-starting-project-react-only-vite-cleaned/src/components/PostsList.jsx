import Post from "./Post";
import styles from "./PostsList.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";
import { useState } from "react";
import MainHeader from "./MainHeader";

function PostsList({ posts, closeModalHandler, modalVisible }) {
    console.log(posts);
    const [changedAuthor, setAuthor] = useState('');
    const [changedText, setText] = useState('');


    function changedTextHandler(event) {
        setText(event.target.value);
        console.log(event.target.value);
    }
    function changedAuthorHandler(event) {
        setAuthor(event.target.value);
        console.log(event.target.value);
    }

    function selectBody(post, index) {
        if ((index === 0) && (changedText !== '')) {
            return (changedText)
        }
        return (post.body);
    }
    function selectAuthor(post, index) {
        if ((index === 0) && (changedAuthor !== '')) {
            return (changedAuthor)
        }
        return (post.author);
    }
    return (
        <>
            {modalVisible && (
                <Modal closeModalHandler={closeModalHandler}>
                    <NewPost
                        changedTextHandler={changedTextHandler}
                        changedAuthorHandler={changedAuthorHandler}
                    />
                </Modal>
            )}
            <ul className={styles.posts}>
                {posts.map((post, index) => (
                    <Post key={index} author={selectAuthor(post, index)} body={selectBody(post, index)} />
                ))}
            </ul>
        </>
    );
}

export default PostsList;