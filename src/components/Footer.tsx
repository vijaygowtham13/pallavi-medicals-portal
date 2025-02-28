
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - About */}
          <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <h3 className="text-xl font-bold mb-4">Pallavi Medicals</h3>
            <p className="text-gray-300 mb-4">
              Providing quality healthcare products since 2010. Your trusted pharmacy for all medical needs.
            </p>
            <p className="text-sm text-gray-400 mt-4">
              Delivery services coming soon!
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Contact Info */}
          <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <span className="text-gray-300">
                  Old Bus Stand, Srikakulam, Andhra Pradesh
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-2" />
                <span className="text-gray-300">+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-2" />
                <span className="text-gray-300">info@pallavimedicals.com</span>
              </li>
            </ul>
          </div>

          {/* Column 4 - Hours */}
          <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <h3 className="text-xl font-bold mb-4">Business Hours</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <div>
                  <p className="text-gray-300">Monday - Saturday</p>
                  <p className="text-gray-400">9:00 AM - 9:00 PM</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <div>
                  <p className="text-gray-300">Sunday</p>
                  <p className="text-gray-400">10:00 AM - 6:00 PM</p>
                </div>
              </li>
            </ul>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Pallavi Medicals. All rights reserved. Owned by Tirupati Swami.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
