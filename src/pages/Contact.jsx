const Contact = () => {
    return (
      <div className="container">
        <h1>📞 Contact</h1>
        <p>Get in touch with us for inquiries and support.</p>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    );
  };
  export default Contact;
  