import './Experience.css';

function Experience() {
  return (
    <section>
      <h2>Experience</h2>
      <div className="job">
        <h3>Front-end / Back-end Developer</h3>
        <p className="meta">Sep 2023 – Jul 2024 &bull; Kenlogio</p>
        <ul>
          <li>Developed "Kenlogio", an online platform with Pre-Test and Real-Time Exam features used by thousands of students.</li>
          <li>Implemented login and registration features, course purchasing, and progress tracking for an e-school portal.</li>
          <li>Created a dynamic exam timer and pages for pre-test and real-time exam modules.</li>
        </ul>
      </div>
      <div className="job">
        <h3>Freelance Developer</h3>
        <p className="meta">May 2020 – Sep 2021</p>
        <ul>
          <li>Built web and mobile applications for small businesses and individual clients using Next.js, React, Node.js, Tailwind, Flutter, and Python.</li>
          <li>Implemented real-time chat, student check-in/out systems, and notification features.</li>
        </ul>
      </div>
    </section>
  );
}

export default Experience;
