import { useState } from 'react';
import { Check, ArrowRight, Sparkles } from 'lucide-react';
import { ClothingItem, currentUser } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface ExchangeModalProps {
  item: ClothingItem | null;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (item: ClothingItem) => void;
}

type ExchangeStatus = 'confirm' | 'requested' | 'accepted';

const ExchangeModal = ({ item, isOpen, onClose, onConfirm }: ExchangeModalProps) => {
  const [status, setStatus] = useState<ExchangeStatus>('confirm');

  const handleConfirm = () => {
    if (!item) return;
    setStatus('requested');
    
    // Simulate acceptance after 2 seconds
    setTimeout(() => {
      setStatus('accepted');
      onConfirm(item);
    }, 2000);
  };

  const handleClose = () => {
    setStatus('confirm');
    onClose();
  };

  if (!item) return null;

  const newBalance = currentUser.credits - item.credits;

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-display text-xl">
            {status === 'confirm' && 'Confirm Exchange'}
            {status === 'requested' && 'Exchange Requested'}
            {status === 'accepted' && 'Exchange Accepted!'}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Item Preview */}
          <div className="flex items-center gap-4 p-4 bg-muted rounded-lg">
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-20 object-cover rounded"
            />
            <div>
              <p className="font-medium">{item.name}</p>
              <p className="text-sm text-muted-foreground">{item.brand}</p>
              <p className="text-sm font-medium text-primary">{item.credits} credits</p>
            </div>
          </div>

          {status === 'confirm' && (
            <>
              {/* Credit Breakdown */}
              <div className="space-y-3 p-4 bg-secondary/50 rounded-lg">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Your balance</span>
                  <span className="font-medium">{currentUser.credits} credits</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Item cost</span>
                  <span className="font-medium text-destructive">-{item.credits} credits</span>
                </div>
                <div className="border-t border-border pt-3 flex justify-between">
                  <span className="font-medium">New balance</span>
                  <span className="font-semibold text-primary">{newBalance} credits</span>
                </div>
              </div>

              {/* Trust indicator */}
              <div className="flex items-center gap-2 text-sm text-muted-foreground bg-primary/5 p-3 rounded-lg">
                <Sparkles className="h-4 w-4 text-primary" />
                <span>Higher-rated users get faster exchanges</span>
              </div>

              <Button className="w-full gap-2" onClick={handleConfirm}>
                Request Exchange
                <ArrowRight className="h-4 w-4" />
              </Button>
            </>
          )}

          {status === 'requested' && (
            <div className="text-center py-8">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center animate-pulse">
                <ArrowRight className="h-6 w-6 text-accent" />
              </div>
              <p className="text-muted-foreground">
                Waiting for {item.ownerName} to accept...
              </p>
            </div>
          )}

          {status === 'accepted' && (
            <div className="text-center py-8">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Check className="h-6 w-6 text-primary" />
              </div>
              <p className="font-medium text-foreground mb-2">Exchange Complete!</p>
              <p className="text-sm text-muted-foreground">
                Your new balance: <span className="font-semibold text-primary">{newBalance} credits</span>
              </p>
              <Button className="mt-6" onClick={handleClose}>
                Done
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExchangeModal;
