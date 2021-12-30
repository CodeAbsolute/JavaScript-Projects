import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import Post from "./Post";
import { db } from "../firebase";
const staticPosts = [
  {
    id: "1",
    username: "maheshgajakosh",
    userImg: "https://links.papareact.com/3ke",
    img: "https://links.papareact.com/3ke",
    caption: "Subscribe to my Channel guys!!",
  },
  {
    id: "2",
    username: "mahesh",
    userImg: "https://links.papareact.com/3ke",
    img: "https://links.papareact.com/3ke",
    caption: "Subscribe to my Channel guys!!",
  },
];

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          // const postData = [];
          // snapshot.forEach((doc) => {
          //   postData.push(doc.data());
          // });
          // // console.log(postData);
          setPosts(snapshot.docs);
          // setPosts(postData);
        }
      ),

    [db]
  );
  console.log(posts);
  return (
    <div>
      {/* {staticPosts.map((post) => {
        return (
          <>
            <Post
              key={post.id}
              id={post.id}
              username={post.username}
              userImg={post.userImg}
              img={post.img}
              caption={post.caption}
            />
          </>
        );
      })} */}

      {posts.map((post) => {
        return (
          <Post
            key={post.id}
            id={post.id}
            username={post.data().username}
            userImg={post.data().profileImg}
            img={post.data().image}
            caption={post.data().caption}
          />
        );
      })}
    </div>
  );
}

export default Posts;
