
import { useEffect } from "react";
import { Check, Clock, Users, Award, Shield, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const milestones = [
    {
      year: "1994",
      title: "Establishment",
      description: "Pallavi Medicals was founded by Mr. Tirupati Swami with a vision to provide quality healthcare to Srikakulam.",
    },
    {
      year: "2000",
      title: "Expanded Services",
      description: "Added healthcare consultations and expanded our product range to better serve the community.",
    },
    {
      year: "2008",
      title: "Community Recognition",
      description: "Received local recognition for outstanding service to the community during healthcare initiatives.",
    },
    {
      year: "2016",
      title: "Modernization",
      description: "Updated our infrastructure and inventory management system to better serve our customers.",
    },
    {
      year: "2023",
      title: "Online Presence",
      description: "Launched our website to provide information and services to our customers online.",
    },
  ];

  const values = [
    {
      icon: <Shield className="h-6 w-6 text-medical-600" />,
      title: "Quality Assurance",
      description: "We ensure all our products are genuine, properly stored, and of the highest quality.",
    },
    {
      icon: <Users className="h-6 w-6 text-medical-600" />,
      title: "Customer Care",
      description: "Our customers are at the heart of everything we do, providing personalized attention to everyone.",
    },
    {
      icon: <Award className="h-6 w-6 text-medical-600" />,
      title: "Professional Expertise",
      description: "Our team consists of qualified professionals committed to providing expert healthcare advice.",
    },
    {
      icon: <Clock className="h-6 w-6 text-medical-600" />,
      title: "Reliability",
      description: "We maintain consistent hours and ensure critical medications are always in stock for our community.",
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
                About Pallavi Medicals
              </h1>
              <p className="text-xl text-gray-600">
                Your trusted neighborhood pharmacy committed to providing quality healthcare since 1994.
              </p>
            </div>
          </div>
        </section>
        
        {/* Owner Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 animate-fade-in" style={{ animationDelay: "100ms" }}>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Meet Our Owner
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Pallavi Medicals is owned and managed by Mr. Tirupati Swami, 
                  a dedicated healthcare professional with over 30 years of experience 
                  in the pharmaceutical industry.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  With his extensive knowledge and commitment to patient care, 
                  Mr. Swami has established Pallavi Medicals as a trusted name in 
                  Srikakulam for all healthcare needs.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-pharma-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">
                      Certified pharmacist with specialized training in medication management
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-pharma-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">
                      Active member of local healthcare initiatives and community service
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-pharma-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">
                      Regularly updates knowledge through professional development courses
                    </span>
                  </li>
                </ul>
              </div>
              
              <div className="order-1 lg:order-2 animate-fade-in">
                <div className="relative">
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <img 
                      src="/lovable-uploads/0a85beb7-cb88-40db-83a3-c2393e13ef76.png" 
                      alt="Tirupati Swami - Owner of Pallavi Medicals" 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-5 -right-5 w-36 h-36 bg-medical-100 rounded-full -z-10"></div>
                  <div className="absolute -top-5 -left-5 w-24 h-24 bg-pharma-100 rounded-full -z-10"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Story Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Journey
              </h2>
              <p className="text-lg text-gray-600">
                The story of how Pallavi Medicals grew to become a trusted healthcare partner in Srikakulam.
              </p>
            </div>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-medical-200"></div>
              
              {/* Timeline Items */}
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                    <div className={`flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                      {/* Timeline Dot */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 bg-medical-500 rounded-full flex items-center justify-center shadow-md z-10">
                        <span className="text-white font-bold text-sm">{milestone.year}</span>
                      </div>
                      
                      {/* Content */}
                      <div className={`w-5/12 ${index % 2 === 0 ? 'pr-16 text-right' : 'pl-16'}`}>
                        <div className="bg-white p-6 rounded-xl shadow-md">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                          <p className="text-gray-600">{milestone.description}</p>
                        </div>
                      </div>
                      
                      {/* Empty Space */}
                      <div className="w-5/12"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Values */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Core Values
              </h2>
              <p className="text-lg text-gray-600">
                The principles that guide everything we do at Pallavi Medicals.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-xl shadow-md border border-gray-100 animate-fade-in" 
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="bg-medical-50 p-3 rounded-full inline-flex mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Location Section */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-medical-50">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Visit Our Pharmacy
              </h2>
              <p className="text-lg text-gray-600">
                Conveniently located to serve the Srikakulam community.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="bg-white p-8 rounded-xl shadow-md animate-fade-in">
                <div className="flex items-start mb-6">
                  <MapPin className="h-6 w-6 text-medical-600 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Our Location</h3>
                    <p className="text-gray-600">
                      Pallavi Medicals<br />
                      Old Bus Stand, Srikakulam<br />
                      Andhra Pradesh, India
                    </p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Business Hours</h3>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span className="text-gray-600">Monday - Saturday</span>
                      <span className="font-medium">9:00 AM - 9:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Sunday</span>
                      <span className="font-medium">10:00 AM - 6:00 PM</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Contact Information</h3>
                  <ul className="space-y-2">
                    <li className="text-gray-600">Phone: +91 94401 90357</li>
                    <li className="text-gray-600">Email: info@pallavimedicals.com</li>
                  </ul>
                </div>
              </div>
              
              <div className="h-96 rounded-xl overflow-hidden shadow-xl animate-fade-in" style={{ animationDelay: "100ms" }}>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15162.079673376395!2d83.8903314!3d18.296911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3c7352c2502259%3A0xfadf57c644b9f655!2sSrikakulam%20Old%20Bus%20Stand!5e0!3m2!1sen!2sin!4v1684846458811!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Pallavi Medicals Location"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default About;
