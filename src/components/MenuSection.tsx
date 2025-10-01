import { menuData } from '@/data/menuData';
import MenuItemCard from './MenuItemCard';

interface MenuSectionProps {
  selectedCategory: string;
  searchQuery: string;
}

const MenuSection = ({ selectedCategory, searchQuery }: MenuSectionProps) => {
  // Filter by category
  let filteredItems = selectedCategory === 'All Items'
    ? menuData
    : menuData.filter(item => item.category === selectedCategory);

  // Filter by search query (name or description/ingredients)
  if (searchQuery.trim()) {
    const query = searchQuery.toLowerCase();
    filteredItems = filteredItems.filter(item => 
      item.name.toLowerCase().includes(query) || 
      item.description.toLowerCase().includes(query)
    );
  }

  const groupedItems = selectedCategory === 'All Items'
    ? filteredItems.reduce((acc, item) => {
        if (!acc[item.category]) {
          acc[item.category] = [];
        }
        acc[item.category].push(item);
        return acc;
      }, {} as Record<string, typeof menuData>)
    : { [selectedCategory]: filteredItems };

  return (
    <div className="px-4 pb-24">
      {Object.entries(groupedItems).map(([category, items]) => (
        <div key={category} className="mb-8">
          {selectedCategory === 'All Items' && (
            <h2 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
              {category}
            </h2>
          )}
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