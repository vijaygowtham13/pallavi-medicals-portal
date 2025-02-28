
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Pill, PlusCircle, Activity, Heart, Stethoscope, Thermometer, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const mainServices = [
    {
      icon: <Pill className="h-10 w-10 text-medical-600" />,
      title: "Prescription Medicines",
      description: "We provide a comprehensive range of medicines as per prescriptions from registered medical practitioners. Our pharmacists verify all prescriptions for safety and accuracy.",
      benefits: [
        "Complete range of medicines",
        "Prescription verification",
        "Medication counseling",
        "Refill reminders"
      ]
    },
    {
      icon: <PlusCircle className="h-10 w-10 text-medical-600" />,
      title: "Over-the-Counter Products",
      description: "Access to a wide selection of OTC medications and healthcare products for common ailments and wellness needs, all available without prescription.",
      benefits: [
        "Pain relievers",
        "Cold and flu medications",
        "First aid supplies",
        "Wellness products"
      ]
    },
    {
      icon: <Stethoscope className="h-10 w-10 text-medical-600" />,
      title: "Health Monitoring",
      description: "Basic health check services to help you keep track of your vital parameters like blood pressure, blood sugar levels, and more.",
      benefits: [
        "Blood pressure measurement",
        "Blood glucose testing",
        "BMI calculation",
        "Health record maintenance"
      ]
    },
    {
      icon: <Heart className="h-10 w-10 text-medical-600" />,
      title: "Healthcare Consultation",
      description: "Our experienced pharmacists offer professional guidance on medication usage, potential side effects, and general health concerns.",
      benefits: [
        "Medication reviews",
        "Drug interaction checks",
        "Side effect information",
        "Lifestyle advice"
      ]
    },
  ];

  const additionalServices = [
    {
      icon: <Activity className="h-8 w-8 text-white" />,
      title: "Health Awareness",
      description: "Regular health awareness campaigns on various health topics relevant to the community.",
    },
    {
      icon: <Thermometer className="h-8 w-8 text-white" />,
      title: "First Aid",
      description: "Basic first aid services for minor injuries and emergencies.",
    },
    {
      title: "Delivery Services",
      description: "Coming soon! Home delivery of medications and healthcare products.",
      isComingSoon: true,
    },
  ];

  return (
    <>
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-medical-50 to-blue-50 py-16 md:py-24">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Services
              </h1>
              <p className="text-xl text-gray-600">
                Comprehensive healthcare solutions designed to meet all your medical needs.
              </p>
            </div>
          </div>
        </section>
        
        {/* Main Services Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Services We Offer
              </h2>
              <p className="text-lg text-gray-600">
                At Pallavi Medicals, we provide a range of healthcare services to ensure your well-being.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {mainServices.map((service, index) => (
                <div 
                  key={index} 
                  className="bg-white p-8 rounded-xl shadow-md animate-fade-in" 
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex justify-between items-start">
                    <div className="bg-medical-50 p-4 rounded-xl inline-block mb-4">
                      {service.icon}
                    </div>
                    <div className="bg-pharma-50 px-3 py-1 rounded-full text-sm font-medium text-pharma-700">
                      Available
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  {service.benefits && (
                    <div className="mt-4">
                      <h4 className="font-medium text-gray-900 mb-3">Features & Benefits:</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center">
                            <span className="w-2 h-2 bg-pharma-500 rounded-full mr-2"></span>
                            <span className="text-gray-600">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Additional Services Section */}
        <section className="py-16 bg-medical-600 text-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
              <h2 className="text-3xl font-bold mb-4">
                Additional Services
              </h2>
              <p className="text-xl text-white/90">
                Beyond our core services, we also offer these additional healthcare solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {additionalServices.map((service, index) => (
                <div 
                  key={index} 
                  className={`p-6 rounded-xl ${service.isComingSoon ? 'bg-white/10 backdrop-blur-sm' : 'bg-white/20 backdrop-blur-sm'} animate-fade-in`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {service.icon && (
                    <div className="bg-medical-700/50 p-3 rounded-full inline-flex mb-4">
                      {service.icon}
                    </div>
                  )}
                  
                  {service.isComingSoon && (
                    <div className="mb-4">
                      <span className="bg-yellow-400/20 text-yellow-200 px-3 py-1 rounded-full text-sm font-medium">
                        Coming Soon
                      </span>
                    </div>
                  )}
                  
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-white/80">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Process Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Service Process
              </h2>
              <p className="text-lg text-gray-600">
                How we ensure you receive the best healthcare services at Pallavi Medicals.
              </p>
            </div>
            
            <div className="relative">
              {/* Process Timeline */}
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-medical-100 transform -translate-y-1/2"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  {
                    step: "01",
                    title: "Consultation",
                    description: "Discuss your health concerns with our experienced staff."
                  },
                  {
                    step: "02",
                    title: "Prescription Review",
                    description: "Our pharmacists carefully review your prescriptions for safety."
                  },
                  {
                    step: "03",
                    title: "Service Delivery",
                    description: "Receive your medications or healthcare services promptly."
                  },
                  {
                    step: "04",
                    title: "Follow-up Care",
                    description: "We provide continued support for your ongoing health needs."
                  }
                ].map((item, index) => (
                  <div key={index} className="relative animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                    <div className="hidden md:flex items-center justify-center absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                      <div className="w-12 h-12 bg-medical-600 rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold">{item.step}</span>
                      </div>
                    </div>
                    
                    <div className="bg-white p-6 rounded-xl shadow-md md:mt-8 border border-gray-100">
                      <div className="md:hidden w-10 h-10 bg-medical-600 rounded-full flex items-center justify-center mb-4">
                        <span className="text-white font-bold text-sm">{item.step}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-medical-50">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Need Healthcare Assistance?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our team at Pallavi Medicals is ready to help with all your healthcare needs.
              </p>
              <Button asChild size="lg" className="bg-medical-600 hover:bg-medical-700">
                <Link to="/contact" className="flex items-center">
                  Contact Us Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Services;
