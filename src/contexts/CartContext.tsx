import React, { createContext, useContext, useState, ReactNode } from 'react';
import { CartItem, MenuItem, ItemCustomization } from '@/types/menu';

interface CartContextType {
  items: CartItem[];
  addToCart: (item: MenuItem, customization?: ItemCustomization, customizationPrice?: number) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartItemsCount: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (item: MenuItem, customization?: ItemCustomization, customizationPrice?: number) => {
    setItems(prev => {
      // For customized items, always add as new item
      if (customization) {
        return [...prev, { 
          ...item, 
          quantity: 1,
          customization,
          customizationPrice: customizationPrice || 0
        }];
      }
      
      const existingItem = prev.find(cartItem => cartItem.id === item.id && !cartItem.customization);
      
      if (existingItem) {
        return prev.map(cartItem =>
          cartItem.id === item.id && !cartItem.customization
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (itemId: string) => {
    setItems(prev => prev.filter(item => item.id !== itemId));
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity === 0) {
      removeFromCart(itemId);
      return;
    }
    
    setItems(prev =>
      prev.map(item =>
        item.id === itemId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const getCartTotal = () => {
    return items.reduce((total, item) => {
      const itemPrice = item.price + (item.customizationPrice || 0);
      return total + (itemPrice * item.quantity);
    }, 0);
  };

  const getCartItemsCount = () => {
    return items.reduce((count, item) => count + item.quantity, 0);
  };

  const value: CartContextType = {
    items,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartItemsCount,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};