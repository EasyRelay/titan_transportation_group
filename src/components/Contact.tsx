import  { useEffect, useRef } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   phone: '',
  //   service: '',
  //   message: ''
  // });

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-in-bottom');
        }
      });
    }, observerOptions);

    const elements = [formRef.current, infoRef.current];
    elements.forEach((el, index) => {
      if (el) {
        el.style.animationDelay = `${index * 0.2}s`;
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value
  //   });
  // };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // Handle form submission here
  //   console.log('Form submitted:', formData);
  // };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "(773) 798-0895",
      link: "tel:7737980895"
    },
    {
      icon: Mail,
      title: "Email",
      details: "dispatch@247ttg.com",
      link: "mailto:dispatch@247ttg.com"
    },
    {
      icon: MapPin,
      title: "Address",
      details: "135 Settlers Drive\nNaperville, IL 60565",
      link: "https://maps.google.com/?q=135+Settlers+Drive+Naperville+IL+60565"
    },
    {
      icon: Clock,
      title: "Hours",
      details: "24/7 Dispatch\nAvailable",
      link: null
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to ship? Contact us for a quote or to discuss your transportation needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form
          <div 
            ref={formRef}
            className="bg-white p-8 rounded-xl shadow-lg opacity-0 transform translate-y-[50px]"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-titan-600 focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-titan-600 focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-titan-600 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Service Type</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-titan-600 focus:border-transparent transition-all"
                  >
                    <option value="">Select a service</option>
                    <option value="long-haul">Long Haul Transportation</option>
                    <option value="specialized">Specialized Cargo</option>
                    <option value="express">Express Delivery</option>
                    <option value="secure">Secure Transport</option>
                    <option value="local">Local & Regional</option>
                    <option value="dedicated">Dedicated Fleet</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-titan-600 focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your shipping needs..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-titan-600 hover:bg-titan-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-105"
              >
                <Send className="h-5 w-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div> */}

          {/* Contact Information */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Us?</h3>
            <ul className="space-y-3 text-gray-600 text-xl">
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-titan-600 rounded-full"></div>
                <span>Licensed and insured carrier</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-titan-600 rounded-full"></div>
                <span>Competitive pricing</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-titan-600 rounded-full"></div>
                <span>Real-time tracking</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-titan-600 rounded-full"></div>
                <span>Professional drivers</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-titan-600 rounded-full"></div>
                <span>24/7 customer support</span>
              </li>
            </ul>
          </div>

          <div
            ref={infoRef}
            className="space-y-6 opacity-0 transform hover:shadow-xl rounded-xl translate-y-[50px]"
          >
            <div className="bg-gradient-to-l from-titan-700 to-titan-950 p-8 rounded-xl  text-white">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-titan-500 p-2 rounded-lg">
                      <info.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{info.title}</h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-titan-100 hover:text-white transition-colors whitespace-pre-line"
                          target={info.link.startsWith('http') ? '_blank' : undefined}
                          rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {info.details}
                        </a>
                      ) : (
                        <p className="text-titan-100 whitespace-pre-line">{info.details}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;