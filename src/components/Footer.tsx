import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Jaagruk Janta</h3>
            <p className="text-gray-300">Connecting Resources, People, and Solutions</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/resiliency" className="text-gray-300 hover:text-white">Resiliency Index</a></li>
              <li><a href="/resources" className="text-gray-300 hover:text-white">Resources</a></li>
              <li><a href="/education" className="text-gray-300 hover:text-white">Education Hub</a></li>
              <li><a href="/community" className="text-gray-300 hover:text-white">Community Forum</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-2">
              <p className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 mr-2" />
                contact@jaagrukjanta.org
              </p>
              <p className="flex items-center text-gray-300">
                <Phone className="w-5 h-5 mr-2" />
                +91 123-456-7890
              </p>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Jaagruk Janta. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;