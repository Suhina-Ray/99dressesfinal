import { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import ItemCard from '@/components/ItemCard';
import ExchangeModal from '@/components/ExchangeModal';
import { mockItems, categories, ClothingItem } from '@/data/mockData';

const Browse = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState<ClothingItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [exchangedItems, setExchangedItems] = useState<string[]>([]);

  const filteredItems = mockItems.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.brand.toLowerCase().includes(searchQuery.toLowerCase());
    const notExchanged = !exchangedItems.includes(item.id);
    return matchesCategory && matchesSearch && notExchanged;
  });

  const handleExchangeRequest = (item: ClothingItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleExchangeConfirm = (item: ClothingItem) => {
    setExchangedItems([...exchangedItems, item.id]);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-display text-3xl font-semibold text-foreground mb-2">
            Browse Items
          </h1>
          <p className="text-muted-foreground">
            Discover unique pieces from our community
          </p>
        </div>

        {/* Search & Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by name or brand..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button variant="outline" className="gap-2 sm:w-auto">
            <Filter className="h-4 w-4" />
            Filters
          </Button>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={selectedCategory === category ? 'default' : 'secondary'}
              className={`cursor-pointer transition-colors ${
                selectedCategory === category
                  ? ''
                  : 'hover:bg-secondary/80'
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Items Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredItems.map((item) => (
              <ItemCard
                key={item.id}
                item={item}
                onExchange={handleExchangeRequest}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-muted-foreground">No items found matching your criteria</p>
          </div>
        )}
      </main>

      <ExchangeModal
        item={selectedItem}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleExchangeConfirm}
      />
    </div>
  );
};

export default Browse;
