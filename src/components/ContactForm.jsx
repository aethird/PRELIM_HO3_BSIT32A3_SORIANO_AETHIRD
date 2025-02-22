import { useState } from "react";

const ContactForm = () => {
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000); // Hide message after 3s
  };

  return (
    <div className="container">
      <h2 className="text-center">📞 Contact Us</h2>
      <p className="text-center">
        Get in touch with us for inquiries and support.
      </p>

      <form className="p-4 bg-light rounded shadow" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Your Name</label>
          <input type="text" className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Your Email</label>
          <input type="email" className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Your Message</label>
          <textarea className="form-control" rows="4" required></textarea>
        </div>
        <button type="submit" className="btn btn-primary w-100">
          📩 Submit
        </button>
      </form>

      {success && (
        <div className="alert alert-success mt-3 text-center">
          ✅ Your message has been sent successfully!
        </div>
      )}
    </div>
  );
};

export default ContactForm;
