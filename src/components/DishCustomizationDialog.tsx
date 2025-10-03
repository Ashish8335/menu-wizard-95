import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ItemCustomization } from '@/types/menu';

interface DishCustomizationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  dishName: string;
  dishDescription: string;
  onConfirm: (customization: ItemCustomization, totalPrice: number) => void;
}

const sideDishes = [
  { name: 'Plain Naan', price: 2.99 },
  { name: 'Butter Naan', price: 2.99 },
  { name: 'Garlic Naan', price: 3.99 },
  { name: 'Cheese Naan', price: 4.99 },
  { name: 'Plain Rice', price: 2.99 },
  { name: 'Jeera Rice', price: 4.99 },
];

const sauces = [
  { name: 'Mint Sauce', price: 1.00 },
  { name: 'Tamarind Sauce', price: 1.00 },
  { name: 'Momo Sauce', price: 1.00 },
  { name: 'Red Spicy Sauce (Schezwan)', price: 1.00 },
  { name: 'Raita (Cucumber & Yogurt)', price: 4.00 },
];

const spiceLevels = ['Mild', 'Medium', 'Spicy', 'Extra Spicy', 'Crazy Spicy'];

const DishCustomizationDialog = ({
  open,
  onOpenChange,
  dishName,
  dishDescription,
  onConfirm,
}: DishCustomizationDialogProps) => {
  const [spiceLevel, setSpiceLevel] = useState<string>('');
  const [selectedSideDish, setSelectedSideDish] = useState<{ name: string; price: number } | null>(null);
  const [selectedSauces, setSelectedSauces] = useState<{ name: string; price: number }[]>([]);
  const [specialInstructions, setSpecialInstructions] = useState('');

  const handleSauceToggle = (sauce: { name: string; price: number }, checked: boolean) => {
    if (checked) {
      setSelectedSauces([...selectedSauces, sauce]);
    } else {
      setSelectedSauces(selectedSauces.filter(s => s.name !== sauce.name));
    }
  };

  const calculateTotal = () => {
    let total = 0;
    if (selectedSideDish) total += selectedSideDish.price;
    total += selectedSauces.reduce((sum, sauce) => sum + sauce.price, 0);
    return total;
  };

  const handleConfirm = () => {
    if (!spiceLevel) {
      return; // Spice level is required
    }

    const customization: ItemCustomization = {
      spiceLevel,
      sideDish: selectedSideDish || undefined,
      extraSauces: selectedSauces.length > 0 ? selectedSauces : undefined,
      specialInstructions: specialInstructions || undefined,
    };

    onConfirm(customization, calculateTotal());
    
    // Reset form
    setSpiceLevel('');
    setSelectedSideDish(null);
    setSelectedSauces([]);
    setSpecialInstructions('');
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900">{dishName}</DialogTitle>
          <p className="text-gray-600 mt-2">{dishDescription}</p>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Spice Level */}
          <div>
            <Label className="text-base font-semibold text-gray-900 mb-3 block">
              How spicy? <span className="text-red-500">*</span>
            </Label>
            <RadioGroup value={spiceLevel} onValueChange={setSpiceLevel}>
              {spiceLevels.map((level) => (
                <div key={level} className="flex items-center space-x-2 mb-2">
                  <RadioGroupItem value={level} id={level} />
                  <Label htmlFor={level} className="cursor-pointer text-gray-700">
                    {level}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          {/* Side Dishes */}
          <div>
            <Label className="text-base font-semibold text-gray-900 mb-3 block">
              Add a side dish
            </Label>
            <RadioGroup
              value={selectedSideDish?.name || ''}
              onValueChange={(value) => {
                const dish = sideDishes.find(d => d.name === value);
                setSelectedSideDish(dish || null);
              }}
            >
              {sideDishes.map((dish) => (
                <div key={dish.name} className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value={dish.name} id={dish.name} />
                    <Label htmlFor={dish.name} className="cursor-pointer text-gray-700">
                      {dish.name}
                    </Label>
                  </div>
                  <span className="text-gray-600 font-medium">+${dish.price.toFixed(2)}</span>
                </div>
              ))}
            </RadioGroup>
          </div>

          {/* Extra Sauces */}
          <div>
            <Label className="text-base font-semibold text-gray-900 mb-3 block">
              Extra Sauce
            </Label>
            {sauces.map((sauce) => (
              <div key={sauce.name} className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id={sauce.name}
                    checked={selectedSauces.some(s => s.name === sauce.name)}
                    onCheckedChange={(checked) => handleSauceToggle(sauce, checked as boolean)}
                  />
                  <Label htmlFor={sauce.name} className="cursor-pointer text-gray-700">
                    {sauce.name}
                  </Label>
                </div>
                <span className="text-gray-600 font-medium">+${sauce.price.toFixed(2)}</span>
              </div>
            ))}
          </div>

          {/* Special Instructions */}
          <div>
            <Label className="text-base font-semibold text-gray-900 mb-3 block">
              Special Instructions
            </Label>
            <Textarea
              placeholder="Example: No pepper / sugar / salt please."
              value={specialInstructions}
              onChange={(e) => setSpecialInstructions(e.target.value)}
              className="min-h-[100px] bg-white border-gray-300"
            />
          </div>
        </div>

        <DialogFooter className="border-t pt-4">
          <div className="flex items-center justify-between w-full">
            <div className="text-lg font-bold text-gray-900">
              Customization Total: ${calculateTotal().toFixed(2)}
            </div>
            <Button
              onClick={handleConfirm}
              disabled={!spiceLevel}
              className="bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-primary-dark hover:to-brand-primary text-white px-8"
            >
              Add to Cart
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DishCustomizationDialog;
