import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-white border-t-2 border-blue-600">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-teal-600 p-2 rounded-lg">
                <div className="w-6 h-6 bg-white rounded flex items-center justify-center text-teal-600 font-bold text-xs">
                  BS
                </div>
              </div>
              <div>
                <h3 className="font-bold text-blue-900">Brilliant School</h3>
                <p className="text-xs text-teal-600">Sankeshwar</p>
              </div>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              Committed to nurturing young minds and building future leaders through quality education.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-blue-900 mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#about" className="text-gray-700 hover:text-blue-600 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-blue-600 transition">
                  Academics
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-700 hover:text-blue-600 transition">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-blue-600 transition">
                  Admissions
                </a>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="font-bold text-blue-900 mb-4 text-lg flex items-center gap-2">
              <FaClock className="text-teal-600" /> Office Hours
            </h4>
            <div className="space-y-2 text-sm text-gray-700">
              <p>Monday - Friday: 8:30 AM - 4:30 PM</p>
              <p>Saturday: 8:30 AM - 1:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-blue-900 mb-4 text-lg">Get In Touch</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-teal-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Sankeshwar, Karnataka</span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-teal-600 flex-shrink-0" />
                <a href="tel:+919876543210" className="text-gray-700 hover:text-teal-600 transition">
                  +91 9876543210
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-teal-600 flex-shrink-0" />
                <a href="mailto:info@brilliantschool.edu.in" className="text-gray-700 hover:text-teal-600 transition">
                  info@brilliant.edu.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-300 pt-8">
          <div className="flex gap-6 justify-center mb-8">
            <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition transform hover:scale-110">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="bg-blue-400 hover:bg-blue-500 text-white p-3 rounded-full transition transform hover:scale-110">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="bg-blue-700 hover:bg-blue-800 text-white p-3 rounded-full transition transform hover:scale-110">
              <FaLinkedin size={20} />
            </a>
          </div>

          {/* Bottom Copyright */}
          <div className="text-center text-gray-700 text-sm border-t border-gray-300 pt-8">
            <p className="mb-2">Copyright © Brilliant School Sankeshwar 2025. All Rights Reserved</p>
            <p>
              CBSE Affiliation No. - 830113 | Built with ❤️ for Excellence in Education
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
