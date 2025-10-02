import { categories } from '@/data/menuData';

interface CategoryTabsProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryTabs = ({ selectedCategory, onCategoryChange }: CategoryTabsProps) => {
  const scrollToCategory = (category: string) => {
    onCategoryChange(category);
    
    if (category === 'All Items') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    const categoryId = `category-${category.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '')}`;
    const element = document.getElementById(categoryId);
    
    if (element) {
      const offset = 140; // Account for sticky search bar and category tabs
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="sticky top-[60px] bg-white border-b border-gray-200 z-40 px-4 py-3">
      <div className="flex gap-2 overflow-x-auto scrollbar-hide">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => scrollToCategory(category)}
            className={`
              px-6 py-2 rounded-full font-medium text-sm whitespace-nowrap transition-all
              ${selectedCategory === category
                ? 'bg-gradient-to-r from-brand-primary to-brand-secondary text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }
            `}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryTabs;