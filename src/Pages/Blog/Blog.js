import React, { useState, useEffect } from "react";
import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Post from "./Post";
import AddPost from "./AddPost";
import { useTranslation } from "react-i18next";
import "./Blog.css";

const Blog = () => {
  const { t } = useTranslation();
  const [posts, setPosts] = useState([]);

  // Load posts from local storage on component mount
  useEffect(() => {
    const storedPosts = localStorage.getItem('posts');
    if (storedPosts) {
      setPosts(JSON.parse(storedPosts));
    }
  }, []);

  const addNewPost = (newPost) => {
    const updatedPosts = [...posts, newPost];
    setPosts(updatedPosts);
    // Save to local storage
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  };

  const addCommentToPost = (postId, comment) => {
    const updatedPosts = posts.map(post => {
      if (post.id === postId) {
        return { ...post, comments: [...post.comments, comment] };
      }
      return post;
    });
    setPosts(updatedPosts);
    // Update local storage
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  };

  const deletePost = (postId) => {
    const updatedPosts = posts.filter(post => post.id !== postId);
    setPosts(updatedPosts);
    // Update local storage
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  };

  return (
    <>
      <Header />
      <Banner page={t("blog t")} />
      <div className="container mt-4">
        <AddPost onAddPost={addNewPost} />
        <div className="row">
          {posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              title={post.title}
              content={post.content}
              comments={post.comments}
              onAddComment={addCommentToPost}
              onDeletePost={deletePost} // Pass deletePost function to Post component
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
