import { Category, CATEGORIES } from '@/types/todo';
import { cn } from '@/lib/utils';
import { Briefcase, GraduationCap, User, LayoutGrid } from 'lucide-react';

interface CategoryFilterProps {
  filter: Category | 'all';
  onFilterChange: (filter: Category | 'all') => void;
}

const icons = {
  all: LayoutGrid,
  work: Briefcase,
  school: GraduationCap,
  personal: User,
};

export function CategoryFilter({ filter, onFilterChange }: CategoryFilterProps) {
  const filters: { value: Category | 'all'; label: string }[] = [
    { value: 'all', label: 'All' },
    ...CATEGORIES,
  ];

  return (
    <div className="flex gap-1 p-1.5 glass rounded-xl">
      {filters.map((item) => {
        const Icon = icons[item.value];
        const isActive = filter === item.value;

        return (
          <button
            key={item.value}
            onClick={() => onFilterChange(item.value)}
            className={cn(
              'flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300',
              isActive
                ? 'bg-secondary text-foreground'
                : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
            )}
          >
            <Icon className="h-4 w-4" />
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
