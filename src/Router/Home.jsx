import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../context/User_context";



function Home() {
  let {user} = useContext(UserContext);
  return (
    <div className="bg-black text-white">

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 md:px-20">
        <h1 className="text-4xl md:text-6xl font-bold text-amber-300 mb-4">
          Welcome to Niki - {user}
        </h1>
        <p className="text-gray-300 text-lg md:text-xl mb-8">
          Your favorite platform for amazing content and insights.
        </p>
        <Link
          to="/about"
          className="bg-amber-300 text-black px-6 py-3 rounded-full font-semibold hover:bg-amber-400 transition-colors duration-300"
        >
          Learn More
        </Link>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 md:px-20 bg-gray-900">
        <h2 className="text-3xl font-bold text-center text-amber-300 mb-12">
          What We Offer
        </h2>
        <div className="grid gap-10 md:grid-cols-3">
          {/* Feature 1 */}
          <div className="bg-gray-800 p-6 rounded-xl text-center hover:scale-105 transform transition-transform duration-300">
            <h3 className="text-xl font-semibold mb-3 text-amber-300">Quality Content</h3>
            <p className="text-gray-400">
              Access high-quality articles, tutorials, and insights curated just for you.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-gray-800 p-6 rounded-xl text-center hover:scale-105 transform transition-transform duration-300">
            <h3 className="text-xl font-semibold mb-3 text-amber-300">Community Support</h3>
            <p className="text-gray-400">
              Join a friendly community where learning and sharing ideas is easy.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-gray-800 p-6 rounded-xl text-center hover:scale-105 transform transition-transform duration-300">
            <h3 className="text-xl font-semibold mb-3 text-amber-300">Fast & Reliable</h3>
            <p className="text-gray-400">
              Enjoy a smooth experience with fast loading pages and responsive design.
            </p>
          </div>
        </div>
      </section>

      {/* Call-To-Action Section */}
      <section className="py-20 px-6 md:px-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-amber-300">
          Ready to get started?
        </h2>
        <p className="text-gray-300 mb-8">
          Join Niki today and explore amazing content designed to inspire you.
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

export default Home;
