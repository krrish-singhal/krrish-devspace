import { createElement } from "react";
import { FaEnvelope, FaGithub, FaHeart, FaLinkedinIn, FaTwitter, FaWhatsapp } from "react-icons/fa";

function Footer() {
  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/krrish-singhal",
      label: "GitHub",
    },
    {
      icon: FaLinkedinIn,
      href: "https://www.linkedin.com/in/krrish-singhal-4765b1302/",
      label: "LinkedIn",
    },
    { icon: FaTwitter, href: "https://x.com/krrish_sin48111", label: "Twitter" },
    { icon: FaEnvelope, href: "mailto:krrishsinghal22@gmail.com", label: "Email" },
    { icon: FaWhatsapp, href: "https://wa.me/918265940243", label: "WhatsApp" },
  ];

  return (
    <footer className="bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          {/* Social Links */}
          <div className="flex gap-6 mb-6">
            {socialLinks.map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 hover:bg-[#2973e4] rounded-xl flex items-center justify-center transition-all duration-300 group"
                aria-label={label}
              >
                {createElement(icon, {
                  className: "w-5 h-5 text-gray-300 group-hover:text-white transition-colors",
                })}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-400 text-sm">
            <p className="flex items-center justify-center gap-2">
              Made with <FaHeart className="w-4 h-4 text-red-500 fill-current" /> by Krrish Singhal
            </p>
            <p className="mt-2">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
