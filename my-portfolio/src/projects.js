import React from 'react';
import { Link } from 'react-router-dom';

function Projects() {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <ul>
        <li><Link to="/projects/portfolio-website">📁 Portfolio Website</Link></li>
        <li><Link to="/projects/data-dashboard">📊 Data Dashboard</Link></li>
        <li><Link to="/projects/weather-app">🌤️ Weather App</Link></li>
      </ul>
    </section>
  );
}

export default Projects;


