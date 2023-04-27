import { useState } from 'react';

function CommentForm(props) {
  const [content, setContent] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${props.token}` },
      body: JSON.stringify({ content: content, post_code: props.postCode, user_code: props.userCode })
    };
    fetch('https://rahisisha-backend-3t0w.onrender.com/comments', requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        props.onCommentCreated(data);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Comment:
        <input type="text" value={content} onChange={e => setContent(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default CommentForm;




