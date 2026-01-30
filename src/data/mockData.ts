export interface ClothingItem {
  id: string;
  name: string;
  brand: string;
  category: string;
  condition: 'Excellent' | 'Good' | 'Fair';
  credits: number;
  image: string;
  ownerId: string;
  ownerName: string;
  ownerRating: number;
}

export interface User {
  id: string;
  name: string;
  credits: number;
  rating: number;
  itemsListed: number;
  exchangesCompleted: number;
}

export const currentUser: User = {
  id: 'user-1',
  name: 'Sarah',
  credits: 120,
  rating: 4.6,
  itemsListed: 8,
  exchangesCompleted: 12,
};

export const mockItems: ClothingItem[] = [
  {
    id: '1',
    name: 'Vintage Silk Blouse',
    brand: 'Reformation',
    category: 'Tops',
    condition: 'Excellent',
    credits: 45,
    image: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=400&h=500&fit=crop',
    ownerId: 'user-2',
    ownerName: 'Emma',
    ownerRating: 4.8,
  },
  {
    id: '2',
    name: 'Linen Wide Leg Pants',
    brand: 'Everlane',
    category: 'Bottoms',
    condition: 'Good',
    credits: 35,
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=500&fit=crop',
    ownerId: 'user-3',
    ownerName: 'Maya',
    ownerRating: 4.5,
  },
  {
    id: '3',
    name: 'Cashmere Cardigan',
    brand: 'COS',
    category: 'Outerwear',
    condition: 'Excellent',
    credits: 55,
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=500&fit=crop',
    ownerId: 'user-4',
    ownerName: 'Olivia',
    ownerRating: 4.9,
  },
  {
    id: '4',
    name: 'Midi Wrap Dress',
    brand: 'Sézane',
    category: 'Dresses',
    condition: 'Good',
    credits: 50,
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop',
    ownerId: 'user-5',
    ownerName: 'Chloe',
    ownerRating: 4.7,
  },
  {
    id: '5',
    name: 'Denim Jacket',
    brand: 'Agolde',
    category: 'Outerwear',
    condition: 'Fair',
    credits: 30,
    image: 'https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=400&h=500&fit=crop',
    ownerId: 'user-6',
    ownerName: 'Zoe',
    ownerRating: 4.3,
  },
  {
    id: '6',
    name: 'Merino Wool Sweater',
    brand: 'Aritzia',
    category: 'Tops',
    condition: 'Excellent',
    credits: 40,
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=500&fit=crop',
    ownerId: 'user-7',
    ownerName: 'Ava',
    ownerRating: 4.6,
  },
];

export const categories = ['All', 'Tops', 'Bottoms', 'Dresses', 'Outerwear', 'Accessories'];
export const conditions = ['Excellent', 'Good', 'Fair'];
export const brands = ['Reformation', 'Everlane', 'COS', 'Sézane', 'Agolde', 'Aritzia', 'Madewell', 'Other'];
