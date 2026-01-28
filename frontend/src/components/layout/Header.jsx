import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Leaf } from 'lucide-react';
import { navLinks, siteInfo } from '../../data/mock';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <nav
          className={`flex items-center justify-between px-4 md:px-6 py-3 md:py-4 mx-2 md:mx-4 mt-2 md:mt-4 rounded-full transition-all duration-300 ${
            isScrolled
              ? ''
              : 'bg-white/60 backdrop-blur-xl border border-black/5 shadow-sm'
          }`}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#8FEC78] to-[#81DD67] flex items-center justify-center">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg md:text-xl font-semibold text-[rgb(0,55,32)] group-hover:text-[rgb(13,121,22)] transition-colors">
              {siteInfo.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  location.pathname === link.path
                    ? 'bg-[rgba(148,242,127,0.15)] text-[rgb(13,121,22)]'
                    : 'text-[rgb(131,146,140)] hover:text-[rgb(0,55,32)] hover:bg-black/5'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${siteInfo.phone}`}
              className="btn-primary text-sm"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">Call Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-full hover:bg-black/5 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-[rgb(0,55,32)]" />
            ) : (
              <Menu className="w-6 h-6 text-[rgb(0,55,32)]" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-xl mx-2 md:mx-4 mt-2 rounded-2xl shadow-lg border border-black/5 overflow-hidden">
            <div className="p-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                    location.pathname === link.path
                      ? 'bg-[rgba(148,242,127,0.15)] text-[rgb(13,121,22)]'
                      : 'text-[rgb(131,146,140)] hover:text-[rgb(0,55,32)] hover:bg-black/5'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-3 border-t border-black/10">
                <a
                  href={`tel:${siteInfo.phone}`}
                  className="btn-primary w-full text-center"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
