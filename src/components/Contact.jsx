import { Mail, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
            <Link to="./ContactPage.jsx">Get In Touch</Link>
          </h2>
          <p className="text-gray-300 text-sm max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Let's connect and create something amazing together!
          </p>
        </div>

        <div className="flex justify-center">
          <Link
            to="./contact"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 group text-white"
          >
            <Mail className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
            Contact Me
            <ExternalLink className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Contact;
