import { CheckCircle2, Circle, ListTodo } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StatsCardProps {
  stats: {
    total: number;
    completed: number;
    pending: number;
  };
}

export function StatsCard({ stats }: StatsCardProps) {
  const statItems = [
    { 
      label: 'Total', 
      value: stats.total, 
      icon: ListTodo, 
      gradient: 'gradient-primary',
      glow: 'group-hover:glow-primary'
    },
    { 
      label: 'Completed', 
      value: stats.completed, 
      icon: CheckCircle2, 
      gradient: 'gradient-personal',
      glow: 'group-hover:glow-personal'
    },
    { 
      label: 'Pending', 
      value: stats.pending, 
      icon: Circle, 
      gradient: 'gradient-school',
      glow: 'group-hover:glow-school'
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {statItems.map((item) => (
        <div
          key={item.label}
          className={cn(
            'group relative flex flex-col items-center p-5 glass rounded-2xl transition-all duration-300',
            item.glow
          )}
        >
          <div className={cn('p-2.5 rounded-xl mb-3', item.gradient)}>
            <item.icon className="h-5 w-5 text-white" />
          </div>
          <span className="text-3xl font-bold text-foreground">{item.value}</span>
          <span className="text-xs text-muted-foreground font-medium mt-1">{item.label}</span>
        </div>
      ))}
    </div>
  );
}
