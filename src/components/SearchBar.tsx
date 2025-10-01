import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <div className="sticky top-0 z-50 bg-background border-b px-4 py-3">
      <div className="relative max-w-2xl mx-auto">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          type="text"
          placeholder="Search dishes by name or ingredient..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="pl-10 pr-4"
        />
      </div>
    </div>
  );
};

export default SearchBar;
