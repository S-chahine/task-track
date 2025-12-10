import { useTasks } from '@/hooks/useTasks';
import { AddTaskForm } from '@/components/AddTaskForm';
import { TaskItem } from '@/components/TaskItem';
import { CategoryFilter } from '@/components/CategoryFilter';
import { StatsCard } from '@/components/StatsCard';
import { EmptyState } from '@/components/EmptyState';
import { Sparkles } from 'lucide-react';

const Index = () => {
  const { tasks, filter, setFilter, addTask, deleteTask, toggleTask, stats } = useTasks();

  return (
    <div className="min-h-screen">
      <div className="max-w-2xl mx-auto px-4 py-12">
        {/* Header */}
        <header className="text-center mb-10">
          <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-2xl gradient-primary mb-5 glow-primary">
            <Sparkles className="h-8 w-8 text-white" />
            <div className="absolute inset-0 rounded-2xl gradient-primary opacity-40 blur-xl animate-pulse-glow" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-2">
            My <span className="text-gradient">Tasks</span>
          </h1>
          <p className="text-muted-foreground">Stay organized, get things done</p>
        </header>

        {/* Stats */}
        <section className="mb-8">
          <StatsCard stats={stats} />
        </section>

        {/* Add Task Form */}
        <section className="mb-8">
          <AddTaskForm onAdd={addTask} />
        </section>

        {/* Filter */}
        <section className="mb-6">
          <CategoryFilter filter={filter} onFilterChange={setFilter} />
        </section>

        {/* Task List */}
        <section className="space-y-3">
          {tasks.length === 0 ? (
            <EmptyState />
          ) : (
            tasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onToggle={toggleTask}
                onDelete={deleteTask}
              />
            ))
          )}
        </section>
      </div>
    </div>
  );
};

export default Index;
