
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, PlusCircle, Pill, Activity, Heart, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import ProductCard from "@/components/ProductCard";
import TestimonialCard from "@/components/TestimonialCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: <Pill className="h-8 w-8 text-medical-600" />,
      title: "Prescription Medicines",
      description: "Full range of prescription medicines with expert advice from our pharmacists.",
    },
    {
      icon: <PlusCircle className="h-8 w-8 text-medical-600" />,
      title: "Healthcare Products",
      description: "Quality healthcare items from trusted brands for everyday wellness.",
    },
    {
      icon: <Activity className="h-8 w-8 text-medical-600" />,
      title: "Health Check-ups",
      description: "Basic health monitoring services like blood pressure and blood sugar check.",
    },
    {
      icon: <Heart className="h-8 w-8 text-medical-600" />,
      title: "Wellness Consultation",
      description: "Personalized guidance on maintaining good health and medication management.",
    },
  ];

  const products = [
    {
      title: "Prescription Medicines",
      description: "We stock a wide range of prescription medications for various health conditions.",
      imageUrl: "https://images.unsplash.com/photo-1584362917165-526a968579e8?q=80&w=2070&auto=format&fit=crop",
      benefits: ["Genuine medicines", "Complete range", "Prescription validation", "Expert guidance"],
    },
    {
      title: "Surgical Supplies",
      description: "Quality surgical supplies and equipment for medical professionals and home care.",
      imageUrl: "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=2070&auto=format&fit=crop",
      benefits: ["Sterile packaging", "Premium quality", "Comprehensive range", "Professional grade"],
    },
    {
      title: "Health Supplements",
      description: "Vitamins and supplements to support your overall health and wellness goals.",
      imageUrl: "https://images.unsplash.com/photo-1577825094920-3cc95c9aeff6?q=80&w=2070&auto=format&fit=crop",
      benefits: ["Third-party tested", "Quality ingredients", "Different formulations", "Expert advice"],
    },
  ];

  const testimonials = [
    {
      name: "Ramesh Kumar",
      location: "Srikakulam",
      quote: "Pallavi Medicals has been my family's trusted pharmacy for years. Mr. Tirupati provides excellent advice and ensures we get the right medications.",
      rating: 5,
    },
    {
      name: "Lakshmi Devi",
      location: "Srikakulam",
      quote: "I appreciate the professional service and wide range of medicines available here. The staff is always helpful and courteous.",
      rating: 4,
    },
    {
      name: "Suresh Babu",
      location: "Vizianagaram",
      quote: "When I needed urgent medication late in the evening, Pallavi Medicals was open and had exactly what I needed. Very reliable service!",
      rating: 5,
    },
  ];

  return (
    <>
      <Navbar />
      
      <main>
        <HeroSection />
        
        {/* Services Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Healthcare Services
              </h2>
              <p className="text-lg text-gray-600">
                Comprehensive healthcare solutions provided by experienced professionals
                to ensure your well-being.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:transform hover:-translate-y-1 border border-gray-100 animate-fade-in" 
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="bg-medical-50 p-3 rounded-xl inline-block mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link to="/services" className="text-medical-600 font-medium inline-flex items-center hover:text-medical-700 transition-colors">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12 animate-fade-in">
              <Button asChild className="bg-medical-600 hover:bg-medical-700">
                <Link to="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* About Section */}
        <section className="section-padding bg-gradient-to-br from-gray-50 to-medical-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative animate-fade-in">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="/lovable-uploads/8820726d-56a2-42e9-ae5f-14ea0f76f1ab.png" 
                    alt="Pallavi Medicals Store Interior" 
                    className="w-full h-[500px] object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-medical-900/20 backdrop-blur-sm"></div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-pharma-100 rounded-full -z-10"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-medical-100 rounded-full -z-10"></div>
              </div>
              
              <div className="space-y-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
                <div className="inline-block px-3 py-1 bg-pharma-100 text-pharma-800 rounded-full text-sm font-medium">
                  About Our Pharmacy
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Your Trusted Healthcare Partner Since 1994
                </h2>
                <p className="text-lg text-gray-600">
                  Pallavi Medicals, owned by Mr. Tirupati Swami, has been serving the 
                  Srikakulam community with dedication and care for nearly three decades.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  <div className="flex items-start">
                    <div className="bg-medical-100 p-2 rounded-full mr-4">
                      <Stethoscope className="h-5 w-5 text-medical-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Expert Staff</h3>
                      <p className="text-gray-600 text-sm">Qualified pharmacists and healthcare professionals</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-medical-100 p-2 rounded-full mr-4">
                      <PlusCircle className="h-5 w-5 text-medical-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Quality Products</h3>
                      <p className="text-gray-600 text-sm">Genuine medicines and healthcare items</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-medical-100 p-2 rounded-full mr-4">
                      <Heart className="h-5 w-5 text-medical-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Patient Care</h3>
                      <p className="text-gray-600 text-sm">Personalized attention to all your health needs</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-medical-100 p-2 rounded-full mr-4">
                      <Activity className="h-5 w-5 text-medical-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Health Services</h3>
                      <p className="text-gray-600 text-sm">Basic health monitoring and consultation</p>
                    </div>
                  </div>
                </div>
                <Button asChild className="bg-medical-600 hover:bg-medical-700">
                  <Link to="/about">Learn More About Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Products Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Product Categories
              </h2>
              <p className="text-lg text-gray-600">
                We offer a comprehensive range of healthcare products to meet all your medical needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <ProductCard
                  key={index}
                  title={product.title}
                  description={product.description}
                  imageUrl={product.imageUrl}
                  benefits={product.benefits}
                  delay={index * 100}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="section-padding bg-gradient-to-br from-gray-50 to-medical-50">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What Our Customers Say
              </h2>
              <p className="text-lg text-gray-600">
                Don't just take our word for it. Here's what our valued customers have to say about Pallavi Medicals.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  name={testimonial.name}
                  location={testimonial.location}
                  quote={testimonial.quote}
                  rating={testimonial.rating}
                  delay={index * 100}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="section-padding bg-medical-600 text-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
              <div className="lg:col-span-3 animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Have Questions About Your Medications?
                </h2>
                <p className="text-xl text-white/90">
                  Our expert pharmacists are ready to assist you with personalized healthcare advice.
                </p>
              </div>
              <div className="lg:col-span-2 animate-fade-in" style={{ animationDelay: "100ms" }}>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                  <p className="font-medium text-xl mb-4">
                    Contact us today or visit our store at Old Bus Stand, Srikakulam.
                  </p>
                  <div className="space-y-3">
                    <Button asChild className="w-full bg-white text-medical-600 hover:bg-white/90">
                      <Link to="/contact">Get in Touch</Link>
                    </Button>
                    <p className="text-white/80 text-sm text-center">
                      Delivery services coming soon!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Index;
