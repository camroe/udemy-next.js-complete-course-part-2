// function Post(props) {
// console.log (props.author, props.body);
// }
function Post({ author, body }) {
  console.log(author, body);
  return (
    <div>
      <p>{author}</p>
      <p>{body}</p>
    </div>
  );
}

export default Post;
