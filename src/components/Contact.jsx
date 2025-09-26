import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted! (Static Demo)");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-gray-100 text-gray-900">
      <Header />
      <main className="w-full max-w-3xl mt-16 mb-16 px-4 py-6 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
        <p className="mb-8 text-center text-gray-600">
          Have questions or want to work with us?  
          Fill out the form and we’ll get back to you soon.
        </p>

        <form
          onSubmit={handleSubmit}
          className="w-full bg-white shadow-md rounded-lg p-6 space-y-4"
        >
          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-6 rounded-lg text-white font-bold bg-blue-600 hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
