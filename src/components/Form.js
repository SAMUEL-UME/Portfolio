import "./Form.css";

import React from "react";

const Form = () => {
  return (
    <div className="form">
      <form>
        <label htmlFor="name">Your name:</label>
        <input type="text" name="name" required />
        <label htmlFor="name">Email:</label>
        <input type="email" name="email" required />
        <label htmlFor="subject">Subject:</label>
        <input type="text" name="subject" required />
        <label htmlFor="message">Message:</label>
        <textarea
          name="message"
          rows="6"
          placeholder="Type your message"
        ></textarea>
        <button className="btn">submit</button>
      </form>
    </div>
  );
};

export default Form;
