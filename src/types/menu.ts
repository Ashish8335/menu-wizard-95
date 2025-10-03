export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  available: boolean;
  // Deal-specific properties
  isPercentageDiscount?: boolean;
  discountValue?: number;
  validTime?: string;
  isDeal?: boolean;
  dealType?: 'BOGO' | 'FREE_ITEM' | 'FREE_DELIVERY';
  minimumOrder?: number;
}

export interface ItemCustomization {
  spiceLevel?: string;
  sideDish?: { name: string; price: number };
  extraSauces?: { name: string; price: number }[];
  specialInstructions?: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
  customization?: ItemCustomization;
  customizationPrice?: number;
}

export interface Order {
  id: string;
  customerName: string;
  customerPhone: string;
  orderType: 'delivery' | 'pickup';
  address?: string;
  items: CartItem[];
  subtotal: number;
  tax: number;
  total: number;
  status: 'pending' | 'confirmed' | 'preparing' | 'ready' | 'delivered';
}