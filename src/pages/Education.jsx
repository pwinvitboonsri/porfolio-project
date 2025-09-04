import './Education.css';

function Education() {
  const schools = [
    {
      degree: 'B.Sc. in Computer Science',
      school: 'Kasetsart University',
      period: '2018 – 2022',
      details: 'Studied software engineering, algorithms, and web development.',
    },
  ];

  return (
    <section className="education-section">
      <h2>Education</h2>
      <ul className="education-list">
        {schools.map((ed, i) => (
          <li key={i} className="card education-item">
            <h3>{ed.degree}</h3>
            <p className="school">{ed.school}</p>
            <p className="period">{ed.period}</p>
            {ed.details && <p>{ed.details}</p>}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Education;
