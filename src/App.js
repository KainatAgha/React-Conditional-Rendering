import React, { useState } from 'react';
import './App.css'; // Import your CSS file for styling

function App() {
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    sector: 'Technology',
    linkedinHandle: 'john-doe-linkedin',
  };
  const url = `https://www.linkedin.com/in/${user.linkedinHandle}`;
  let element;

  if (user.linkedinHandle) {
    element = (
      <div className="link-container">
        <p>Hello, {user.name}!</p>
        <p>You are part of the {user.sector} sector.</p>
        <a href={url} className="linkedin-link">
          Connect with {user.name} on LinkedIn
        </a>
      </div>
    );
  } else {
    element = (
      <div className="no-link-message">
        <p>Hello, {user.name}!</p>
        <p>Unfortunately, there is no LinkedIn handle available for {user.name}.</p>
      </div>
    );
  }

  return (
    <div className="App">
      {element}
    </div>
  );
}

export default App;
