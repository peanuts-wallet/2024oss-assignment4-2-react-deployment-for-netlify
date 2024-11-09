import React from 'react';

function App() {
  return (
    <div>
      <style>
        {`
          .app {
            font-family: Arial, sans-serif;
            text-align: center;
            padding: 20px;
            background-color: #f4f4f9;
          }

          .header {
            margin-bottom: 20px;
          }

          .header h1 {
            color: #333;
          }

          .about-me,
          .hobbies {
            margin: 20px 0;
          }

          h2 {
            color: #4a90e2;
          }

          p {
            color: #555;
            line-height: 1.6;
          }

          ul {
            list-style-type: none;
            padding: 0;
          }

          ul li {
            margin: 10px 0;
          }
        `}
      </style>

      <div className="app">
        <header className="header">
          <h1>Welcome to My Introduction Page</h1>
          <p>Hello! I'm excited to share a little about myself.</p>
        </header>

        <section className="about_me">
          <h2>About Me</h2>
          <p>
            My name is Sehyunkim
          </p>
        </section>

        <section className="hobbies">
          <h2>My Hobbies</h2>
          <ul>
            <li>📚 Reading books</li>
            <li>💻 Studing CSEE subjects</li>
          </ul>
        </section>

      </div>
    </div>
  );
}

export default App;
