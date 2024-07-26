import "./Contact.css";

import { contacts } from "../../data/constants";

const Contact = () => {
  return (
    <div className="contact-container" id="contact">
      <div className="contact-wrapper">
        <div className="contact-title">Contacts </div>
        <div className="contact-desc">My contact information</div>
        <div className="contact-content">
          {contacts.map((contacts, index) => (
            <div className="contact-card" key={index}>
              <div className="contact-item" key={index}>
                <a href="" className="flex gap-4">
                  <img
                    className="contact-image"
                    src={contacts.logo}
                    alt={contacts.content}
                  />
                  <span>{contacts.content}</span>
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
