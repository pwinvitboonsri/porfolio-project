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
import { track } from '@vercel/analytics';

const PHONE_DISPLAY = '+66 95 959 9908';
const PHONE_TEL = '+66959599908';
const EMAIL = 'pwinvitboonsri@gmail.com';
const LINKEDIN = 'https://www.linkedin.com/in/bwinvit';
const GITHUB = 'https://github.com/pwinvitboonsri';

// Works locally and on Vercel (respects Vite base path)
const base = (import.meta.env.BASE_URL || '/').replace(/\/+$/, '/');
const cvUrl = `${base}CV.pdf`; // file must be at: /public/CV.pdf

export default function Contact() {
  const handleDownloadCV = () => {
    track('download_cv');
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
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </li>

          <li>
            <FaLinkedin aria-hidden="true" />
            <a href={LINKEDIN} target="_blank" rel="noreferrer">
              linkedin.com/in/bwinvit
            </a>
          </li>

          <li>
            <FaGithub aria-hidden="true" />
            <a href={GITHUB} target="_blank" rel="noreferrer">
              github.com/pwinvitboonsri
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
            {/* Or without JS:
                <a href={cvUrl} download="CV.pdf">Download CV</a> */}
          </li>
        </ul>

        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <input type="text" name="name" placeholder="Your Name" />
          <input type="email" name="email" placeholder="Your Email" />
          <textarea name="message" rows="4" placeholder="Your Message" />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}
