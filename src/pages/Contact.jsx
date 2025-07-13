import { useState } from 'react';
import axios from 'axios';
import '../styles/main.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

  
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      setError('Please fill out all fields.');
      return;
    }

    try {
     
      await axios.post('https://jsonplaceholder.typicode.com/posts', formData);
      setSubmitted(true);
      setError('');
    } catch (err) {
      setError('Something went wrong. Try again.');
    }
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>

      <div className="contact-container">
        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit">Send Message</button>

          {error && <p className="error-msg">{error}</p>}
          {submitted && (
            <p className="success-msg">Message sent successfully!</p>
          )}
        </form>

       
        <div className="contact-info">
          <h3>Clinic Details</h3>
          <p>
            <strong>Phone:</strong> +91 98765 43210
          </p>
          <p>
            <strong>Email:</strong> smile@dentalclinic.com
          </p>
          <p>
            <strong>Address:</strong> 123 Smile Street, Nagpur, Maharashtra
          </p>

          <h3>Find Us on Map</h3>
          <iframe
            title="clinic-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.3578126610353!2d79.07340117504695!3d21.145800184685217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c07f53627bd3%3A0xb2a891d4b4b3e5f0!2sNagpur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1720859096012"
            width="100%"
            height="220"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
