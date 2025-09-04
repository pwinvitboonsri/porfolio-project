import './Education.css';

const education = [
  {
    id: 'tni-2022',
    title:
      'Bachelor of Engineering in Electrical Engineering (Electrical Power Engineering)',
    school: 'Thai-Nichi Institute of Technology',
    period: 'March 2022',
    details: '', // optional; leave empty or add text
  },
  {
    id: 'kulscerd-2018',
    title: 'High School of Science & Mathematics Program',
    school:
      'Kasetsart University Laboratory School Center for Educational Research and Development',
    period: 'March 2018',
  },
];

function Education() {
  return (
    <section className="education-section" id="education">
      <h2>Education</h2>
      <ul className="education-list">
        {education.map((ed) => (
          <li key={ed.id} className="card education-item">
            <h3>{ed.title}</h3>
            <p className="school">{ed.school}</p>
            <p className="period">{ed.period}</p>
            {ed.details ? <p>{ed.details}</p> : null}

          </li>
        ))}
      </ul>
    </section>
  );
}

export default Education;

