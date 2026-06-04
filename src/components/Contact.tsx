import {
  FaGithub,
  FaLinkedinIn,
  FaDiscord,
  FaEnvelope,
} from "react-icons/fa6";

import "./Contact.scss";

const contacts = [
  {
    label: "GitHub",
    href: "https://github.com/pangolinshell",
    icon: <FaGithub />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/romann-belmer-368a09331/",
    icon: <FaLinkedinIn />,
  },
  {
    label: "Discord",
    href: "https://discordapp.com/users/370965854210359296",
    icon: <FaDiscord />,
  },
  
  {
    label: "Email",
    href: "mailto:romann.belmer@protonmail.com",
    icon: <FaEnvelope />,
  },
];

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-card">
        <h2>Contact</h2>

        <p>
          Want to talk about a project, cybersecurity, low-level programming or
          opportunities? You can reach me here.
        </p>

        <div className="contact-buttons">
          {contacts.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              className="contact-button"
              target={contact.href.startsWith("mailto:") ? "_self" : "_blank"}
              rel="noreferrer"
              aria-label={contact.label}
            >
              <span className="contact-icon">{contact.icon}</span>
              <span className="contact-label">{contact.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;