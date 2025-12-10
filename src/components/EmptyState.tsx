import { Sparkles } from 'lucide-react';

export function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="relative w-20 h-20 rounded-2xl gradient-primary flex items-center justify-center mb-6 glow-primary">
        <Sparkles className="h-10 w-10 text-white" />
        <div className="absolute inset-0 rounded-2xl gradient-primary opacity-50 blur-xl animate-pulse-glow" />
      </div>
      <h3 className="text-xl font-bold text-foreground mb-2">No tasks yet</h3>
      <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
        Add your first task above to start organizing your day!
      </p>
    </div>
  );
}
