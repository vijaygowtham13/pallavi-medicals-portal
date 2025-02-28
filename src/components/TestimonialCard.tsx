
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  location: string;
  quote: string;
  rating: number;
  imageUrl?: string;
  delay?: number;
}

const TestimonialCard = ({ 
  name, 
  location, 
  quote, 
  rating, 
  imageUrl = "/placeholder.svg",
  delay = 0 
}: TestimonialCardProps) => {
  return (
    <div 
      className="bg-white p-6 rounded-xl shadow-md card-hover animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center mb-4">
        <div className="h-12 w-12 rounded-full overflow-hidden bg-gray-200 mr-4">
          {imageUrl ? (
            <img 
              src={imageUrl} 
              alt={name} 
              className="h-full w-full object-cover" 
            />
          ) : (
            <div className="flex items-center justify-center h-full w-full bg-medical-100 text-medical-600 font-bold text-lg">
              {name.charAt(0)}
            </div>
          )}
        </div>
        <div>
          <h4 className="font-medium text-gray-900">{name}</h4>
          <p className="text-sm text-gray-500">{location}</p>
        </div>
      </div>
      
      <div className="flex mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star 
            key={i} 
            className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
          />
        ))}
      </div>
      
      <blockquote className="text-gray-600 italic">
        "{quote}"
      </blockquote>
    </div>
  );
};

export default TestimonialCard;
