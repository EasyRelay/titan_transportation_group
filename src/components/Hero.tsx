import { useEffect, useRef } from 'react';
import { Shield, Clock, MapPin } from 'lucide-react';

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-in-left');
        }
      });
    }, observerOptions);

    const elements = [titleRef.current, subtitleRef.current, buttonRef.current, featuresRef.current];
    elements.forEach((el, index) => {
      if (el) {
        el.style.animationDelay = `${index * 0.2}s`;
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen inset-0 z-0 flex items-center overflow-hidden"
    >
      {/* 📸 Blur qilingan orqa fon rasmi */}
      <div className="absolute inset-0 -z-20 ">
        <img
          src="/truck_image.png"
          alt="Background"
          className="w-full h-full object-cover "
        />
        <div className='absolute inset-0 bg-black/30'></div>
      </div>

      {/* 🔳 Yengil dot-pattern */}
      <div className="absolute inset-0 opacity-10 -z-10">
        <div className="absolute inset-0 bg-pattern-dots"></div>
      </div>

      <div className="relative z-10 container mt-8 mx-7 text-white">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-xl">
            Professional
            <span className="block  text-white bg-clip-text">
              Transport Solutions
            </span>
          </h1>

          <p className="text-xl md:text-2xl  text-white mb-8 max-w-2xl">
            Reliable, efficient, and secure transportation services across the nation. Your cargo is our priority.
          </p>

          <div className='flex flex-col text-3xl mb-8'>
            <h1><b>MC:</b> 1602772</h1>
            <h1><b>DOT:</b> 4168291</h1>
          </div>

          {/* 🔘 Tugmalar */}
          <div className="flex flex-col sm:flex-row gap-4 mb-20">
            <a href="#contact">
              <button className="bg-slate-900 hover:bg-white/40 hover:text-slate-900 border-4 border-transparent hover:border-slate-900 text-white px-8 py-4 rounded-lg font-semibold transition duration-300">
                Get Quote
              </button>
            </a>
            <a href="#services">
              <button className="border-4 bg-white/40 border-slate-900 text-slate-50 hover:bg-slate-900 hover:text-white px-8 py-4 rounded-lg font-semibold  duration-300">
                Our Services
              </button>
            </a>
          </div>

          {/* 📍 Xizmatlar ro‘yxati */}
          <div className="grid grid-cols-1 md:grid-cols-3  gap-10">
            <div className="flex items-center space-x-3 text-white">
              <div className="bg-slate-900 p-2 rounded-lg border border-white">
                <Shield className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Fully Insured</h3>
                <p className="text-slate-50 text-sm">Complete cargo protection</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 text-white">
              <div className="bg-slate-900 p-2 rounded-lg border border-white">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-white">24/7 Service</h3>
                <p className="text-slate-50 text-sm">Round-the-clock availability</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 text-white">
              <div className="bg-slate-900 p-2 rounded-lg border border-white ">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Nationwide</h3>
                <p className="text-slate-50 text-sm">Coast-to-coast coverage</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

  );
};

export default Hero;
