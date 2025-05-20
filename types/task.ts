export type Task = {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  status: 'pending' | 'completed';
};