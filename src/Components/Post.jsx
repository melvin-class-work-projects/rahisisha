
import React, { useState, useEffect } from 'react';
import Comments from './Comments';
//import jwt_decode from 'jwt-decode';
//mport jwt from 'jsonwebtoken';

function Post() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: '', media: '', description: '' });
  const token = localStorage.getItem('accessToken');
  localStorage.setItem('accessToken', 'eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoic2Vla2VyIiwidXNlcl9yZWYiOiJmYjd2LWoybXQtdm54eSIsImV4cCI6MTY4MjQyNjExOX0.djHIpRUNvqGBQ9FTSKrl99Gt39QP0GaEsrkbpeLTh5E');
  //const decodedToken = jwt.verify(token, 'eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoic2Vla2VyIiwidXNlcl9yZWYiOiJmYjd2LWoybXQtdm54eSIsImV4cCI6MTY4MjQyNjExOX0.djHIpRUNvqGBQ9FTSKrl99Gt39QP0GaEsrkbpeLTh5E');
  console.log(decodedToken);
  //const token = localStorage.getItem('accessToken');
  const user = jwt_decode(token);
  
  // You can now access the user information in the user object, e.g.
  console.log(user.role);
  useEffect(() => {
    fetch('http://localhost:3000/posts', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
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

    fetch('http://localhost:3000/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
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
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
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
    fetch(`http://localhost:3000/posts/${postCode}`, {
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
        { Array.isArray(posts) && posts.map(post => (
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
          </li>
        ))}
      </ul>

    </div>
  );
}


export default  Post;
