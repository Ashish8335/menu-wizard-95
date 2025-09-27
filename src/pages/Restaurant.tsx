import { useState } from 'react';
import RestaurantHeader from '@/components/RestaurantHeader';
import CategoryTabs from '@/components/CategoryTabs';
import MenuSection from '@/components/MenuSection';
import CartBottomSheet from '@/components/CartBottomSheet';
import { categories } from '@/data/menuData';

const Restaurant = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <div className="min-h-screen bg-gray-50">
      <RestaurantHeader />
      <CategoryTabs
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <MenuSection selectedCategory={selectedCategory} />
      <CartBottomSheet />
    </div>
  );
};

export default Restaurant;