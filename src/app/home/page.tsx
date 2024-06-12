import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">My Website</div>
          <ul className="flex space-x-4">
            <li><a href="#home" className="hover:text-gray-300">Home</a></li>
            <li><a href="#about" className="hover:text-gray-300">About</a></li>
            <li><a href="#services" className="hover:text-gray-300">Services</a></li>
            <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="flex-grow bg-gray-100 py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Welcome to My Website</h1>
          <p className="text-xl text-gray-600 mb-8">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
          <a href="#about" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">Learn More</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 My Website. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
