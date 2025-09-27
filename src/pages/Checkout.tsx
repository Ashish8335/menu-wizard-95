import React, { useState } from 'react';
import { ArrowLeft, MapPin, Clock, Phone, User, CreditCard } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const Checkout = () => {
  const { items, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [orderType, setOrderType] = useState<'delivery' | 'pickup'>('delivery');
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    instructions: ''
  });

  const subtotal = getCartTotal();
  const tax = subtotal * 0.0875; // 8.75% tax
  const deliveryFee = orderType === 'delivery' ? 2.99 : 0;
  const total = subtotal + tax + deliveryFee;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!customerInfo.name || !customerInfo.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in your name and phone number",
        variant: "destructive",
      });
      return;
    }

    if (orderType === 'delivery' && !customerInfo.address) {
      toast({
        title: "Missing Address",
        description: "Please provide a delivery address",
        variant: "destructive",
      });
      return;
    }

    // Simulate order placement
    toast({
      title: "Order Placed Successfully!",
      description: `Your order #${Math.floor(Math.random() * 10000)} has been placed. Estimated time: 25-40 minutes.`,
    });

    clearCart();
    navigate('/');
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
          <p className="text-gray-600 mb-4">Add some delicious items to get started!</p>
          <Button onClick={() => navigate('/')} className="bg-gradient-to-r from-brand-primary to-brand-secondary">
            Browse Menu
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-4 sticky top-0 z-40">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate('/')}
            className="p-2"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-xl font-semibold">Checkout</h1>
        </div>
      </div>

      <div className="max-w-2xl mx-auto p-4 space-y-6">
        {/* Order Type Selection */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Order Type</h2>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setOrderType('delivery')}
              className={`p-4 rounded-lg border-2 text-left transition-colors ${
                orderType === 'delivery'
                  ? 'border-brand-primary bg-red-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <MapPin className="w-5 h-5 mb-2 text-brand-primary" />
              <div className="font-medium">Delivery</div>
              <div className="text-sm text-gray-600">25-40 min • $2.99 fee</div>
            </button>
            <button
              onClick={() => setOrderType('pickup')}
              className={`p-4 rounded-lg border-2 text-left transition-colors ${
                orderType === 'pickup'
                  ? 'border-brand-primary bg-red-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <Clock className="w-5 h-5 mb-2 text-brand-primary" />
              <div className="font-medium">Pickup</div>
              <div className="text-sm text-gray-600">15-25 min • No fee</div>
            </button>
          </div>
        </div>

        {/* Customer Information */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Contact Information</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name" className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Full Name *
                </Label>
                <Input
                  id="name"
                  value={customerInfo.name}
                  onChange={(e) => setCustomerInfo(prev => ({ ...prev, name: e.target.value }))}
                  className="mt-1"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <Label htmlFor="phone" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Phone Number *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={customerInfo.phone}
                  onChange={(e) => setCustomerInfo(prev => ({ ...prev, phone: e.target.value }))}
                  className="mt-1"
                  placeholder="(555) 123-4567"
                />
              </div>
            </div>

            {orderType === 'delivery' && (
              <div>
                <Label htmlFor="address" className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Delivery Address *
                </Label>
                <Input
                  id="address"
                  value={customerInfo.address}
                  onChange={(e) => setCustomerInfo(prev => ({ ...prev, address: e.target.value }))}
                  className="mt-1"
                  placeholder="123 Main St, City, State, ZIP"
                />
              </div>
            )}

            <div>
              <Label htmlFor="instructions">Special Instructions</Label>
              <Textarea
                id="instructions"
                value={customerInfo.instructions}
                onChange={(e) => setCustomerInfo(prev => ({ ...prev, instructions: e.target.value }))}
                className="mt-1"
                placeholder="Any special requests or dietary restrictions..."
                rows={3}
              />
            </div>
          </form>
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
          <div className="space-y-3 mb-4">
            {items.map((item) => (
              <div key={item.id} className="flex justify-between items-center">
                <div className="flex-1">
                  <span className="font-medium">{item.name}</span>
                  <span className="text-gray-600 ml-2">×{item.quantity}</span>
                </div>
                <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
          
          <div className="border-t border-gray-200 pt-4 space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            {orderType === 'delivery' && (
              <div className="flex justify-between">
                <span>Delivery Fee</span>
                <span>${deliveryFee.toFixed(2)}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span>Tax</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-lg border-t border-gray-200 pt-2">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Payment Section */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <CreditCard className="w-5 h-5" />
            Payment
          </h2>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
            <p className="text-blue-800 text-sm">
              💳 Payment integration coming soon! For now, you can place your order and pay upon delivery/pickup.
            </p>
          </div>
        </div>

        {/* Place Order Button */}
        <Button
          onClick={handleSubmit}
          className="w-full bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-primary-dark hover:to-brand-primary text-white font-semibold py-4 text-lg"
        >
          Place Order • ${total.toFixed(2)}
        </Button>
      </div>
    </div>
  );
};

export default Checkout;