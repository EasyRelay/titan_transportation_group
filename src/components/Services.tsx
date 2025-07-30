import  { useEffect, useRef } from 'react';
import { Truck, Package, Clock, Shield, MapPin, Users } from 'lucide-react';

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

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

    const elements = [titleRef.current, servicesRef.current];
    elements.forEach((el, index) => {
      if (el) {
        el.style.animationDelay = `${index * 0.3}s`;
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Truck,
      title: "Long Haul Transportation",
      description: "Efficient cross-country freight delivery with real-time tracking and professional handling."
    },
    {
      icon: Package,
      title: "Specialized Cargo",
      description: "Expert handling of oversized, fragile, and high-value shipments with specialized equipment."
    },
    {
      icon: Clock,
      title: "Express Delivery",
      description: "Time-critical shipments delivered with priority scheduling and expedited routes."
    },
    {
      icon: Shield,
      title: "Secure Transport",
      description: "Enhanced security protocols for valuable and sensitive cargo with full insurance coverage."
    },
    {
      icon: MapPin,
      title: "Local & Regional",
      description: "Comprehensive coverage for local deliveries and regional distribution networks."
    },
    {
      icon: Users,
      title: "Dedicated Fleet",
      description: "Exclusive vehicle assignment for regular customers with customized service agreements."
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div 
          ref={titleRef}
          className="text-center mb-16 opacity-0 transform translate-y-[50px]"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive transportation solutions tailored to meet your specific logistics needs
          </p>
        </div>

        <div 
          ref={servicesRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 opacity-0 transform translate-y-[50px]"
        >
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group border-t-4 border-titan-800"
            >
              <div className="bg-gradient-to-r from-titan-700 to-titan-950 p-4 rounded-lg w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;