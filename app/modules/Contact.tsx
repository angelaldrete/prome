"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("xdoryyyp");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

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

      <div className="contact__form" id="contact">
        <form onSubmit={handleSubmit}>
          <div className="contact__form--group">
            <label htmlFor="firstName">First Name</label>
            <input type="text" name="firstName" id="firstName" />
            <ValidationError
              prefix="First Name"
              field="firstName"
              errors={state.errors}
            />
          </div>
          <div className="contact__form--group">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" name="lastName" id="lastName" />
            <ValidationError
              prefix="Last Name"
              field="lastName"
              errors={state.errors}
            />
          </div>
          <div className="contact__form--group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="contact__form--group">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              cols={30}
              rows={10}
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
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
