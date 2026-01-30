import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Check, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Navbar from '@/components/Navbar';
import { categories, conditions, brands } from '@/data/mockData';

const ListItem = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    category: '',
    condition: '',
  });
  const [valuationResult, setValuationResult] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const calculateCredits = () => {
    // Simple mock valuation logic
    let baseCredits = 20;
    
    // Brand multiplier
    const premiumBrands = ['Reformation', 'Sézane', 'COS'];
    if (premiumBrands.includes(formData.brand)) {
      baseCredits += 20;
    } else if (formData.brand !== 'Other') {
      baseCredits += 10;
    }
    
    // Condition multiplier
    if (formData.condition === 'Excellent') {
      baseCredits += 15;
    } else if (formData.condition === 'Good') {
      baseCredits += 5;
    }
    
    // Category bonus
    if (formData.category === 'Outerwear' || formData.category === 'Dresses') {
      baseCredits += 10;
    }
    
    return baseCredits;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate AI valuation
    setTimeout(() => {
      const credits = calculateCredits();
      setValuationResult(credits);
      setIsSubmitting(false);
    }, 1500);
  };

  const handleConfirmListing = () => {
    setIsSuccess(true);
    setTimeout(() => {
      navigate('/dashboard');
    }, 2000);
  };

  const isFormValid = formData.name && formData.brand && formData.category && formData.condition;

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="max-w-md mx-auto">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
              <Check className="h-8 w-8 text-primary" />
            </div>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-2">
              Item Listed Successfully!
            </h2>
            <p className="text-muted-foreground mb-4">
              Your item is now visible to the community
            </p>
            <p className="text-lg font-medium text-primary">
              +{valuationResult} credits added to your wallet
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-lg mx-auto">
          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="font-display text-3xl font-semibold text-foreground mb-2">
              List an Item
            </h1>
            <p className="text-muted-foreground">
              Get AI-powered credit valuation for your clothing
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Image Upload Placeholder */}
            <div className="border-2 border-dashed border-border rounded-xl p-8 text-center bg-muted/30">
              <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-3" />
              <p className="text-sm text-muted-foreground mb-2">
                Drag & drop photos or click to upload
              </p>
              <p className="text-xs text-muted-foreground">
                (Image upload simulated for demo)
              </p>
            </div>

            {/* Item Name */}
            <div className="space-y-2">
              <Label htmlFor="name">Item Name</Label>
              <Input
                id="name"
                placeholder="e.g., Vintage Silk Blouse"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            {/* Brand */}
            <div className="space-y-2">
              <Label htmlFor="brand">Brand</Label>
              <Select
                value={formData.brand}
                onValueChange={(value) => setFormData({ ...formData, brand: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select brand" />
                </SelectTrigger>
                <SelectContent>
                  {brands.map((brand) => (
                    <SelectItem key={brand} value={brand}>
                      {brand}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Category */}
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select
                value={formData.category}
                onValueChange={(value) => setFormData({ ...formData, category: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.filter(c => c !== 'All').map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Condition */}
            <div className="space-y-2">
              <Label htmlFor="condition">Condition</Label>
              <Select
                value={formData.condition}
                onValueChange={(value) => setFormData({ ...formData, condition: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select condition" />
                </SelectTrigger>
                <SelectContent>
                  {conditions.map((condition) => (
                    <SelectItem key={condition} value={condition}>
                      {condition}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Submit Button */}
            {!valuationResult && (
              <Button
                type="submit"
                className="w-full gap-2"
                disabled={!isFormValid || isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Sparkles className="h-4 w-4 animate-pulse" />
                    Analyzing with AI...
                  </>
                ) : (
                  <>
                    <Sparkles className="h-4 w-4" />
                    Get AI Valuation
                  </>
                )}
              </Button>
            )}
          </form>

          {/* Valuation Result */}
          {valuationResult && (
            <div className="mt-8 p-6 rounded-xl bg-primary/5 border border-primary/20 text-center animate-fade-in">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Sparkles className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-primary">
                  AI-assisted valuation applied
                </span>
              </div>
              <p className="text-muted-foreground mb-2">Your item is valued at</p>
              <p className="text-4xl font-display font-semibold text-primary mb-1">
                {valuationResult}
              </p>
              <p className="text-muted-foreground mb-6">credits</p>
              
              <div className="text-xs text-muted-foreground mb-6 space-y-1">
                <p>Based on: Brand reputation, condition, category demand</p>
              </div>

              <Button onClick={handleConfirmListing} className="w-full">
                Confirm & List Item
              </Button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default ListItem;
