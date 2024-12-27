import "./Contact.css";
import { contacts } from "../../data/constants";

const Contact = () => {
  return (
    <div className="contact-container" id="contact">
      <div className="contact-wrapper">
        <div className="contact-title">Contacts</div>
        <div className="contact-desc">My contact information</div>
        <div className="contact-content">
          {contacts.map((contact, index) => (
            <div className="contact-card" key={index}>
              <div className="contact-item">
                <a href={contact.content} className="flex gap-4">
                  <img
                    className="contact-image"
                    src={contact.logo}
                    alt={contact.title}
                  />
                  <span>{contact.title}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
