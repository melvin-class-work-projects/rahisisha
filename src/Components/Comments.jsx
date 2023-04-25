import React, { useState, useEffect } from "react";
import { FaRegCommentAlt } from "react-icons/fa";

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

  const handleCreateComment = async (e) => {
    e.preventDefault();
    const comment = {
      content: content,
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
    setContent("");
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
        <button className="comment" onClick={() => handleCreateComment()}>
          <FaRegCommentAlt />
        </button>
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
      <form onSubmit={handleCreateComment}>
        <label>
          Content:
          <input type="text" value={content} onChange={(e) => setContent(e.target.value)} />
        </label>
        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
}

export default Comments;

