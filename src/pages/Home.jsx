import './Home.css';

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Bwinvit Boonsri</h1>
          <p className="subtitle"><span style={{ fontStyle: "italic", fontWeight: "lighter"}}>full-stack</span> developer building useful digital products.</p>
          <div className="stats">
            <div className="card">
              <span style={{ marginRight: ".25rem"}}>4+</span>
              <small>Years Experience</small>
            </div>
            <div className="card">
              <span style={{ marginRight: ".25rem"}}>10+</span>
              <small>Projects</small>
            </div>
            <div className="card">
              <span style={{ marginRight: ".25rem"}}>5+</span>
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
      <section className="projects">
        <h2>Popular Projects</h2>
        <div className="card-grid">
          <div className="card">
            <h3>Kengsob Platform</h3>
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
