
import React, { useState, useEffect } from 'react';
import Comments from './Comments';


function Post() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: '', media: '', description: '' });

  useEffect(() => {
    fetch('/posts', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
      .then(response => response.json())
      .then(posts => setPosts(posts));
  }, []);

  const handleNewPostChange = (event) => {
    setNewPost({ ...newPost, [event.target.name]: event.target.value });
  };

  const handleNewPostSubmit = (event) => {
    event.preventDefault();

    fetch('http://localhost:3001/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(newPost),
    })
      .then(response => response.json())
      .then(post => setPosts([...posts, post]));

    setNewPost({ title: '', media: '', description: '' });
  };

  const handlePostUpdate = (postCode, updatedPost) => {
    fetch(`http://127.0.0.1:3000//posts/${postCode}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(updatedPost),
    })
      .then(response => response.json())
      .then(updatedPost => {
        const index = posts.findIndex(post => post.post_code === postCode);
        setPosts([
          ...posts.slice(0, index),
          updatedPost,
          ...posts.slice(index + 1),
        ]);
      });
  };

  const handlePostDelete = (postCode) => {
    fetch(`http://127.0.0.1:3000//posts/${postCode}`, {
      method: 'DELETE',
    })
      .then(() => {
        const index = posts.findIndex(post => post.post_code === postCode);
        setPosts([
          ...posts.slice(0, index),
          ...posts.slice(index + 1),
        ]);
      });
  };

  return (
    <div>
      <h1>Posts</h1>
      <form onSubmit={handleNewPostSubmit}>
        <label>
          Title:
          <input type="text" name="title" value={newPost.title} onChange={handleNewPostChange} />
        </label>
        <label>
          Media:
          <input type="text" name="media" value={newPost.media} onChange={handleNewPostChange} />
        </label>
        <label>
          Description:
          <input type="text" name="description" value={newPost.description} onChange={handleNewPostChange} />
        </label>
        <button type="submit">Create Post</button>
      </form>
      <ul>
        {posts.map(post => (
      <li key={post.post_code}>
      <h2>{post.title}</h2>
      <p>{post.description}</p>
      <img src={post.media} alt={post.title} />
      <form onSubmit={(event) => {
        event.preventDefault();
        handlePostUpdate(post.post_code, { likes: post.likes + 1 });
      }}>
        <button type="submit">Like ({post.likes})</button>
      </form>
      <button onClick={() => handlePostDelete(post.post_code)}>Delete</button>
      <Comments postCode={post.post_code} />
    </li>
    
        ))}
      </ul>
<<<<<<< HEAD
      <Comments postCode={post.post_code} />
=======

>>>>>>> 3d1215c8ec68c4695108a623a06a8f85413e0a79
    </div>
  );
}


export default  Post;
