
import { Check } from "lucide-react";

interface ProductCardProps {
  title: string;
  description: string;
  imageUrl: string;
  benefits: string[];
  delay?: number;
}

const ProductCard = ({ title, description, imageUrl, benefits, delay = 0 }: ProductCardProps) => {
  return (
    <div 
      className="bg-white rounded-xl shadow-md overflow-hidden card-hover animate-fade-in" 
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
        
        {benefits && benefits.length > 0 && (
          <div className="mt-4">
            <p className="font-medium text-gray-700 mb-2">Benefits:</p>
            <ul className="space-y-1">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-pharma-500 flex-shrink-0 mr-2" />
                  <span className="text-sm text-gray-600">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
