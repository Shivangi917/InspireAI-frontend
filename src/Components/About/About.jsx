import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const About = () => {
  return (
    <div className="p-36 min-h-screen bg-slate-200 py-10 flex flex-col items-center space-y-10">

      {/* Feature 1: Left-aligned */}
      <div className="w-[50%] bg-white rounded-lg shadow-lg p-6 self-start">
        <h2 className="text-2xl font-semibold mb-4">Project Recommendations</h2>
        <p className="text-gray-700">
          Our platform uses advanced machine learning algorithms to analyze your project and provide constructive recommendations based on current market demands. This helps you tailor your project for better recognition and success.
        </p>
      </div>

      {/* Feature 2: Right-aligned */}
      <div className="w-[50%] bg-white rounded-lg shadow-lg p-6 self-end">
        <h2 className="text-2xl font-semibold mb-4">Tailored Feedback</h2>
        <p className="text-gray-700">
          Get personalized feedback on how you can improve your project. Whether it's refining your tech stack or focusing on a particular user demographic, our platform guides you through it all.
        </p>
      </div>

      {/* Feature 3: Left-aligned */}
      <div className="w-[50%] bg-white rounded-lg shadow-lg p-6 self-start">
        <h2 className="text-2xl font-semibold mb-4">Stay Ahead of Trends</h2>
        <p className="text-gray-700">
          By analyzing the latest industry trends, our platform provides you with suggestions that keep your project relevant, helping you stay ahead of the competition.
        </p>
      </div>

      {/* About Creator: Centered */}
      <div className="w-[40%] bg-white rounded-lg shadow-lg p-6 text-center">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-700">
          Hi! I’m Shivangi Shree, the creator of this website. I developed this platform to help individuals improve their projects by leveraging the power of machine learning and current trends. With a passion for technology, I hope to make the project development process smoother and more effective for everyone.
        </p>
      </div>

      {/* Social Media Links: Centered */}
      <div className="w-[40%] bg-white rounded-lg shadow-lg p-6 text-center">
        <h2 className="text-2xl font-semibold mb-4">Connect with Me</h2>
        <div className="flex justify-center space-x-8">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-3xl text-gray-700 hover:text-black" />
          </a>
          <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-3xl text-pink-600 hover:text-pink-800" />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-3xl text-blue-700 hover:text-blue-900" />
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-3xl text-blue-400 hover:text-blue-600" />
          </a>
        </div>
      </div>

    </div>
  );
};

export default About;
