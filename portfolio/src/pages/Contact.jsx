import React from "react";
import "../styles/Contact.css";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("meogdlrp");

  if (state.succeeded) {
    return (
      <section className="contact success-message">
        <div className="success-container">
          <div className="success-icon">🎉</div>
          <h2>Thank You!</h2>
          <p>Your message has been successfully sent. I’ll get back to you as soon as possible.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="contact">
      <div className="contact-container">
        <h2>Contact Me</h2>
        <p>Interested in working together or have a question? Drop me a message!</p>
        <form onSubmit={handleSubmit} className="contact-form">
          <input id="name" type="text" name="name" placeholder="Your Name" required />
          <ValidationError prefix="Name" field="name" errors={state.errors} />

          <input id="email" type="email" name="email" placeholder="Your Email" required />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <textarea id="message" name="message" placeholder="Your Message" rows="5" required></textarea>
          <ValidationError prefix="Message" field="message" errors={state.errors} />

          <button type="submit" disabled={state.submitting}>
            {state.submitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
