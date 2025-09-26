import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/devraj-m-33984a231',
      label: 'LinkedIn',
      color: 'hover:text-blue-500'
    },
    {
      icon: Github,
      href: 'https://github.com/Devraj1612',
      label: 'GitHub',
      color: 'hover:text-gray-300'
    },
    {
      icon: Mail,
      href: 'mailto:devrajm865@gmail.com',
      label: 'Email',
      color: 'hover:text-red-500'
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 py-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Social Links */}
          <div className="flex justify-center space-x-8 mb-8">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group p-4 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 transition-all duration-300 hover:bg-white/20 hover:scale-110 hover:shadow-2xl ${link.color}`}
                aria-label={link.label}
              >
                <link.icon size={24} className="text-white group-hover:scale-110 transition-transform duration-300" />
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-gray-300">
            <p>© {currentYear} Devraj M. All rights reserved.</p>
            <div className="flex items-center gap-1">
              <span>Made with</span>
              <Heart size={16} className="text-red-500 animate-pulse" />
              <span>using React & TypeScript</span>
            </div>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;