import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon as HeartIconFilled,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";
import Moment from "react-moment";
import {
  HeartIcon,
  BookmarkIcon as BookMarkIconFilled,
} from "@heroicons/react/solid";
import {
  addDoc,
  deleteDoc,
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { useSession } from "next-auth/react";
import { db } from "../firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";

function Post({ id, username, userImg, img, caption }) {
  const { data: session } = useSession();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState([]);
  const [hasLiked, setHasLiked] = useState(false);
  const [showEmojis, setShowEmojis] = useState(false);

  // addEmoji function: accept an event and combines the input field with emoji
  const addEmoji = (e) => {
    let sym = e.unified.split("-");
    let codeArray = [];
    sym.forEach((element) => codeArray.push("0x" + element));
    let emoji = String.fromCodePoint(...codeArray);
    setComment(comment + emoji);
  };

  // comment feature: getting comments array from firebase
  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, "posts", id, "comments"),
          orderBy("timestamp", "desc")
        ),
        (snapshot) => setComments(snapshot.docs)
      ),
    [db]
  );
  // Like feature: getting likes array from firebase
  useEffect(
    () =>
      onSnapshot(
        collection(db, "posts", id, "likes"),

        (snapshot) => setLikes(snapshot.docs)
      ),
    [db, id]
  );

  //
  useEffect(() => {
    setHasLiked(
      likes.findIndex((like) => like.id === session?.user?.uid) !== -1
    );
  }, [likes]);

  const likePost = async () => {
    if (hasLiked) {
      await deleteDoc(doc(db, "posts", id, "likes", session.user?.uid));
    } else {
      await setDoc(doc(db, "posts", id, "likes", session.user.uid), {
        username: session.user.username,
      });
    }
  };
  console.log(hasLiked);
  const sendComment = async (e) => {
    e.preventDefault();
    const commentToSend = comment;
    setComment("");

    await addDoc(collection(db, "posts", id, "comments"), {
      comment: commentToSend,
      username: session.user.username,
      userImage: session.user.image,
      timestamp: serverTimestamp(),
    });
  };

  return (
    <div className="bg-white my-7 border rounded-sm">
      {/* Header */}
      <div className="flex items-center p-5">
        <img
          src={userImg}
          alt=""
          className="rounded-full h-12 w-12 object-contain border p-1 mr-3 "
        />
        <p className="flex-1 font-bold ">{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>
      {/* Img */}
      <img src={img} alt="" className="object-cover w-full " />
      {/* Buttons */}
      {session && (
        <div className="flex justify-between px-4 pt-4">
          <div className="flex space-x-4 ">
            {hasLiked ? (
              <HeartIcon onClick={likePost} className="btn text-red-500 " />
            ) : (
              <HeartIconFilled onClick={likePost} className="btn " />
            )}

            <ChatIcon className="btn" />
            <PaperAirplaneIcon className="btn rotate-45" />
          </div>
          <BookmarkIcon className="btn" />
        </div>
      )}
      {/* caption */}
      <p className="p-5 truncate">
        {likes.length > 0 && (
          <p className="font-bold mb-1">{likes.length} likes</p>
        )}
        <span className="font-bold mr-1">{username}</span> {caption}
      </p>
      {/* comments */}
      {comments.length > 0 && (
        <div className="ml-10 h-28 overflow-y-scroll scrollbar-thumb-black scrollbar-thin ">
          {comments.map((comment) => {
            return (
              <div
                key={comment.id}
                className="flex items-center space-x-2 mb-3 "
              >
                <img
                  src={comment.data().userImage}
                  alt=""
                  className="h-7 rounded-full"
                />
                <p>
                  {" "}
                  <span className="font-bold">{comment.data().username}</span>
                  {comment.data().comment}
                </p>
                <Moment interval={60000} fromNow>
                  {comment.data().timestamp?.toDate()}
                </Moment>
              </div>
            );
          })}
        </div>
      )}
      {/* input  */}
      {session && (
        <form action="" className="flex items-center p-4">
          {/* Emojis */}
          <EmojiHappyIcon
            className=" h-7"
            onClick={() => setShowEmojis(!showEmojis)}
          />
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Add a comment"
            className="border rounded-full mr-1 flex-1 focus:ring-0 outline-none"
          />
          <button
            disabled={!comment.trim()}
            onClick={sendComment}
            type="submit"
            className=" text-blue-400 font-semibold"
          >
            Post
          </button>
        </form>
      )}

      {showEmojis && (
        <Picker
          style={{ marginLeft: "20px" }}
          onSelect={addEmoji}
          theme="dark"
        />
      )}
    </div>
  );
}

export default Post;
