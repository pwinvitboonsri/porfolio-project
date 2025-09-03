import './Home.css';

import { TechWithIcon } from '../techIcons';

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Learning skills for a better career</h1>
          <p className="subtitle">Bwinvit Boonsri — full-stack developer building useful digital products.</p>
          <div className="stats">
            <div className="card">
              <span>2+</span>
              <small>Years Experience</small>
            </div>
            <div className="card">
              <span>10+</span>
              <small>Projects</small>
            </div>
            <div className="card">
              <span>5+</span>
              <small>Technologies</small>
            </div>
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=500&q=60"
          alt="developer at work"
          className="hero-image"
        />
      </section>
      <section className="stack">
        <h2>Tech Stack</h2>
        <div className="stack-list">
          {[
            'React',
            'Next.js',
            'Redux',
            'Tailwind CSS',
            'MUI',
            'Node.js',
            'Docker',
            'Jenkins',
            'AWS',
            'Nginx',
            'Route 53',
          ].map((tech) => (
            <TechWithIcon key={tech} name={tech} />

          ))}
        </div>
      </section>
      <section className="projects">
        <h2>Popular Projects</h2>
        <div className="card-grid">
          <div className="card">
            <h3>Kenlogio Platform</h3>
            <p>Online exam system used by thousands of students.</p>
          </div>
          <div className="card">
            <h3>E-school Portal</h3>
            <p>Course purchasing and progress tracking.</p>
          </div>
          <div className="card">
            <h3>Freelance Apps</h3>
            <p>Real-time chat and student check-in systems.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
