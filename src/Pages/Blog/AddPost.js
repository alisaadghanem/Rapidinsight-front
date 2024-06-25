import React, { useState } from "react";
import { MyButtonLg } from "../../Components/MyButtons/MyButtons";
import "./post.css";

const AddPost = ({ onAddPost }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === "" || content.trim() === "") {
      setError("Please enter both title and content.");
      return;
    }

    try {
      const newPost = {
        id: Date.now(),
        title: title.trim(),
        content: content.trim(),
        comments: [],
      };
      // Save to local storage
      const posts = JSON.parse(localStorage.getItem("posts")) || [];
      posts.push(newPost);
      localStorage.setItem("posts", JSON.stringify(posts));
      onAddPost(newPost);
      setTitle("");
      setContent("");
      setError("");
    } catch (error) {
      console.error("Error adding post:", error);
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="card mb-4 shadow-lg bg-light">
      <div className="card-body">
        <h1 className="card-title">Add New Post</h1>
        <form onSubmit={handleSubmit}>
          <div className="b-group">
            <input
              type="text"
              placeholder="Post title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="b-group">
            <textarea
              placeholder="Post content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>
          {error && <div className="alert alert-danger">{error}</div>}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "12px 0"
            }}
          >
            <MyButtonLg
              type="submit"
              className={`hero-btn`}
              style={{
                width: "150px",
                padding: "12px 0",
                background: "#565acf",
                textDecoration: "none",
                display: "block",
              }}
            >
              Add Post
            </MyButtonLg>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPost;
