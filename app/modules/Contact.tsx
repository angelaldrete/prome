import React from "react";

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact__content">
        <div className="contact__title">Contact</div>

        <div className="contact__description">
          <p>
            If you want to get in touch with me, you can reach me out filling
            the form below.
          </p>
        </div>
      </div>

      <div className="contact__form">
        <form action="https://formspree.io/f/moqyqyqz" method="POST">
          <div className="contact__form--group">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="contact__form--group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>
          <div className="contact__form--group">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              cols={30}
              rows={10}
            ></textarea>
          </div>
          <div className="contact__form--group">
            <input type="submit" value="Send" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
