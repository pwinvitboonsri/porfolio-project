// import './Contact.css';
// import {
//   FaPhoneAlt,
//   FaEnvelope,
//   FaLinkedin,
//   FaGithub,
//   FaMapMarkerAlt,
//   FaBriefcase,
//   FaFileDownload,
// } from 'react-icons/fa';

// function Contact() {
//   const handleDownloadCV = () => {
//     const link = document.createElement('a');
//     link.href = '/CV.pdf';
//     link.download = 'CV.pdf';
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <section className="contact-section">
//       <h2>Contact</h2>
//       <div className="card contact-card">
//         <ul className="contact-list">
//           <li>
//             <FaPhoneAlt aria-hidden="true" />

//             <a href="tel:+66939699563">+66 95 959 9908</a>
//           </li>
//           <li>
//             <FaEnvelope aria-hidden="true" />
//             <a href="mailto:bwinsupport@gmail.com">pwinvitboonsri@gmail.com</a>

//           </li>
//           <li>
//             <FaLinkedin aria-hidden="true" />
//             <a href="https://www.linkedin.com/in/bwinvit" target="_blank" rel="noreferrer">
//               linkedin.com/in/bwinvit
//             </a>
//           </li>
//           <li>
//             <FaGithub aria-hidden="true" />
//             <a href="https://github.com/bwinvit" target="_blank" rel="noreferrer">
//               github.com/pwinvitboonsri
//             </a>
//           </li>
//           <li>
//             <FaMapMarkerAlt aria-hidden="true" />
//             <span>Bangkok, Thailand</span>
//           </li>
//           <li>
//             <FaBriefcase aria-hidden="true" />
//             <span>Open for opportunities</span>
//           </li>
//           <li>
//             <FaFileDownload aria-hidden="true" />
//             <button type="button" onClick={handleDownloadCV}>
//               Download CV
//             </button>
//           </li>
//         </ul>
//         <form className="contact-form">
//           <input type="text" placeholder="Your Name" />
//           <input type="email" placeholder="Your Email" />
//           <textarea placeholder="Your Message" rows="4"></textarea>
//           <button type="submit">Send Message</button>
//         </form>
//       </div>
//     </section>
//   );
// }

// export default Contact;

import './Contact.css';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
  FaBriefcase,
  FaFileDownload,
} from 'react-icons/fa';

function Contact() {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/CV.pdf';
    link.download = 'CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="contact-section">
=======

const PHONE_DISPLAY = '+66 95 959 9908';
const PHONE_TEL = '+66959599908';
const EMAIL = 'pwinvitboonsri@gmail.com';
const LINKEDIN = 'https://www.linkedin.com/in/bwinvit';
const GITHUB = 'https://github.com/pwinvitboonsri';

// Build a URL that respects Vite's base path without using new URL()
const base = (import.meta.env.BASE_URL || '/').replace(/\/+$/, '/'); // ensure one trailing slash
const cvUrl = `${base}CV.pdf`; // served from /public/CV.pdf

export default function Contact() {
  const handleDownloadCV = () => {
    const a = document.createElement('a');
    a.href = cvUrl;
    a.download = 'CV.pdf';
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  return (
    <section className="contact-section" id="contact">

      <h2>Contact</h2>

      <div className="card contact-card">
        <ul className="contact-list">
          <li>
            <FaPhoneAlt aria-hidden="true" />

            <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>

          </li>

          <li>
            <FaEnvelope aria-hidden="true" />
            <a href="mailto:bwinsupport@gmail.com">bwinsupport@gmail.com</a>

          </li>

          <li>
            <FaLinkedin aria-hidden="true" />
            <a href="https://www.linkedin.com/in/bwinvit" target="_blank" rel="noreferrer">

              linkedin.com/in/bwinvit
            </a>
          </li>

          <li>
            <FaGithub aria-hidden="true" />
            <a href="https://github.com/bwinvit" target="_blank" rel="noreferrer">
              github.com/bwinvit
            </a>
          </li>
          <li>
            <FaMapMarkerAlt aria-hidden="true" />
            <span>Bangkok, Thailand</span>
          </li>

          <li>
            <FaBriefcase aria-hidden="true" />
            <span>Open for opportunities</span>
          </li>

          <li>
            <FaFileDownload aria-hidden="true" />
            <button type="button" onClick={handleDownloadCV}>
              Download CV
            </button>

            {/* Or no JS needed:
               <a href={cvUrl} download="CV.pdf">Download CV</a> */}

          </li>
        </ul>

        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Your Name" name="name" />
          <input type="email" placeholder="Your Email" name="email" />
          <textarea placeholder="Your Message" rows="4" name="message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}
