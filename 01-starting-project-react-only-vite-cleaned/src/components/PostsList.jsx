import Post from "./Post";
import styles from "./PostsList.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";
import { useEffect, useState } from "react";
import MainHeader from "./MainHeader";

function PostsList({ posts, closeModalHandler, modalVisible }) {
    const [postsList, setPostsList] = useState(posts);

    /*
     * Load the saved posts from the backend after the first render. useEffect
     * runs after React has rendered and committed this component; the empty
     * dependency array means this request is not repeated just because state
     * changes or the component renders again. (In development, Strict Mode
     * may run effects an extra time to help reveal unsafe side effects.)
     *
     * Keep the async work in fetchPosts rather than making the effect callback
     * itself async: React expects that callback to return nothing or a cleanup
     * function, not a Promise. Once the response is parsed, setPostsList saves
     * the server data in state, which triggers a render with the loaded posts.
     */
    useEffect(() => {
        async function fetchPosts() {
            const response = await fetch("http://localhost:8080/posts");
            const data = await response.json();
            // console.log(data);
            setPostsList(data.posts);
        }
        fetchPosts();
        // console.log(postsList);

    }, []);

    /* Send the new post to the backend and prepend it to the current list. */
    function setPostList(newPost) {
        fetch("http://localhost:8080/posts", {

            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPost),
        });
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