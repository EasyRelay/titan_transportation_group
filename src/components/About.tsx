import  { useEffect, useRef } from 'react';
import { Award, Users, Truck, Globe } from 'lucide-react';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const credentialsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-in-left');
        }
      });
    }, observerOptions);

    const elements = [contentRef.current, statsRef.current, credentialsRef.current];
    elements.forEach((el, index) => {
      if (el) {
        el.style.animationDelay = `${index * 0.2}s`;
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: Truck, number: "500+", label: "Successful Deliveries" },
    { icon: Users, number: "50+", label: "Satisfied Clients" },
    { icon: Globe, number: "48", label: "States Covered" },
    { icon: Award, number: "5+", label: "Years Experience" }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div 
            ref={contentRef}
            className="opacity-0 transform translate-x-[-100px]"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              About Titan Transport Group
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Based in Naperville, Illinois, Titan Transport Group LLC has been providing 
              reliable transportation services across the United States. We pride ourselves 
              on delivering exceptional service with a focus on safety, efficiency, and 
              customer satisfaction.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our experienced team and modern fleet ensure that your cargo reaches its 
              destination safely and on time. We understand the importance of your shipments 
              and treat each delivery with the utmost care and professionalism.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700">DOT Certified & Fully Licensed</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700">Comprehensive Insurance Coverage</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700">24/7 Customer Support</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700">Real-time Tracking & Updates</span>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div 
              ref={statsRef}
              className="grid grid-cols-2 gap-6 opacity-0 transform translate-x-[-100px]"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
                  <div className="bg-titan-900 p-3 rounded-lg w-fit mx-auto mb-4">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            <div 
              ref={credentialsRef}
              className="bg-gradient-to-r from-titan-700 to-titan-950 p-8 rounded-xl text-white opacity-0 transform translate-x-[-100px]"
            >
              <h3 className="text-xl font-bold mb-4">Our Credentials</h3>
              <div className="space-y-2 text-titan-100">
                <p><span className="font-semibold text-white">MC Number:</span> 1602772</p>
                <p><span className="font-semibold text-white">DOT Number:</span> 4168291</p>
                <p><span className="font-semibold text-white">EIN:</span> 93-4839131</p>
                <p><span className="font-semibold text-white">Location:</span> Naperville, IL</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;