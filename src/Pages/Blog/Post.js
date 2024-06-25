import React, { useState } from "react";
import { MyButtonLg } from "../../Components/MyButtons/MyButtons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./post.css";

const Post = ({ id, title, content, comments, onAddComment, onDeletePost }) => {
  const [commentText, setCommentText] = useState("");
  const [commentUser, setCommentUser] = useState("");

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (commentText.trim() === "" || commentUser.trim() === "") {
      return;
    }

    try {
      const newComment = { user: commentUser.trim(), text: commentText.trim() };
      onAddComment(id, newComment);
      setCommentText("");
      setCommentUser("");
    } catch (error) {
      console.error("Error adding comment:", error);
      // Handle error
    }
  };

  const handleDeletePost = () => {
    onDeletePost(id);
  };

  return (
    <div className="container d-flex justify-content-center">
      <div className="col-md-10 mb-4">
        <div className="card">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center">
              <h2 className="card-title">{title}</h2>
              <button onClick={handleDeletePost} className="btn btn-danger">
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
            <p className="card-text">{content}</p>
            <div className="b-group">
              <h5>Comments:</h5>
              {comments.map((comment, index) => (
                <div key={index} className="b-group">
                  <p>
                    <strong>{comment.user}:</strong> {comment.text}
                  </p>
                </div>
              ))}
              <form onSubmit={handleCommentSubmit}>
                <div className="b-group">
                  <input
                    type="text"
                    placeholder="Your name"
                    value={commentUser}
                    onChange={(e) => setCommentUser(e.target.value)}
                  />
                </div>
                <div className="b-group">
                  <textarea
                    placeholder="Your comment"
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                  ></textarea>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "12px 0",
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
                    Add Comment
                  </MyButtonLg>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
