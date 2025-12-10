import { Category, CATEGORIES } from '@/types/todo';
import { cn } from '@/lib/utils';

interface CategoryBadgeProps {
  category: Category;
  className?: string;
}

export function CategoryBadge({ category, className }: CategoryBadgeProps) {
  const categoryInfo = CATEGORIES.find((c) => c.value === category);

  const colorClasses = {
    work: 'bg-category-work-bg text-category-work border-category-work/30',
    school: 'bg-category-school-bg text-category-school border-category-school/30',
    personal: 'bg-category-personal-bg text-category-personal border-category-personal/30',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border',
        colorClasses[category],
        className
      )}
    >
      {categoryInfo?.label}
    </span>
  );
}
