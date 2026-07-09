import PostsList from "./components/PostsList";

function App() {
  const posts = [
    { author: "Cameron", body: "React is awesome" },
    { author: "Maximilian", body: "Check out the whole course" }
  ];
  return <main>
    <PostsList posts={posts} />
  </main>
};

export default App;
