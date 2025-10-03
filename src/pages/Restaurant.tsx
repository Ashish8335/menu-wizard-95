import { useState, useEffect } from 'react';
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

  useEffect(() => {
    const observerOptions = {
      rootMargin: '-140px 0px -60% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const categoryId = entry.target.id;
          const category = categoryId
            .replace('category-', '')
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
          
          // Find matching category from categories array
          const matchedCategory = categories.find(cat => 
            cat.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '') === 
            categoryId.replace('category-', '')
          );
          
          if (matchedCategory) {
            setSelectedCategory(matchedCategory);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all category sections
    const categoryElements = document.querySelectorAll('[id^="category-"]');
    categoryElements.forEach((element) => observer.observe(element));

    return () => {
      categoryElements.forEach((element) => observer.unobserve(element));
    };
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-gray-50">
      <RestaurantHeader />
      <SearchBar value={searchQuery} onChange={setSearchQuery} />
      <CategoryTabs
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <MenuSection searchQuery={searchQuery} />
      <CartBottomSheet />
      <RestaurantFooter />
    </div>
  );
};

export default Restaurant;