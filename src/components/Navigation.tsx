import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Heart, Users, BookOpen, PiggyBank, MessageSquare, Menu, X, HandHeart } from 'lucide-react';
import { useState } from 'react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { title: 'Home', href: '/', icon: <Home className="w-5 h-5" /> },
    { title: 'Resiliency Index', href: '/resiliency', icon: <Heart className="w-5 h-5" /> },
    { title: 'Resources', href: '/resources', icon: <Users className="w-5 h-5" /> },
    { title: 'Education', href: '/education', icon: <BookOpen className="w-5 h-5" /> },
    { title: 'Crowdfunding', href: '/crowdfunding', icon: <PiggyBank className="w-5 h-5" /> },
    { title: 'Community', href: '/community', icon: <MessageSquare className="w-5 h-5" /> },
    { title: 'Volunteer', href: '/volunteer', icon: <HandHeart className="w-5 h-5" /> },
  ];

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Heart className="w-8 h-8 text-teal-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">Jaagruk Janta</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.title}
                to={item.href}
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50"
              >
                {item.icon}
                <span className="ml-2">{item.title}</span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-teal-600 hover:bg-gray-50"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.title}
                to={item.href}
                className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {item.icon}
                <span className="ml-2">{item.title}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;