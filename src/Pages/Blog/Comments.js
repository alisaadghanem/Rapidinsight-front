import React from 'react';

const Comment = ({ user, text }) => {
  return (
    <div className="comment">
      <p><strong>{user}:</strong> {text}</p>
    </div>
  );
};

export default Comment;
    