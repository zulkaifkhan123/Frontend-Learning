import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="bg-black text-white min-h-screen px-6 md:px-20 py-12">

      {/* Hero Section */}
      <section className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-bold text-amber-300 mb-4">
          About Niki
        </h1>
        <p className="text-gray-400 text-lg md:text-xl">
          Learn more about our mission, vision, and the amazing work we do.
        </p>
      </section>

      {/* Our Mission */}
      <section className="mb-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-amber-300 mb-4 text-center">
          Our Mission
        </h2>
        <p className="text-gray-300 text-center text-lg">
          At Niki, our mission is to provide high-quality, engaging content that
          inspires learning, creativity, and personal growth. We strive to make
          knowledge accessible to everyone in a fun and interactive way.
        </p>
      </section>

      {/* Our Vision */}
      <section className="mb-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-amber-300 mb-4 text-center">
          Our Vision
        </h2>
        <p className="text-gray-300 text-center text-lg">
          We envision a world where knowledge is free, easily accessible, and
          encourages individuals to explore their full potential. Niki aims to
          be a platform where creativity meets learning.
        </p>
      </section>

      {/* Team Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-amber-300 mb-10 text-center">
          Our Team
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto text-center">
          {/* Team Member 1 */}
          <div className="bg-gray-900 p-6 rounded-xl hover:scale-105 transform transition-transform duration-300">
            <div className="h-32 w-32 bg-amber-300 mx-auto rounded-full mb-4"></div>
            <h3 className="text-xl font-semibold mb-2">Zulkaif Ahmad</h3>
            <p className="text-gray-400">Founder & Full-Stack Developer</p>
          </div>

          {/* Team Member 2 */}
          <div className="bg-gray-900 p-6 rounded-xl hover:scale-105 transform transition-transform duration-300">
            <div className="h-32 w-32 bg-amber-300 mx-auto rounded-full mb-4"></div>
            <h3 className="text-xl font-semibold mb-2">Jane Doe</h3>
            <p className="text-gray-400">Content Strategist</p>
          </div>

          {/* Team Member 3 */}
          <div className="bg-gray-900 p-6 rounded-xl hover:scale-105 transform transition-transform duration-300">
            <div className="h-32 w-32 bg-amber-300 mx-auto rounded-full mb-4"></div>
            <h3 className="text-xl font-semibold mb-2">John Smith</h3>
            <p className="text-gray-400">UI/UX Designer</p>
          </div>
        </div>
      </section>

      {/* Call-To-Action */}
      <section className="text-center mt-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-amber-300">
          Want to connect with us?
        </h2>
        <p className="text-gray-300 mb-8">
          Reach out for collaborations, inquiries, or just to say hello!
        </p>
        <Link
          to="/contact"
          className="bg-amber-300 text-black px-8 py-4 rounded-full font-semibold hover:bg-amber-400 transition-colors duration-300"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
}

export default About;
