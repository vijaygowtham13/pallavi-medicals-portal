
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  useEffect(() => {
    document.title = "Page Not Found | Pallavi Medicals";
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-medical-50 to-blue-50 p-4">
      <div className="max-w-lg w-full text-center animate-fade-in">
        <div className="mb-8">
          <span className="text-9xl font-bold text-medical-600">404</span>
        </div>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Page Not Found
        </h1>
        
        <p className="text-lg text-gray-600 mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        
        <Button asChild size="lg" className="bg-medical-600 hover:bg-medical-700">
          <Link to="/" className="flex items-center">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
