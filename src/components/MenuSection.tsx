import { menuData } from '@/data/menuData';
import MenuItemCard from './MenuItemCard';

interface MenuSectionProps {
  searchQuery: string;
}

const MenuSection = ({ searchQuery }: MenuSectionProps) => {
  // Filter by search query only
  let filteredItems = menuData;
  
  if (searchQuery.trim()) {
    const query = searchQuery.toLowerCase();
    filteredItems = filteredItems.filter(item => 
      item.name.toLowerCase().includes(query) || 
      item.description.toLowerCase().includes(query)
    );
  }

  // Always group by category
  const groupedItems = filteredItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, typeof menuData>);

  return (
    <div className="px-4 pb-24">
      {Object.entries(groupedItems).map(([category, items]) => (
        <div 
          key={category} 
          id={`category-${category.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '')}`}
          className="mb-8 scroll-mt-32"
        >
          <h2 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
            {category}
          </h2>
          <div className="space-y-4">
            {items.map((item) => (
              <MenuItemCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuSection;