import { ShoppingBag, X, Plus, Minus } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const CartBottomSheet = () => {
  const { items, updateQuantity, getCartTotal, getCartItemsCount } = useCart();
  const navigate = useNavigate();
  
  const itemCount = getCartItemsCount();
  const total = getCartTotal();
  
  if (itemCount === 0) return null;

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <>
      {/* Sticky Cart Summary Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-50">
        <div className="flex items-center justify-between max-w-md mx-auto">
          <div className="flex items-center gap-3">
            <div className="relative">
              <ShoppingBag className="w-6 h-6 text-brand-primary" />
              <span className="absolute -top-2 -right-2 bg-brand-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                {itemCount}
              </span>
            </div>
            <div>
              <p className="font-semibold text-gray-900">${total.toFixed(2)}</p>
              <p className="text-sm text-gray-600">{itemCount} item{itemCount !== 1 ? 's' : ''}</p>
            </div>
          </div>
          
          <Button
            onClick={handleCheckout}
            className="bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-primary-dark hover:to-brand-primary text-white font-semibold px-8 py-3"
          >
            Checkout
          </Button>
        </div>
      </div>
      
      {/* Spacer to prevent content from being hidden behind fixed cart */}
      <div className="h-20" />
    </>
  );
};

export default CartBottomSheet;