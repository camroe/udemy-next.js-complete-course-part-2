import Post from "./Post";
import styles from "./PostsList.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";
import { useState } from "react";

function PostsList({ posts }) {
    console.log(posts);
    const [modalVisible, setModalVisible] = useState(true);
    const [changedText, setText] = useState('');
    const [changedAuthor, setAuthor] = useState('');

    function closeModalHandler() {
        setModalVisible(false);
    }
    function openModalHandler() {
        setModalVisible(true);
    }

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