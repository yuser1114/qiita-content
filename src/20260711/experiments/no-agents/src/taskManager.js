export const PRIORITIES = ['高', '中', '低'];

export function createTask(title, priority = '中') {
  const normalizedTitle = title.trim();
  if (!normalizedTitle) throw new Error('タスク名を入力してください');
  if (!PRIORITIES.includes(priority)) throw new Error('優先度が不正です');
  return { id: crypto.randomUUID(), title: normalizedTitle, completed: false, priority };
}

export function toggleTask(tasks, id) {
  return tasks.map((task) => task.id === id ? { ...task, completed: !task.completed } : task);
}

export function deleteTask(tasks, id) {
  return tasks.filter((task) => task.id !== id);
}

export function filterTasks(tasks, priority) {
  return priority === 'すべて' ? tasks : tasks.filter((task) => task.priority === priority);
}
