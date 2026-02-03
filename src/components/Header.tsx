import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Sections', href: '#sections' },
    { label: 'News', href: '#news' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="bg-white text-gray-900 sticky top-0 z-50 shadow-md border-b-2 border-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center text-blue-600 font-bold text-sm">
                BS
              </div>
            </div>
            <div>
              <h1 className="text-xl font-bold leading-tight text-red-600">Brilliant School</h1>
              <p className="text-xs text-blue-600">Sankeshwar</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-black hover:text-teal-600 transition duration-300 font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Admission Button */}
          <button className="hidden md:inline-block bg-teal-600 hover:bg-teal-700 text-black font-bold py-2 px-6 rounded-lg transition duration-300 shadow-md">
            Admissions
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-gray-200 bg-gray-50">
            <div className="flex flex-col gap-4 mt-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-black hover:text-teal-600 transition duration-300 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <button className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300 w-full">
                Admissions
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
