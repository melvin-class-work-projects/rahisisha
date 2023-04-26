import React, { useState, useEffect } from "react";
import { FaRegCommentAlt } from "react-icons/fa";
import Comment from "./Comments";

function Comments({ postCode }) {
  const [comments, setComments] = useState([]);
  const [content, setContent] = useState("");

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    const response = await fetch(`http://localhost:3000/post_comments?post_code=${postCode}`);
    const data = await response.json();
    setComments(data);
  };

  const handleCreateComment = async (updatedData) => {
    const comment = {
      name: updatedData.name,
      content: updatedData.content,
      post_code: postCode,
    };
    const response = await fetch("http://localhost:3000/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comment),
    });
    const data = await response.json();
    setComments([...comments, data]);
  };

  const handleUpdateComment = async (id, updatedComment) => {
    const response = await fetch(`http://localhost:3000/comments/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedComment),
    });
    const data = await response.json();
    const updatedComments = comments.map((comment) => {
      if (comment.id === data.id) {
        return data;
      }
      return comment;
    });
    setComments(updatedComments);
  };

  const handleDeleteComment = async (id) => {
    await fetch(`http://localhost:3000/comments/${id}`, {
      method: "DELETE",
    });
    const updatedComments = comments.filter((comment) => comment.id !== id);
    setComments(updatedComments);
  };

  return (
    <div>
      <div className="buttons__comment-card">
        <Comment setComment={handleCreateComment} />
        <h5>Comment</h5>
      </div>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <p>{comment.content}</p>
            <button onClick={() => handleDeleteComment(comment.id)}>Delete</button>
            <button onClick={() => handleUpdateComment(comment.id, { content: "updated content" })}>
              Update
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Comments;



