import { useState } from 'react';
import { Task } from '@/types/todo';
import { CategoryBadge } from './CategoryBadge';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TaskItem({ task, onToggle, onDelete }: TaskItemProps) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [isChecking, setIsChecking] = useState(false);

  const handleToggle = () => {
    setIsChecking(true);
    onToggle(task.id);
    setTimeout(() => setIsChecking(false), 300);
  };

  const handleDelete = () => {
    setIsDeleting(true);
    setTimeout(() => onDelete(task.id), 250);
  };

  const glowClass = {
    work: task.completed ? '' : 'hover:glow-work',
    school: task.completed ? '' : 'hover:glow-school',
    personal: task.completed ? '' : 'hover:glow-personal',
  };

  return (
    <div
      className={cn(
        'group flex items-center gap-4 p-4 glass rounded-xl transition-all duration-300',
        'hover:bg-card/80',
        glowClass[task.category],
        'animate-slide-in',
        isDeleting && 'animate-fade-out'
      )}
    >
      <div className={cn(isChecking && 'animate-check')}>
        <Checkbox
          checked={task.completed}
          onCheckedChange={handleToggle}
          className={cn(
            'h-5 w-5 rounded-full border-2 transition-all duration-200',
            'data-[state=checked]:border-primary data-[state=checked]:bg-primary',
            !task.completed && 'border-muted-foreground/50 hover:border-primary/70'
          )}
        />
      </div>

      <div className="flex-1 min-w-0">
        <p
          className={cn(
            'text-sm font-medium transition-all duration-300',
            task.completed 
              ? 'line-through text-muted-foreground' 
              : 'text-foreground'
          )}
        >
          {task.title}
        </p>
      </div>

      <CategoryBadge category={task.category} />

      <Button
        variant="ghost"
        size="icon"
        onClick={handleDelete}
        className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-all duration-200 text-muted-foreground hover:text-destructive hover:bg-destructive/10"
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  );
}
