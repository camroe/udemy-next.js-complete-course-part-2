import PostsList from "./components/PostsList";
import { useState } from "react";
import MainHeader from "./components/MainHeader";
function App() {
  const [modalVisible, setModalVisible] = useState(false);

  const posts = [
    { author: "Cameron", body: "React is awesome" },
    { author: "Maximilian", body: "Check out the whole course" }
  ];

  function closeModalHandler() {
    setModalVisible(false);
  }
  function openModalHandler() {
    setModalVisible(true);
  }


  return (
    <>
      <MainHeader onCreatePost={openModalHandler} />
      <main>
        <PostsList posts={posts} 
        closeModalHandler={closeModalHandler} 
        modalVisible={modalVisible} />
      </main>
    </>
  );
}

export default App;
