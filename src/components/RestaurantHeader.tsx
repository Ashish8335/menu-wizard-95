import { Star, Clock, MapPin } from 'lucide-react';
import restaurantHero from '@/assets/restaurant-hero.jpg';

const RestaurantHeader = () => {
  return (
    <div className="relative">
      {/* Hero Image */}
      <div className="relative h-48 md:h-64 lg:h-72 overflow-hidden">
        <img
          src={restaurantHero}
          alt="Everest Indian Restaurant"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Restaurant Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Everest Cuisine San Jose</h1>
          <div className="flex flex-wrap items-center gap-4 text-sm md:text-base">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-brand-accent text-brand-accent" />
              <span className="font-semibold">4.8</span>
              <span className="text-gray-200">(1,200+ reviews)</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>25-40 min</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>0.8 miles away</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Restaurant Details */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <p className="text-gray-600 text-sm md:text-base">
          Authentic Indian cuisine featuring traditional recipes from the Himalayas. 
          Fresh ingredients, bold spices, and time-honored cooking techniques.
        </p>
        <div className="flex flex-wrap gap-2 mt-3">
          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
            Vegetarian Friendly
          </span>
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
            Spicy Options
          </span>
          <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium">
            Authentic Indian
          </span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantHeader;