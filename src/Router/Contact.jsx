import React, { useState } from "react";
import { Link } from "react-router-dom";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    setSubmitted(true);

    // Reset form after submission
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-black text-white min-h-screen px-6 md:px-20 py-12 flex flex-col items-center">
      {/* Header */}
      <h1 className="text-4xl md:text-5xl font-bold text-amber-300 mb-4 text-center">
        Contact Us
      </h1>
      <p className="text-gray-400 text-center mb-10">
        We'd love to hear from you! Fill out the form below and we'll get back to you soon.
      </p>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-gray-900 p-8 rounded-xl shadow-lg"
      >
        {/* Name */}
        <label className="block mb-4">
          <span className="text-gray-300 font-medium">Name</span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-2 w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-amber-300 outline-none transition-colors"
            placeholder="Your Name"
          />
        </label>

        {/* Email */}
        <label className="block mb-4">
          <span className="text-gray-300 font-medium">Email</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-2 w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-amber-300 outline-none transition-colors"
            placeholder="you@example.com"
          />
        </label>

        {/* Message */}
        <label className="block mb-6">
          <span className="text-gray-300 font-medium">Message</span>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="mt-2 w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-amber-300 outline-none transition-colors"
            placeholder="Your message..."
          />
        </label>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-amber-300 text-black px-6 py-3 rounded-full font-semibold hover:bg-amber-400 transition-colors duration-300 w-full"
        >
          Send Message
        </button>

        {/* Success Message */}
        {submitted && (
          <p className="mt-4 text-green-400 text-center">
            Thank you! Your message has been sent.
          </p>
        )}
      </form>

      {/* Navigation Link Back to Home */}
      <div className="mt-8">
        <Link
          to="/"
          className="text-amber-300 hover:text-amber-400 font-medium transition-colors duration-300"
        >
          &larr; Back to Home
        </Link>
      </div>
    </div>
  );
}

export default Contact;
