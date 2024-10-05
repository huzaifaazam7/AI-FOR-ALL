import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    fetch('http://localhost:4000/blogs', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      // history.go(-1)
      history.push('/');
    })
  }

  return (
    <div className="create">
      <h2>Add Your Remarks Here:</h2>
      <form onSubmit={handleSubmit}>
        <label>Ai simplified for all
        comment below:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Better Social Serach
        What's Your View:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Longer Vedios are in trending:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="mario">True</option>
          <option value="yoshi">False</option>
        </select>
        <button>Click Here</button>
      </form>
    </div>
  );
}
 
export default Create;
