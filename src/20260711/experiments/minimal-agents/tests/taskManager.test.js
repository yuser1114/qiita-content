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

test('優先度を指定してタスクを作成できる', () => {
  const task = createTask('重要な作業', '高');
  assert.equal(task.priority, '高');
});

test('優先度を省略すると中になる', () => {
  assert.equal(createTask('通常の作業').priority, '中');
});

test('不正な優先度を拒否する', () => {
  assert.throws(() => createTask('作業', '緊急'), /優先度/);
});

test('優先度でタスクを絞り込める', () => {
  const high = createTask('重要な作業', '高');
  const low = createTask('後で行う作業', '低');
  assert.deepEqual(filterTasksByPriority([high, low], '高'), [high]);
  assert.deepEqual(filterTasksByPriority([high, low], 'すべて'), [high, low]);
});
