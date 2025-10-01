import { useState } from 'react';
import RestaurantHeader from '@/components/RestaurantHeader';
import CategoryTabs from '@/components/CategoryTabs';
import MenuSection from '@/components/MenuSection';
import CartBottomSheet from '@/components/CartBottomSheet';
import SearchBar from '@/components/SearchBar';
import RestaurantFooter from '@/components/RestaurantFooter';
import { categories } from '@/data/menuData';

const Restaurant = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-gray-50">
      <RestaurantHeader />
      <SearchBar value={searchQuery} onChange={setSearchQuery} />
      <CategoryTabs
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <MenuSection selectedCategory={selectedCategory} searchQuery={searchQuery} />
      <CartBottomSheet />
      <RestaurantFooter />
    </div>
  );
};

export default Restaurant;