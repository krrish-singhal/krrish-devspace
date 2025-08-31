import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  ExternalLink,
  Download,
  Apple as WhatsApp,
} from "lucide-react";
import { Link } from "react-router-dom";


function Footer() {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/krrish-singhal",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/krrish-singhal-4765b1302/",
      label: "LinkedIn",
    },
    { icon: Twitter, href: "https://x.com/krrish_sin48111", label: "Twitter" },
    { icon: Mail, href: "mailto:krrishsinghal62@gmail.com", label: "Email" },
    { icon: WhatsApp, href: "https://wa.me/8265940243", label: "WhatsApp" },
  ];

  return (
    <footer className="bg-gray-900 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Looking for my Resume?
            </h3>
            <p className="text-gray-400 mb-6">
              Download my resume to learn more about my experience, skills, and
              achievements. I'm always open to new opportunities and
              collaborations.
            </p>
            <a
              href="/Krrish_Resume.pdf"
              download="Krrish_Singhal_Resume.pdf"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 text-white"
            >
              <Download className="h-5 w-5 mr-2" />
              Download Resume
            </a>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex justify-center gap-6 mb-8">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-800 hover:bg-purple-600 transition-all duration-300 group"
                >
                  <Icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="text-center">
            <p className="text-gray-400 mb-4">
              Let's create something amazing together
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 text-white"
            >
              Get in Touch
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>

          <div className="mt-8 text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Krrish Singhal. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
