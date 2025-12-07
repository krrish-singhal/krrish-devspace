import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "krrishsinghal22@gmail.com",
      link: "mailto:krrishsinghal22@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "8265940243",
      link: "tel:+918265940243"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Hapur, Uttar Pradesh",
      link: "https://maps.app.goo.gl/g4LLkoYhQaCDQVbA8"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
            Let's Connect
          </h2>
          <p className="text-gray-300 text-lg">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 text-gray-300 hover:text-purple-400 transition-colors p-4 bg-gray-800 rounded-xl"
              >
                <div className="h-12 w-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <info.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{info.title}</h3>
                  <p className="text-gray-400">{info.value}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-gray-800 p-8 rounded-xl"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                placeholder="Your message"
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Send className="h-5 w-5" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
