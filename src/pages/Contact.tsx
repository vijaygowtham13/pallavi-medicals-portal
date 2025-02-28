
import { useEffect, useState } from "react";
import { MapPin, Phone, Mail, Clock, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QueryForm from "@/components/QueryForm";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedFaq, setSelectedFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState("query");

  const toggleFaq = (index: number) => {
    if (selectedFaq === index) {
      setSelectedFaq(null);
    } else {
      setSelectedFaq(index);
    }
  };

  const faqs = [
    {
      question: "What are your working hours?",
      answer: "We are open Monday to Saturday from 9:00 AM to 9:00 PM, and on Sundays from 10:00 AM to 6:00 PM."
    },
    {
      question: "Do you accept digital prescriptions?",
      answer: "Yes, we accept digital prescriptions sent directly from doctors. Please ensure they are clearly legible and contain all necessary information."
    },
    {
      question: "Can I order medicines over the phone?",
      answer: "Yes, you can call us to check availability and place orders. For prescription medications, you'll need to provide a valid prescription."
    },
    {
      question: "Do you offer home delivery?",
      answer: "Home delivery service is coming soon! We're working on implementing this service to better serve our customers."
    },
    {
      question: "How can I check if a specific medicine is available?",
      answer: "You can call us directly or use the contact form on our website to inquire about specific medications."
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
                Contact Us
              </h1>
              <p className="text-xl text-gray-600">
                Have questions or need assistance? We're here to help.
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Details & Form Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Details */}
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Get In Touch
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Have questions about our products or services? Contact us using any of the methods below:
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-medical-100 p-3 rounded-full mr-4">
                      <MapPin className="h-6 w-6 text-medical-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-gray-900 mb-1">Our Location</h3>
                      <p className="text-gray-600">
                        Pallavi Medicals<br />
                        Old Bus Stand, Srikakulam<br />
                        Andhra Pradesh, India
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-medical-100 p-3 rounded-full mr-4">
                      <Phone className="h-6 w-6 text-medical-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-gray-900 mb-1">Phone Number</h3>
                      <p className="text-gray-600">+91 94401 90357</p>
                      <p className="text-gray-500 text-sm">Call us during business hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-medical-100 p-3 rounded-full mr-4">
                      <Mail className="h-6 w-6 text-medical-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-gray-900 mb-1">Email Address</h3>
                      <p className="text-gray-600">info@pallavimedicals.com</p>
                      <p className="text-gray-500 text-sm">We'll respond as soon as possible</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-medical-100 p-3 rounded-full mr-4">
                      <Clock className="h-6 w-6 text-medical-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-gray-900 mb-1">Business Hours</h3>
                      <div className="space-y-1">
                        <p className="text-gray-600">
                          <span className="font-medium">Monday - Saturday:</span> 9:00 AM - 9:00 PM
                        </p>
                        <p className="text-gray-600">
                          <span className="font-medium">Sunday:</span> 10:00 AM - 6:00 PM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-medical-50 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Coming Soon!</h3>
                  <p className="text-gray-600">
                    We're excited to announce that home delivery services will be available soon. 
                    Stay tuned for updates!
                  </p>
                </div>
              </div>
              
              {/* Contact Form Tabs */}
              <div className="animate-fade-in" style={{ animationDelay: "100ms" }}>
                <Tabs defaultValue="query" className="w-full" value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="grid grid-cols-2 mb-6">
                    <TabsTrigger value="query">Send a Query</TabsTrigger>
                    <TabsTrigger value="faqs">FAQs</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="query" className="mt-0">
                    <div className="bg-white p-8 rounded-xl shadow-md">
                      <h2 className="text-2xl font-bold text-gray-900 mb-6">
                        Submit Your Query
                      </h2>
                      <QueryForm />
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="faqs" className="mt-0">
                    <div className="bg-white p-8 rounded-xl shadow-md">
                      <h2 className="text-2xl font-bold text-gray-900 mb-6">
                        Frequently Asked Questions
                      </h2>
                      <div className="space-y-4">
                        {faqs.map((faq, index) => (
                          <div 
                            key={index} 
                            className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300"
                          >
                            <button
                              className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50 focus:outline-none"
                              onClick={() => toggleFaq(index)}
                            >
                              <span className="font-medium text-gray-900">{faq.question}</span>
                              <span className={`transform transition-transform duration-300 ${
                                selectedFaq === index ? 'rotate-180' : 'rotate-0'
                              }`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                              </span>
                            </button>
                            <div className={`px-4 overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                              selectedFaq === index ? 'max-h-40' : 'max-h-0'
                            }`}>
                              <p className="pb-4 text-gray-600">{faq.answer}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-8 p-6 bg-gray-50 rounded-lg text-center">
                        <p className="text-gray-600 mb-4">
                          Didn't find an answer to your question? Feel free to reach out to us.
                        </p>
                        <Button
                          onClick={() => setActiveTab("query")}
                          className="bg-medical-600 hover:bg-medical-700"
                        >
                          Contact Us
                        </Button>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-medical-50">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Visit Our Store
              </h2>
              <p className="text-lg text-gray-600">
                We're conveniently located at the Old Bus Stand in Srikakulam. Come visit us today!
              </p>
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
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
              <div className="bg-white p-6 rounded-xl shadow-md flex items-start">
                <CheckCircle className="h-6 w-6 text-medical-600 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Easy to Find</h3>
                  <p className="text-gray-600 text-sm">
                    Located at the central bus stand, our pharmacy is easy to locate and access.
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md flex items-start">
                <CheckCircle className="h-6 w-6 text-medical-600 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Ample Parking</h3>
                  <p className="text-gray-600 text-sm">
                    Convenient parking available nearby for customers visiting our store.
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md flex items-start">
                <CheckCircle className="h-6 w-6 text-medical-600 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Public Transport</h3>
                  <p className="text-gray-600 text-sm">
                    Easily accessible by public transportation from all parts of Srikakulam.
                  </p>
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

export default Contact;
