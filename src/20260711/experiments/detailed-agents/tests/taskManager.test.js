import test from 'node:test';
import assert from 'node:assert/strict';
import { createTask, deleteTask, filterTasksByPriority, toggleTask } from '../src/taskManager.js';

test('正常なタスクを作成できる', () => {
  const task = createTask('資料を読む');
  assert.equal(task.title, '資料を読む');
  assert.equal(task.completed, false);
});

test('空文字や空白だけのタスクを拒否する', () => {
  assert.throws(() => createTask('   '), /タスク名/);
});

test('完了状態を切り替えられる', () => {
  const task = createTask('テストする');
  assert.equal(toggleTask([task], task.id)[0].completed, true);
});

test('タスクを削除できる', () => {
  const task = createTask('削除する');
  assert.deepEqual(deleteTask([task], task.id), []);
});

test('指定した優先度でタスクを作成できる', () => {
  const task = createTask('急ぎの作業', '高');
  assert.equal(task.priority, '高');
});

test('優先度を省略した場合は中になる', () => {
  assert.equal(createTask('通常の作業').priority, '中');
});

test('不正な優先度を拒否する', () => {
  assert.throws(() => createTask('作業', '最優先'), /優先度/);
});

test('優先度で絞り込み、すべてで解除できる', () => {
  const high = createTask('高の作業', '高');
  const low = createTask('低の作業', '低');
  const tasks = [high, low];
  assert.deepEqual(filterTasksByPriority(tasks, '高'), [high]);
  assert.deepEqual(filterTasksByPriority(tasks, 'すべて'), tasks);
  assert.throws(() => filterTasksByPriority(tasks, '最優先'), /優先度/);
});
