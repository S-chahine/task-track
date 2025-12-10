import { useState, useEffect } from 'react';
import { Task, Category } from '@/types/todo';

const STORAGE_KEY = 'todo-tasks';

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  const [filter, setFilter] = useState<Category | 'all'>('all');

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title: string, category: Category) => {
    const newTask: Task = {
      id: crypto.randomUUID(),
      title: title.trim(),
      category,
      completed: false,
      createdAt: Date.now(),
    };
    setTasks((prev) => [newTask, ...prev]);
  };

  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const toggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const filteredTasks = tasks.filter(
    (task) => filter === 'all' || task.category === filter
  );

  const stats = {
    total: tasks.length,
    completed: tasks.filter((t) => t.completed).length,
    pending: tasks.filter((t) => !t.completed).length,
  };

  return {
    tasks: filteredTasks,
    filter,
    setFilter,
    addTask,
    deleteTask,
    toggleTask,
    stats,
  };
}
