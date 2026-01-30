import { Star } from 'lucide-react';
import { ClothingItem } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ItemCardProps {
  item: ClothingItem;
  onExchange?: (item: ClothingItem) => void;
}

const ItemCard = ({ item, onExchange }: ItemCardProps) => {
  const conditionColor = {
    Excellent: 'bg-primary/10 text-primary',
    Good: 'bg-accent/10 text-accent',
    Fair: 'bg-muted text-muted-foreground',
  };

  return (
    <div className="group bg-card rounded-lg overflow-hidden border border-border card-hover">
      <div className="aspect-[4/5] overflow-hidden bg-muted">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-4 space-y-3">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-body font-medium text-foreground line-clamp-1">
              {item.name}
            </h3>
            <p className="text-sm text-muted-foreground">{item.brand}</p>
          </div>
          <Badge variant="secondary" className={conditionColor[item.condition]}>
            {item.condition}
          </Badge>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-sm">
            <span className="text-muted-foreground">by</span>
            <span className="font-medium text-foreground">{item.ownerName}</span>
            <Star className="h-3.5 w-3.5 fill-accent text-accent" />
            <span className="text-muted-foreground">{item.ownerRating}</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-border">
          <div className="flex items-baseline gap-1">
            <span className="text-lg font-semibold text-primary">{item.credits}</span>
            <span className="text-sm text-muted-foreground">credits</span>
          </div>
          {onExchange && (
            <Button size="sm" variant="outline" onClick={() => onExchange(item)}>
              Request
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
