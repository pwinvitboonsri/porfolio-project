import './Contact.css';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
  FaBriefcase,
} from 'react-icons/fa';

function Contact() {
  return (
    <section className="contact-section">
      <h2>Contact</h2>
      <div className="card contact-card">
        <ul className="contact-list">
          <li>
            <FaPhoneAlt aria-hidden="true" />
            <a href="tel:+66939699563">+66 93 969 9563</a>
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
        </ul>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message" rows="4"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
