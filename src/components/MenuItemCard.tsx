import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { MenuItem, ItemCustomization } from '@/types/menu';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import DishCustomizationDialog from './DishCustomizationDialog';

interface MenuItemCardProps {
  item: MenuItem;
}

const MenuItemCard = ({ item }: MenuItemCardProps) => {
  const { items, addToCart, updateQuantity } = useCart();
  const { toast } = useToast();
  const [showCustomization, setShowCustomization] = useState(false);
  
  const cartItem = items.find(cartItem => cartItem.id === item.id);
  const quantity = cartItem?.quantity || 0;
  const isDeal = item.category === 'Deals';
  const isAutomaticDeal = item.id === 'deal1' || item.id === 'deal4'; // Automatic deals: 10% off & free delivery
  const isDalTadkaDeal = item.id === 'deal2'; // Buy 1 get 1 free Yellow Dal Tadka
  const isButterChickenDeal = item.id === 'deal3'; // Buy Butter Chicken Get Rice Free

  const handleAddToCart = () => {
    if (isDalTadkaDeal || isButterChickenDeal) {
      setShowCustomization(true);
      return;
    }
    
    if (isDeal && quantity > 0) {
      toast({
        title: "Deal Already Added",
        description: "This deal is already in your cart. Each deal can only be added once.",
        variant: "destructive",
      });
      return;
    }
    addToCart(item);
  };

  const handleCustomizationConfirm = (customization: ItemCustomization, customizationPrice: number) => {
    let dish;
    let dishName;
    
    if (isDalTadkaDeal) {
      dish = {
        id: '93',
        name: 'Yellow Dal Tadka (Vegan)',
        description: 'Yellow lentils cooked with fresh tomato, onion, cumin and cilantro.',
        price: 15.99,
        image: 'https://www.fbgcdn.com/pictures/82120695-630b-4468-b9e8-0a0ad440719c_d3.jpg',
        category: 'Vegetarian',
        available: true
      };
      dishName = 'Yellow Dal Tadka';
    } else if (isButterChickenDeal) {
      dish = {
        id: '49',
        name: 'Butter Chicken - Chef\'s Special',
        description: 'Chef\'s special. Butter chicken is one of the most popular curries and we have one of the best in the world! Sliced thigh chicken meat with creamy, buttery sauce.',
        price: 16.99,
        image: 'https://www.fbgcdn.com/pictures/a29d7903-29d6-4124-8efd-c1dde9f8e185_d3.jpg',
        category: 'Chicken',
        available: true
      };
      dishName = 'Butter Chicken';
    }
    
    if (dish) {
      addToCart(dish, customization, customizationPrice);
      setShowCustomization(false);
      toast({
        title: "Added to Cart",
        description: `${dishName} with customizations added successfully!`,
      });
    }
  };

  const handleIncrement = () => {
    updateQuantity(item.id, quantity + 1);
  };

  const handleDecrement = () => {
    updateQuantity(item.id, quantity - 1);
  };

  const getDishInfo = () => {
    if (isDalTadkaDeal) {
      return {
        name: 'Yellow Dal Tadka (Vegan)',
        description: 'Yellow lentils cooked with fresh tomato, onion, cumin and cilantro.'
      };
    } else if (isButterChickenDeal) {
      return {
        name: 'Butter Chicken - Chef\'s Special',
        description: 'Chef\'s special. Butter chicken is one of the most popular curries and we have one of the best in the world! Sliced thigh chicken meat with creamy, buttery sauce.'
      };
    }
    return { name: '', description: '' };
  };

  const dishInfo = getDishInfo();

  return (
    <>
      <DishCustomizationDialog
        open={showCustomization}
        onOpenChange={setShowCustomization}
        dishName={dishInfo.name}
        dishDescription={dishInfo.description}
        onConfirm={handleCustomizationConfirm}
      />
      
      <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden">
        <div className="flex gap-4 p-4">
          {/* Item Image */}
          <div className="w-20 h-20 md:w-24 md:h-24 flex-shrink-0">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover rounded-lg"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = `https://via.placeholder.com/200x200/f3f4f6/6b7280?text=${encodeURIComponent(item.name)}`;
              }}
            />
          </div>

          {/* Item Details */}
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-gray-900 text-base md:text-lg mb-1 line-clamp-2">
              {item.name}
            </h3>
            <p className="text-gray-600 text-sm line-clamp-2 mb-2">
              {item.description}
            </p>
            <div className="flex items-center justify-between">
              {!isDeal && (
                <span className="font-bold text-lg text-gray-900">
                  ${item.price.toFixed(2)}
                </span>
              )}
              {isDeal && <div />}
              
              {/* Add to Cart Controls */}
              {isAutomaticDeal ? (
                <div className="px-4 py-2 bg-green-100 text-green-800 dark:bg-green-950 dark:text-green-200 rounded-full text-xs font-medium">
                  Applied Automatically
                </div>
              ) : quantity === 0 ? (
                <Button
                  onClick={handleAddToCart}
                  size="sm"
                  className="bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-primary-dark hover:to-brand-primary text-white font-medium px-6 py-2"
                >
                  <Plus className="w-4 h-4 mr-1" />
                  Add
                </Button>
              ) : isDeal ? (
                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={handleDecrement}
                    className="w-8 h-8 p-0 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white"
                  >
                    <Minus className="w-3 h-3" />
                  </Button>
                  <span className="font-semibold text-brand-primary min-w-[2rem] text-center">
                    Added
                  </span>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={handleDecrement}
                    className="w-8 h-8 p-0 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white"
                  >
                    <Minus className="w-3 h-3" />
                  </Button>
                  <span className="font-semibold text-brand-primary min-w-[2rem] text-center">
                    {quantity}
                  </span>
                  <Button
                    size="sm"
                    onClick={handleIncrement}
                    className="w-8 h-8 p-0 bg-brand-primary hover:bg-brand-primary-dark"
                  >
                    <Plus className="w-3 h-3" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuItemCard;
