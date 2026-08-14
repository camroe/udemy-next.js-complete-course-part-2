import classes from './NewPost.module.css';
import { useState } from 'react';

function NewPost({ onCancel, setPostList }) {
  const [changedAuthor, setAuthor] = useState('');
  const [changedText, setText] = useState('');


  function changedTextHandler(event) {
    setText(event.target.value);
  }
  function changedAuthorHandler(event) {
    setAuthor(event.target.value);
  }
  function submitHandler(event) {
    event.preventDefault();
    const post = {
      body: changedText,
      author: changedAuthor
    };
    setPostList(post);
    onCancel(); // Close the modal after submitting the post
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changedTextHandler} />
      </p>
      <p></p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={changedAuthorHandler} />
      </p>
      <p className={classes.actions}>
        <button className={classes.button}>Add Post</button>
        <button className={classes.button} type="button" onClick={onCancel}>Cancel</button>
      </p>
    </form>
  );
}

export default NewPost;