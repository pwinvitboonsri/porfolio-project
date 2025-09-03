import './Contact.css';

function Contact() {
  return (
    <section>
      <h2>Contact</h2>
      <div className="card contact-card">
        <ul className="contact-list">
          <li>
            Phone: <a href="tel:+66939699563">+66 93 969 9563</a>
          </li>
          <li>
            Email: <a href="mailto:bwinsupport@gmail.com">bwinsupport@gmail.com</a>
          </li>
          <li>
            LinkedIn:{' '}
            <a href="https://www.linkedin.com/in/bwinvit" target="_blank" rel="noreferrer">
              linkedin.com/in/bwinvit
            </a>
          </li>
          <li>
            GitHub:{' '}
            <a href="https://github.com/bwinvit" target="_blank" rel="noreferrer">
              github.com/bwinvit
            </a>
          </li>
          <li>Address: Bangkok, Thailand</li>
          <li>Availability: Open for opportunities</li>
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
