import { useState } from 'react';
import './Experience.css';

const EXPERIENCES = {
  kengsob: {
    company: 'KengSob',
    role: 'Front-end / Back-end Developer',
    period: 'Sep 2023 – Jul 2024',
    stack: ['React', 'Next.js', 'Redux', 'Tailwind', 'MUI', 'Docker', 'Jenkins', 'AWS', 'Nginx', 'Route 53'],
    highlightTitle: '🚀 Highlights & Achievements',
    highlights: [
      'Enterprise-scale performance: Successfully handled 3,000–4,000 concurrent users during peak periods, with infrastructure designed to scale to 10,000+ users without downtime.',
      'End-to-end system ownership: Architected and implemented the entire frontend from scratch using React, Next.js, Redux, Tailwind, and MUI, integrated with backend APIs and payment systems.',
      'Production-grade reliability: Configured Docker, Jenkins, AWS, Nginx, Route 53, and SSL for automated deployments, secure environments, and seamless updates.',
      'Lightning-fast performance: Optimized using Lighthouse audits and caching strategies, cutting page load times dramatically for smooth user experience.',
      'Seamless device switching: Developed state management and local storage handling that allowed students to resume exams across multiple devices without losing progress.',
      'Search visibility: Applied SEO best practices, resulting in the platform ranking on Google within 6 months of launch, significantly increasing organic traffic and student adoption.',
      'Collaboration-driven design: Worked with designers via Figma for pixel-perfect UI and UX improvements; coordinated with backend engineers to deliver secure payment flows and complex API integrations.',
    ],
    impactTitle: '🎯 Impact',
    impact:
      'KengSob is now recognized as a trusted, large-scale exam preparation tool by students and institutions. Its combination of real exam simulation, scalability, and smooth user experience positions it as a benchmark in online testing platforms, demonstrating both technical excellence and user-focused design.',
  },
  hitachi: {
    company: 'Hitachi eBworx',
    role: 'Software Engineer',
    period: 'Aug 2022 – Aug 2023',
    stack: ['React', 'Jenkins', 'GitLab', 'Red Hat', 'Jira', 'Scrum'],
    highlightTitle: '🚀 Key Contributions & Projects',
    highlights: [
      'OCBC Loan Transaction System: Migrated a legacy loan management system into React-based micro frontends, enabling modular development and smoother long-term maintenance while ensuring zero disruption to existing services.',
      'CIMB Customer Service Platform: Collaborated with multi-country teams (Thailand, Malaysia, Indonesia) to build shared utilities and libraries, establishing project consistency across regions and improving development efficiency.',
      'Kasikornbank Solutions: Supported delivery of financial service modules by creating UI components and validating critical API integrations.',
      'Agile global teamwork: Participated in Scrum-based sprints, collaborating with international cross-functional teams via Jira and daily standups.',
      'Enterprise DevOps: Implemented CI/CD pipelines with Jenkins and GitLab, and deployed applications in Red Hat environments, ensuring reliability and security for mission-critical banking apps.',
      'Collaboration with backend teams: Tested payment functions, API endpoints, and bug fixes to maintain stability in high-stakes financial platforms.',
    ],
    impactTitle: '🎯 Impact',
    impact:
      'By modernizing legacy systems and contributing to new digital banking platforms, I helped deliver secure, scalable, and efficient financial solutions that supported the operations of leading banks in Asia. This experience strengthened my expertise in enterprise software development, React architecture, and large-scale Agile collaboration.',
  },
  freelance: {
    company: 'Freelance',
    role: 'Freelance Developer',
    period: 'May 2020 – Sep 2021',
    stack: ['Next.js', 'React', 'Node.js', 'Tailwind', 'Flutter', 'Python'],
    highlightTitle: 'Projects',
    highlights: [
      'Built web and mobile applications for small businesses and individual clients using Next.js, React, Node.js, Tailwind, Flutter, and Python.',
      'Implemented real-time chat, student check-in/out systems, and notification features.',
    ],
    impactTitle: '',
    impact: '',
  },
};

function Experience() {
  const [active, setActive] = useState('kengsob');
  const exp = EXPERIENCES[active];

  return (
    <section>
      <h2>Experience</h2>
      <div className="tabs">
        {Object.keys(EXPERIENCES).map((key) => (
          <button
            key={key}
            className={`tab-button ${key === active ? 'active' : ''}`}
            onClick={() => setActive(key)}
          >
            {EXPERIENCES[key].company}
          </button>
        ))}
      </div>
      <div className="job card">
        <h3>
          {exp.role} — {exp.company}
        </h3>
        <p className="meta">{exp.period}</p>
        <h4>Tech Stack</h4>
        <div className="stack-list">
          {exp.stack.map((item) => (
            <span className="stack-item" key={item}>
              {item}
            </span>
          ))}
        </div>
        <h4>{exp.highlightTitle}</h4>
        <ul>
          {exp.highlights.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        {exp.impact && (
          <>
            <h4>{exp.impactTitle}</h4>
            <p>{exp.impact}</p>
          </>
        )}
      </div>
    </section>
  );
}

export default Experience;
