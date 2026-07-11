import test from 'node:test';
import assert from 'node:assert/strict';
import { createTask, deleteTask, filterTasks, toggleTask } from '../src/taskManager.js';

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

test('優先度を指定してタスクを作成できる', () => {
  assert.equal(createTask('重要な作業', '高').priority, '高');
});

test('不正な優先度を拒否する', () => {
  assert.throws(() => createTask('作業', '最優先'), /優先度/);
});

test('優先度でタスクを絞り込める', () => {
  const tasks = [createTask('急ぎ', '高'), createTask('通常', '中')];
  assert.deepEqual(filterTasks(tasks, '高').map((task) => task.title), ['急ぎ']);
  assert.equal(filterTasks(tasks, 'すべて').length, 2);
});
