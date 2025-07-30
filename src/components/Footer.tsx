import { Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router';
import logo from "/public/image copy.png"

const Footer = () => {
  return (
    <footer className="bg-titan-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex  space-x-3 mb-3">
              <div className='w-14 h-14 overflow-hidden rounded'>
                <img src={logo} alt="logo" className='h-full scale-110 brightness-105' />
              </div>
              <div className='flex'>
                <h3 className="text-sm font-bold">Titan <br /> Transportation <br /> Group </h3>
                <p className='mt-11 -ml-10 text-[10px]'>LLC</p>
              </div>
            </div>
            <div className='mb-5 ml-0.5 text-gray-50'>
              <p>MC: 1602772</p>
              <p>DOT: 4168291</p>
              <p>EIN: 93-4839131</p>
            </div>
            <p className="text-gray-400 mb-4">
              Professional transportation services you can trust.
              Delivering excellence across the nation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/#home" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/#services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/#about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/#contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Long Haul Transportation</li>
              <li>Specialized Cargo</li>
              <li>Express Delivery</li>
              <li>Secure Transport</li>
              <li>Local & Regional</li>
              <li>Dedicated Fleet</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-titan-400" />
                <a href="tel:7737980895" className="text-gray-400 hover:text-white transition-colors">
                  (773) 798-0895
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-titan-400" />
                <a href="mailto:dispatch@247ttg.com" className="text-gray-400 hover:text-white transition-colors">
                  dispatch@247ttg.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-titan-400 mt-1" />
                <div className="text-gray-400">
                  <p>135 Settlers Drive</p>
                  <p>Naperville, IL 60565</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              <p>&copy; 2024 Titan Transport Group LLC. All rights reserved.</p>
            </div>
            <div className="text-gray-200 text-sm space-x-4">
              <a href='/privacy_policy'><span>Privacy Policy</span></a>
              <a href='/terms_of_service'><span>Terms of Service</span></a>
              <a href='/cookie_policy'><span>Cookie Policy</span></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;