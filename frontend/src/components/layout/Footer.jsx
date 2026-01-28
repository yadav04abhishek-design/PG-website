import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Leaf, MessageCircle, Clock, Shield } from 'lucide-react';
import { siteInfo, navLinks } from '../../data/mock';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[rgb(0,55,32)] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#8FEC78] to-[#81DD67] flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-semibold">{siteInfo.name}</span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              {siteInfo.description}
            </p>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full">
                <Shield className="w-4 h-4 text-[#8FEC78]" />
                <span className="text-xs font-medium">Safe & Secure</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full">
                <Clock className="w-4 h-4 text-[#8FEC78]" />
                <span className="text-xs font-medium">24/7 Support</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/70 hover:text-[#8FEC78] transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Locations</h4>
            <div className="space-y-4">
              <div>
                <p className="font-medium text-[#8FEC78] text-sm mb-1">
                  {siteInfo.locations.dehradun.name}
                </p>
                <p className="text-white/70 text-sm leading-relaxed">
                  {siteInfo.locations.dehradun.address}
                </p>
              </div>
              <div>
                <p className="font-medium text-[#8FEC78] text-sm mb-1">
                  {siteInfo.locations.gurgaon.name}
                </p>
                <p className="text-white/70 text-sm leading-relaxed">
                  {siteInfo.locations.gurgaon.address}
                </p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${siteInfo.phone}`}
                  className="flex items-center gap-3 text-white/70 hover:text-[#8FEC78] transition-colors"
                >
                  <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="text-sm">{siteInfo.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${siteInfo.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/70 hover:text-[#8FEC78] transition-colors"
                >
                  <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <span className="text-sm">WhatsApp Us</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteInfo.email}`}
                  className="flex items-center gap-3 text-white/70 hover:text-[#8FEC78] transition-colors"
                >
                  <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-sm">{siteInfo.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-sm text-center md:text-left">
              © {currentYear} {siteInfo.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/house-rules" className="text-white/60 hover:text-white text-sm transition-colors">
                House Rules
              </Link>
              <Link to="/contact" className="text-white/60 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
