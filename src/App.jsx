import './App.css';

function App() {
  return (
    <main className="container">
      <section className="hero" id="home">
        <h1>Bwinvit Boonsri</h1>
        <p>Full-Stack Developer</p>
        <a className="btn" href="#contact">Contact Me</a>
      </section>

      <section id="about">
        <h2>About Me</h2>
        <p>
          Adaptable and constantly learning Full-Stack Developer with 8 years of experience delivering
          scalable, high-quality web applications across several programming languages and frameworks. I
          have a strong background in both frontend and backend technologies and am proficient in database
          management with MongoDB, PostgreSQL, and Redis. I've successfully led cross-functional teams from
          ideation to deployment, resulting in tangible business growth and streamlined operations.
        </p>
      </section>

      <section id="experience">
        <h2>Experience</h2>
        <div className="job">
          <h3>Front-end / Back-end Developer</h3>
          <p className="meta">Sep 2023 – Jul 2024 &bull; Kenlogio</p>
          <ul>
            <li>
              Developed "Kenlogio", an online platform with Pre-Test and Real-Time Exam features used by
              thousands of students.
            </li>
            <li>
              Implemented login and registration features, course purchasing, and progress tracking for an
              e-school portal.
            </li>
            <li>Created a dynamic exam timer and pages for pre-test and real-time exam modules.</li>
          </ul>
        </div>
        <div className="job">
          <h3>Freelance Developer</h3>
          <p className="meta">May 2020 – Sep 2021</p>
          <ul>
            <li>
              Built web and mobile applications for small businesses and individual clients using Next.js,
              React, Node.js, Tailwind, Flutter, and Python.
            </li>
            <li>
              Implemented real-time chat, student check-in/out systems, and notification features.
            </li>
          </ul>
        </div>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <ul>
          <li>Phone: <a href="tel:+66939699563">+66 93 969 9563</a></li>
          <li>
            Email: <a href="mailto:bwinsupport@gmail.com">bwinsupport@gmail.com</a>
          </li>
        </ul>
      </section>
    </main>
  );
}

export default App;
