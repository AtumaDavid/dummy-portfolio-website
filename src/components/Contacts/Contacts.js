import React from "react";
import "./Contacts.css";
import { AiOutlineMail } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";

const Contacts = () => {
  return (
    <section id="contacts">
      <h5 className="contacts__h5">Get in touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          {/* contact via email */}
          <article className="contact__option">
            <AiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>atumadavid35@gmail.com</h5>
            <a href="mailto:atumadavid35@gmail.com" target="_blank">
              Send an Email
            </a>
          </article>

          {/* contact via whatsapp */}
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+234</h5>
            <a
              href="https://api.whatsapp.com/send?phone=09134438062"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>

        <form action="">
          <input
            type="text"
            name="name"
            placeholder="Your full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" require />
          <textarea
            name="message"
            id=""
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contacts;
