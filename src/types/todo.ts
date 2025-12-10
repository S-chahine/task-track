export type Category = 'work' | 'school' | 'personal';

export interface Task {
  id: string;
  title: string;
  category: Category;
  completed: boolean;
  createdAt: number;
}

export const CATEGORIES: { value: Category; label: string; color: string }[] = [
  { value: 'work', label: 'Work', color: 'category-work' },
  { value: 'school', label: 'School', color: 'category-school' },
  { value: 'personal', label: 'Personal', color: 'category-personal' },
];
