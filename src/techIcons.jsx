/* eslint-disable react-refresh/only-export-components */
import {
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiMui,
  SiNodedotjs,
  SiDocker,
  SiJenkins,
  SiAmazonwebservices,
  SiNginx,
  SiAmazonroute53,
  SiGitlab,
  SiRedhat,
  SiJira,
  SiScrumalliance,
  SiFlutter,
  SiPython,
} from 'react-icons/si';

export const TECH_ICONS = {
  React: SiReact,
  'Next.js': SiNextdotjs,
  Redux: SiRedux,
  'Tailwind CSS': SiTailwindcss,
  Tailwind: SiTailwindcss,
  MUI: SiMui,
  'Node.js': SiNodedotjs,
  Docker: SiDocker,
  Jenkins: SiJenkins,
  AWS: SiAmazonwebservices,
  'Amazon Web Services': SiAmazonwebservices,
  Nginx: SiNginx,
  'Route 53': SiAmazonroute53,
  GitLab: SiGitlab,
  'Red Hat': SiRedhat,
  Jira: SiJira,
  Scrum: SiScrumalliance,
  Flutter: SiFlutter,
  Python: SiPython,
};

export function TechWithIcon({ name }) {
  const Icon = TECH_ICONS[name];
  return (
    <span className="stack-item">
      {Icon && <Icon className="tech-icon" />}
      {name}
    </span>
  );
}
