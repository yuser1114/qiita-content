import test from 'node:test';
import assert from 'node:assert/strict';
import { createTask, deleteTask, toggleTask } from '../src/taskManager.js';

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
