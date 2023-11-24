import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import ContactData from './ContactData';
import { useDispatch } from 'react-redux'
import submitContactDetails from './redux/actions/actions.js'

function App() {

  const [displayData, setDisplayData] = useState(false);
  // const dispatch = useDispatch(); 
  const [comment, setComment] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    setComment(document.getElementById('comment').value);
    setEmail(document.getElementById('email').value);
    // dispatch(submitContactDetails({ comment, email }));
    // setDisplayData(true);
    try {

      const response = await fetch('http://localhost:3001/saveContactDetails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ comment: comment, email: email }),
      });

      if (response.ok) {
        setDisplayData(true);
      } else {
        console.error('Failed to submit data');
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
    
  };

  return (
      <div className="form-container">
        {!displayData ? (
        <form onSubmit={handleSubmit}>
          <h3>Want to learn more on React and Cypress? </h3>
          <h2>Contact Us</h2>
          <label htmlFor="comment">Your question or comment</label>
          <textarea name="comment" id="comment"></textarea>

          <label htmlFor="email">Email (optional)</label>
          <input type="email" name="email" id="email"/>

          <button type="submit" id="submitBtn">Submit</button>
        </form>
        ) : (
          <ContactData comment={comment} email={email}/>
        )}
      </div>
  );
}

export default App;
