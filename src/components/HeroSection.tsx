
import { useState, useEffect } from "react";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-gradient-to-br from-blue-50 to-medical-50">
      <div className="absolute inset-0 opacity-20 bg-grid-pattern"></div>
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-6 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-block px-3 py-1 bg-medical-100 text-medical-800 rounded-full text-sm font-medium">
              Trusted Healthcare Partner
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Your Health Is Our{" "}
              <span className="text-medical-600">Priority</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-xl">
              Pallavi Medicals provides quality medications and healthcare products 
              with professional consultation and care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-medical-600 hover:bg-medical-700">
                <Link to="/services" className="flex items-center">
                  Our Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-medical-600 text-medical-600 hover:bg-medical-50">
                <Link to="/contact" className="flex items-center">
                  Contact Us
                  <ChevronRight className="ml-1 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="pt-4">
              <p className="text-medical-800 font-medium">Delivery services coming soon!</p>
            </div>
          </div>
          
          <div className={`relative transition-all duration-700 delay-200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative w-full h-[450px] rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-medical-700/10 backdrop-blur-sm z-10 rounded-2xl"></div>
              <img 
                src="/lovable-uploads/0a85beb7-cb88-40db-83a3-c2393e13ef76.png" 
                alt="Tirupati Swami - Owner of Pallavi Medicals" 
                className="w-full h-full object-cover object-center"
                style={{ objectPosition: "center 15%" }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900/90 to-transparent p-6 z-20">
                <h3 className="text-white text-xl font-semibold">Tirupati Swami</h3>
                <p className="text-white/80">Owner, Pallavi Medicals</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-medical-100 rounded-full -z-10"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-pharma-100 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HeroSection;
