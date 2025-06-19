import './App.css';

function App() {
  return (
    <div className="App">
      <header className="hero">
        <div className="overlay">
          <h1>Your Name</h1>
          <p>Software & Data Engineer | Python • React • SQL</p>
          <a className="resume-button" href="/resume.pdf" download>Download Resume</a>
        </div>
      </header>

      <section className="about">
        <h2>About Me</h2>
        <p>
          I'm a passionate software and data engineer with 2+ years of experience building web apps, APIs, and data pipelines.
          I love working with Python, SQL, and cloud technologies to solve real-world problems.
        </p>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        <ul>
          <li><strong>📁 Portfolio Website:</strong> Built with React, hosted on GitHub Pages</li>
          <li><strong>📊 Data Dashboard:</strong> Created using Python, Pandas, and Plotly</li>
          <li><strong>🌤️ Weather App:</strong> React app using OpenWeatherMap API</li>
        </ul>
      </section>

      <section className="contact">
        <h2>Contact Me</h2>
        <p>Email: your.email@example.com</p>
        <p>LinkedIn: <a href="https://linkedin.com/in/yourname" target="_blank" rel="noopener noreferrer">linkedin.com/in/yourname</a></p>
      </section>
    </div>
  );
}

export default App;
