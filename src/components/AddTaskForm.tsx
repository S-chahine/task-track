import { useState } from 'react';
import { Category, CATEGORIES } from '@/types/todo';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Plus, Briefcase, GraduationCap, User } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AddTaskFormProps {
  onAdd: (title: string, category: Category) => void;
}

const icons = {
  work: Briefcase,
  school: GraduationCap,
  personal: User,
};

export function AddTaskForm({ onAdd }: AddTaskFormProps) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<Category>('personal');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onAdd(title, category);
      setTitle('');
    }
  };

  const categoryStyles = {
    work: {
      active: 'gradient-work text-white glow-work',
      inactive: 'bg-category-work-bg text-category-work border-category-work/30 hover:bg-category-work/20',
    },
    school: {
      active: 'gradient-school text-white glow-school',
      inactive: 'bg-category-school-bg text-category-school border-category-school/30 hover:bg-category-school/20',
    },
    personal: {
      active: 'gradient-personal text-white glow-personal',
      inactive: 'bg-category-personal-bg text-category-personal border-category-personal/30 hover:bg-category-personal/20',
    },
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex gap-3">
        <Input
          type="text"
          placeholder="What needs to be done?"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="flex-1 h-12 px-4 glass border-border/50 text-foreground placeholder:text-muted-foreground focus-visible:ring-primary/50 focus-visible:border-primary/50"
        />
        <Button
          type="submit"
          disabled={!title.trim()}
          className="h-12 px-6 gradient-primary text-primary-foreground font-semibold glow-primary hover:opacity-90 transition-opacity disabled:opacity-40"
        >
          <Plus className="h-5 w-5 mr-1" />
          Add
        </Button>
      </div>

      <div className="flex gap-2">
        {CATEGORIES.map((cat) => {
          const Icon = icons[cat.value];
          const isActive = category === cat.value;
          const styles = categoryStyles[cat.value];

          return (
            <button
              key={cat.value}
              type="button"
              onClick={() => setCategory(cat.value)}
              className={cn(
                'flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold border transition-all duration-300',
                isActive ? styles.active : styles.inactive
              )}
            >
              <Icon className="h-4 w-4" />
              {cat.label}
            </button>
          );
        })}
      </div>
    </form>
  );
}
