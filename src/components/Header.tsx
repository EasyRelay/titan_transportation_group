import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import logo from "/image_copy.png"
import { Link, useLocation } from 'react-router';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const thisPath = useLocation().pathname;
  const isHome = thisPath === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 duration-300 bg-white shadow-lg
      }`}>
      <div className="container mx-auto px-4 z-50">
        <div className="flex items-center justify-between h-25 py-1">
          <div className="flex items-center space-x-3">
            <div className="rounded">
              {/* <Truck className="h-8 w-8 text-white" /> */}
              <div className='w-17 h-[67px] overflow-hidden rounded'>
                <img src={logo} alt="logo" className='h-full scale-110 brightness-105' />
              </div>
            </div>
            <div className='flex flex-col pt-1'>
              <ul className={`space-y-0 text-black}`}>
                <li className={`text-md  font-bold text-slate-400 transition-colors }`}>
                  TITAN
                </li>
                <li className={`text-md font-bold transition-colors }`}>
                  TRANSPORT
                </li>
                <li className={`text-md font-bold transition-colors }`}>
                  GROUP
                </li>
              </ul>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {!isHome ?
              <Link to="/" className={`transition-colors hover:text-blue-600 text-black
                }`}>
                Home
              </Link>
              :
              <a href="#home" className={`transition-colors hover:text-blue-600 text-black
                }`}>
                Home
              </a>
            }
            {isHome &&
              <div className='flex space-x-8'>
                <a href="#services" className={`transition-colors hover:text-blue-600 text-black
                  }`}>
                  Services
                </a>
                <a href="#about" className={`transition-colors hover:text-blue-600 text-black
                  }`}>
                  About
                </a>
                <a href="#contact" className={`transition-colors hover:text-blue-600 text-black
                  }`}>
                  Contact
                </a>
              </div>
            }
            <div className="flex items-center space-x-4">
              <a href="tel:7737980895" className="flex items-center space-x-1 text-titan-600 hover:text-titan-700">
                <Phone className="h-4 w-4" />
                <span className="text-sm font-medium">(773) 798-0895</span>
              </a>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-xl rounded-b-2xl mx-4 mb-2">
            <nav className="py-6 space-y-1">
              <a href="#home" className="block px-6 py-3 text-gray-700 hover:bg-titan-50 hover:text-titan-600 rounded-lg mx-2 transition-all duration-200 font-medium">
                Home
              </a>
              <a href="#services" className="block px-6 py-3 text-gray-700 hover:bg-titan-50 hover:text-titan-600 rounded-lg mx-2 transition-all duration-200 font-medium">
                Services
              </a>
              <a href="#about" className="block px-6 py-3 text-gray-700 hover:bg-titan-50 hover:text-titan-600 rounded-lg mx-2 transition-all duration-200 font-medium">
                About
              </a>
              <a href="#contact" className="block px-6 py-3 text-gray-700 hover:bg-titan-50 hover:text-titan-600 rounded-lg mx-2 transition-all duration-200 font-medium">
                Contact
              </a>
              <div className="px-6 py-4 border-t border-gray-100 mt-4">
                <a href="tel:7737980895" className="flex items-center justify-center space-x-2 text-titan-600 bg-titan-50 py-3 rounded-lg font-semibold hover:bg-titan-100 transition-all duration-200">
                  <Phone className="h-4 w-4" />
                  <span>(773) 798-0895</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
