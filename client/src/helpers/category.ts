export const categories = [
  { categoryName: 'Adventure' },
  { categoryName: 'Architecture' },
  { categoryName: 'Art' },
  { categoryName: 'Beaches' },
  { categoryName: 'Cuisine' },
  { categoryName: 'History' },
  { categoryName: 'Nature' },
  { categoryName: 'Nightlife' },
  { categoryName: 'Parties' },
  { categoryName: 'Relaxation' },
  { categoryName: 'Shopping' },
  { categoryName: 'Sports' },
  { categoryName: 'Wine' },
  { categoryName: 'Wildlife' },
];
export interface Category {
  categoryName: string;
}
export interface CategorySearchProps {
  selectedCategories: Category[];
  setSelectedCategories: React.Dispatch<React.SetStateAction<Category[]>>;
}
