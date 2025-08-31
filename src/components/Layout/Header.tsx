import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, UserCircle, ChevronDown } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { isLoggedIn, login, logout } = useAppContext();
  const location = useLocation();
  const titleRef = useRef<HTMLSpanElement>(null);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false); // Close menu on route change
  }, [location]);

  // Dynamic title animation
  useEffect(() => {
    if (titleRef.current) {
      const titleElement = titleRef.current;
      const text = titleElement.textContent;
      if (text) {
        titleElement.innerHTML = '';
        for (let i = 0; i < text.length; i++) {
          const charSpan = document.createElement('span');
          charSpan.textContent = text[i];
          charSpan.style.position = 'relative';
          charSpan.style.color = isScrolled ? '#6b7280' : '#374151';
          charSpan.style.transition = 'color 0.3s ease';
          titleElement.appendChild(charSpan);
        }

        const spans = titleElement.querySelectorAll('span');
        const applyAnimation = () => {
          spans.forEach((span, index) => {
            const randomColor = ['#f472b6', '#8b5cf6', '#3b82f6', '#22c55e', '#facc15', '#ef4444'][
              Math.floor(Math.random() * 6)
            ];
            setTimeout(() => {
              (span as HTMLElement).style.color = randomColor;
            }, index * 100);
          });
        };

        const intervalId = setInterval(applyAnimation, 2000);
        return () => clearInterval(intervalId);
      }
    }
  }, [isScrolled]);
  
  // ADD THIS EFFECT: Locks the body scroll when the mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto'; // Cleanup on component unmount
    };
  }, [isMenuOpen]);


  const navLinks = [
    { to: '/', text: 'Home' },
    { to: '/about', text: 'About' },
    {
      text: 'Resources',
      children: [
        { to: '/author-guidelines', text: 'Author Guidelines' },
        { to: '/reviewer-guidelines', text: 'Reviewer Guidelines' },
        { to: '/ethics', text: 'Publication Ethics' },
        { to: '/faq', text: 'FAQ' },
        { to: '/archives', text: 'Archives' },
        { to: '/membership', text: 'Membership' },
      ],
    },
    { to: '/browse', text: 'Browse Papers' },
    { to: '/submit', text: 'Submit Paper' },
    { to: '/editorial-board', text: 'Editorial Board' },
    { to: '/contact', text: 'Contact' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
                <Link to="/" className="flex items-center space-x-2">
          <img src="/Ijup.logo.png" alt="IJUP Logo" className="h-8 w-auto" />
          <span className="font-serif font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-accent-300 to-accent-500">
            IJUP
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.text} className="relative group">
                <span
                  className="cursor-pointer flex items-center gap-1 text-gray-700 hover:text-primary-600 transition-colors duration-200"
                >
                  {link.text}
                  <ChevronDown size={16} />
                </span>
                <div className="absolute left-0 bg-white rounded-md shadow-lg border border-gray-200 min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top z-50">
                  <div className="py-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.to}
                        to={child.to}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary-600 transition-colors duration-200 whitespace-nowrap"
                      >
                        {child.text}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.to}
                to={link.to}
                className={`${
                  location.pathname === link.to
                    ? 'text-primary-700 font-semibold'
                    : 'text-gray-700 hover:text-primary-600'
                } transition-colors duration-200`}
              >
                {link.text}
              </Link>
            )
          )}
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          {isLoggedIn ? (
            <button
              onClick={logout}
              className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 transition-colors duration-200"
            >
              <UserCircle size={20} />
              <span>Logout</span>
            </button>
          ) : (
            <button
              onClick={login}
              className="flex items-center space-x-1 px-4 py-2 bg-primary-700 text-white rounded-md hover:bg-primary-800 transition-colors duration-200"
            >
              <UserCircle size={20} />
              <span>Login</span>
            </button>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white shadow-lg absolute w-full left-0 right-0 top-full z-40"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) =>
                  link.children ? (
                    <div key={link.text}>
                      <button
                        className="flex items-center justify-between w-full text-left py-2 text-gray-700"
                        onClick={() =>
                          setOpenDropdown((prev) => (prev === link.text ? null : link.text))
                        }
                      >
                        <span>{link.text}</span>
                        <ChevronDown size={16} />
                      </button>
                      {openDropdown === link.text && (
                        <div className="pl-4">
                          {link.children.map((child) => (
                            <Link
                              key={child.to}
                              to={child.to}
                              className="block py-1 text-gray-600 hover:text-primary-600"
                            >
                              {child.text}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      key={link.to}
                      to={link.to}
                      className={`py-2 ${
                        location.pathname === link.to
                          ? 'text-primary-700 font-semibold'
                          : 'text-gray-700'
                      }`}
                    >
                      {link.text}
                    </Link>
                  )
                )}

                {/* Mobile Auth */}
                {isLoggedIn ? (
                  <button
                    onClick={logout}
                    className="flex items-center space-x-1 py-2 text-gray-700"
                  >
                    <UserCircle size={20} />
                    <span>Logout</span>
                  </button>
                ) : (
                  <button
                    onClick={login}
                    className="flex items-center space-x-1 py-2 text-primary-700"
                  >
                    <UserCircle size={20} />
                    <span>Login</span>
                  </button>
                )}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;