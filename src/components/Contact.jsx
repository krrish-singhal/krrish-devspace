import { useState, useEffect } from 'react';
import { Mail, MapPin, Send, Github, Linkedin, Twitter, Instagram, MessageCircle, X, CheckCircle, AlertCircle } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        setToast(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const showToast = (type, message) => {
    setToast({ type, message });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate email format
      if (!validateEmail(formData.email)) {
        showToast('error', 'Failed! Check email again');
        setIsSubmitting(false);
        return;
      }

      // Use EmailJS or similar service - for now using mailto as fallback
      // You can replace this with EmailJS integration later
      const mailtoLink = `mailto:krrishsinghal22@gmail.com?subject=${encodeURIComponent(
        `${formData.subject} - From ${formData.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;

      // Open email client
      window.location.href = mailtoLink;

      // Show success message
      showToast('success', 'Success! We have received your email. We will connect you shortly');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
    } catch (error) {
      console.error('Error sending email:', error);
      showToast('error', 'Failed! Check email again');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      {/* Toast Notification */}
      {toast && (
        <div className="fixed top-4 right-4 z-50 animate-slide-in">
          <div className={`flex items-center gap-3 px-6 py-4 rounded-xl shadow-2xl min-w-[300px] ${
            toast.type === 'success' 
              ? 'bg-gradient-to-r from-[#3cf26f] to-[#2dd15f] text-white' 
              : 'bg-gradient-to-r from-red-500 to-red-600 text-white'
          }`}>
            {toast.type === 'success' ? (
              <CheckCircle className="w-6 h-6 flex-shrink-0" />
            ) : (
              <AlertCircle className="w-6 h-6 flex-shrink-0" />
            )}
            <p className="font-medium flex-1">{toast.message}</p>
            <button
              onClick={() => setToast(null)}
              className="hover:bg-white/20 rounded-lg p-1 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Get In <span className="text-[#3cf26f]">Touch</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Info */}
          <div>
            <h3 className="text-3xl font-bold mb-6">Let's Start a Conversation</h3>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              I'm always interested in new opportunities, challenging projects, and innovative ideas. Whether you have a project in mind or just want to chat about technology, feel free to reach out!
            </p>

            {/* Contact Details */}
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-[#3cf26f] to-[#2dd15f] rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg mb-1">Email</h4>
                  <a href="mailto:krrishsinghal22@gmail.com" className="text-[#3cf26f] hover:underline">
                    krrishsinghal22@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-[#3cf26f] to-[#2dd15f] rounded-2xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg mb-1">Location</h4>
                  <p className="text-gray-600">Ghaziabad, India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-gray-900 text-lg mb-4">Follow Me</h4>
              <div className="flex gap-3">
                <a
                  href="https://github.com/krrish-singhal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-200 hover:bg-[#3cf26f] hover:text-white rounded-xl flex items-center justify-center transition-all duration-300"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/krrish-singhal-4765b1302/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-200 hover:bg-[#3cf26f] hover:text-white rounded-xl flex items-center justify-center transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-gray-700" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-200 hover:bg-gray-300 rounded-xl flex items-center justify-center transition-all duration-300"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5 text-gray-700" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-200 hover:bg-gray-300 rounded-xl flex items-center justify-center transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-gray-700" />
                </a>
                <a
                  href="https://wa.me/918265940243"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-200 hover:bg-[#25D366] hover:text-white rounded-xl flex items-center justify-center transition-all duration-300"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-5 h-5 text-gray-700" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-gray-50 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-6">Send me a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#2973e4] focus:ring-2 focus:ring-[#2973e4]/20 outline-none transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#2973e4] focus:ring-2 focus:ring-[#2973e4]/20 outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What's this about?"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#2973e4] focus:ring-2 focus:ring-[#2973e4]/20 outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#3cf26f] focus:ring-2 focus:ring-[#3cf26f]/20 outline-none transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#3cf26f] to-[#2dd15f] text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
