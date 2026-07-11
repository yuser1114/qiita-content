export function createTask(title) {
  const normalizedTitle = title.trim();
  if (!normalizedTitle) throw new Error('タスク名を入力してください');
  return { id: crypto.randomUUID(), title: normalizedTitle, completed: false };
}

export function toggleTask(tasks, id) {
  return tasks.map((task) => task.id === id ? { ...task, completed: !task.completed } : task);
}

export function deleteTask(tasks, id) {
  return tasks.filter((task) => task.id !== id);
}
