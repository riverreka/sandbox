import { useState } from "react";
import "./contact.scss";

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/leo-wieling-A41RDv4xoMI-unsplash.jpg" alt="" />
      </div>
      <div className="right">
        <h2>Message me</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Your email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thank you!</span>}
        </form>
      </div>
    </div>
  );
}
