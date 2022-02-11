import "./contact.scss";
import Navarrow from '../navarrow/Navarrow';
import { useState, useRef } from "react";
import emailjs from 'emailjs-com';

export default function Contact() {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_b0l6wib', 'template_8vzudq8', form.current, 'user_JVijpL4HJSwYkGWX4BaZp')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      document.getElementById("thanks").style.display = "inherit";
      e.target.reset()
  };

  const handleReset = (e) => {
    setTimeout(() => {document.getElementById("thanks").style.display = "none";}, 5000);
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/leo-wieling-A41RDv4xoMI-unsplash.jpg" alt="" />
      </div>
      <div className="right">
        <h2>Message me</h2>
        <form ref={form} onSubmit={handleSubmit} onReset={handleReset}>
          <input type="email" placeholder="Your email" name="from_name" />
          <textarea placeholder="Message" name="message"></textarea>
          <button type="submit">Send</button>
          <span id="thanks">Thank you!</span>
        </form>
      </div>
      <Navarrow next="#intro" />
    </div>
  );
}
