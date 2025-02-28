
import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const QueryForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Query Submitted",
        description: "Thank you for your inquiry. We'll get back to you soon!",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 animate-fade-in">
      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your full name"
          required
          className="w-full shadow-sm focus:ring-medical-500 focus:border-medical-500"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email address"
            required
            className="w-full shadow-sm focus:ring-medical-500 focus:border-medical-500"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your phone number"
            className="w-full shadow-sm focus:ring-medical-500 focus:border-medical-500"
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Your Query
        </label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="How can we help you?"
          rows={5}
          required
          className="w-full shadow-sm focus:ring-medical-500 focus:border-medical-500"
        />
      </div>
      
      <Button 
        type="submit" 
        className="w-full bg-medical-600 hover:bg-medical-700"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <span className="flex items-center">
            Processing
            <span className="ml-2 h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin"></span>
          </span>
        ) : (
          <span className="flex items-center">
            Submit Query
            <Send className="ml-2 h-4 w-4" />
          </span>
        )}
      </Button>
      
      <p className="text-xs text-gray-500 mt-2">
        We'll never share your information with anyone else and will respond within 24 hours.
      </p>
    </form>
  );
};

export default QueryForm;
