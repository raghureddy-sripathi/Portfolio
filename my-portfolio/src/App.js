import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll('.scroll-section');

    function checkSections() {
      const triggerBottom = window.innerHeight * 0.85;

      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerBottom) {
          section.classList.add('animate');
        } else {
          section.classList.remove('animate');
        }
      });
    }

    window.addEventListener('scroll', checkSections);
    checkSections();

    return () => {
      window.removeEventListener('scroll', checkSections);
    };
  }, []);

  return (
    <div className="App">
      <header className="hero">
        <div className="overlay">
          <h1>Raghavender Reddy Sripathi</h1>
          <p>Software & Data Engineer | Python • C++ • SQL • Machine Learning</p>
          <a
          className="resume-button"
          href="https://raghureddy-sripathi.github.io/Portfolio/Raghavender_Reddy_sripathi_us2.pdf"
          target="_blank"
          rel="noopener noreferrer"
          >
          View Resume
          </a>

        </div>
      </header>

      <main>
        <section className="scroll-section" id="about-me" style={{ textAlign: 'center' }}>
          <h2>About Me</h2>
          <p>
            I am <strong>Raghavender Reddy Sripathi</strong>, a passionate and results-driven Software and Data Engineer
            with over 3 years of hands-on experience designing, developing, and optimizing software solutions and data
            pipelines. My expertise spans Python, C++, SQL, Java, and modern ETL processes, combined with a strong foundation
            in machine learning, cloud computing (AWS, Azure), and data visualization tools like Tableau and Power BI.
          </p>
          <p>
            I specialize in building scalable, efficient systems by leveraging microservices architecture, RESTful API
            development, and database optimization techniques. With a proven track record of improving system efficiency by
            up to 30%, I thrive in agile, collaborative environments where I can mentor junior developers and drive CI/CD
            pipeline implementations to accelerate deployment workflows and reduce downtime.
          </p>
          <p>
            My passion lies in turning complex data into actionable business insights through advanced analytics,
            automation, and exploratory data analysis. I am adept at managing large-scale datasets and implementing secure,
            robust data infrastructure using tools such as Apache Spark, Airflow, and AWS services. Additionally, I bring
            experience in containerization and orchestration technologies like Docker and Kubernetes to ensure seamless
            application scaling and reliability.
          </p>
          <p>
            With a Master of Science in Computer Science and diverse experience across multiple industries, I am eager to
            leverage my technical skills and innovative mindset to solve challenging problems, support data-driven
            decision-making, and contribute meaningfully to forward-thinking engineering teams.
          </p>
        </section>

        <section className="scroll-section" id="projects" style={{ textAlign: 'center' }}>
          <h2>Projects</h2>
          <ul>
            <li>🔍 <strong>Customer Segmentation and Lead Optimization:</strong> Utilized Python (Pandas, Scikit-learn) and SQL to analyze customer behavioral and demographic data, segmenting users into meaningful groups. This improved targeted marketing efforts and optimized lead generation, resulting in higher conversion rates.</li>
            <li>🔄 <strong>ETL Pipeline for Sales and Marketing Analytics:</strong> Developed and maintained robust ETL pipelines using Apache Spark and Apache Airflow that automated data ingestion, transformation, and processing for sales and marketing teams, enabling real-time analytics.</li>
            <li>📊 <strong>Financial Data Dashboard Development:</strong> Created an executive-level dashboard with SQL queries to visualize financial KPIs, aiding data-driven financial decisions.</li>
            <li>🧪 <strong>Automated Testing Framework:</strong> Built a testing framework with Selenium and Python, increasing test coverage and reducing manual testing time by 50%.</li>
            <li>📚 <strong>Information Retrieval System:</strong> Designed and implemented a text parsing, indexing, and retrieval engine based on TREC datasets, improving search efficiency and accuracy.</li>
            <li>🤖 <strong>Distributed Systems Research for IoT Robotics:</strong> Conducted research on enhancing training performance and robustness of distributed systems for IoT-enabled robotics applications.</li>
            <li>🎓 <strong>Learning Management System (LMS):</strong> Led the design and development of an LMS platform that organizes educational content and learning resources, integrating tracking and reporting features.</li>
            <li>🏥 <strong>Hospital Length of Stay Prediction:</strong> Developed machine learning models (Decision Trees, Random Forests, KNN, SVM, Logistic Regression) to predict patient hospital stays, assisting in resource optimization.</li>
          </ul>
        </section>

        <footer className="contact scroll-section" id="contact">
          <h2>Contact</h2>
          <p>📍  Texas, USA</p>
          <p>📞 +1 (940)-331-8374</p>
          <p>📧 <a href="mailto:Raghureddy170454@gmail.com">Raghureddy170454@gmail.com</a></p>
          <p>🔗 <a href="https://www.linkedin.com/in/raghavender-reddy-sripathi-262b00203" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/raghavender-reddy-sripathi-262b00203
          </a></p>
        </footer>
      </main>
    </div>
  );
}

export default App;



