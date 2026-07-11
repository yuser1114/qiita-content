# 最低限のAGENTS.md検証準備結果

## 作成した実験ディレクトリ

`src/20260711/experiments/minimal-agents`

## ベースラインとの同一性確認

`git diff --no-index` でアプリケーションファイルに差分がないことを確認した。優先度機能は未実装である。

## 準備時のテスト結果

`src/20260711/experiments/minimal-agents` で `npm test` を実行し、4件成功、0件失敗だった。

## 作成したAGENTS.md

```markdown
# Repository instructions

## Working rules

- Before editing, inspect the relevant existing files and understand their responsibilities.
- Keep changes limited to files necessary for the requested task.
- Do not perform unrelated refactoring.
- Do not add external dependencies unless the user explicitly requests them.
- When application behavior changes, add or update the relevant tests.
- After modifying JavaScript files, run `npm test` in the applicable project directory.
- Do not finish the task while tests are failing.
- If a test or manual check cannot be performed, clearly report the reason.
- Do not create or switch branches unless explicitly requested.
- Do not commit or push unless explicitly requested.
- Do not discard or overwrite existing uncommitted changes.

## Completion report

At the end of the task, report:

1. What was implemented
2. Files changed or created
3. Tests and checks performed
4. Checks that could not be performed
5. Whether a commit was created
```

## AGENTS.mdの配置場所

- リポジトリルート: `AGENTS.md`
- 検証用スナップショット: `src/20260711/agents/minimal-AGENTS.md`

SHA-256ハッシュを比較し、両ファイルが同一内容であることを確認した。

## 既存の指示ファイル確認結果

指定されたリポジトリルート、親ディレクトリ、ドライブ直下、ユーザーの `.codex` 直下に既存の `AGENTS.md` または `AGENTS.override.md` は見つからなかった。

## 次回セッションで行うこと

新しいCodexセッションで、共通の `feature-request.md` を使い、`experiments/minimal-agents` のみに優先度機能を実装して結果を記録する。

## コミットの有無

コミット、プッシュ、ブランチ操作は行っていない。
# AGENTS.md 適用確認

## 新規セッションでのAGENTS.md確認

リポジトリルートの `AGENTS.md` を作業開始前に読み込み、`src/20260711/agents/minimal-AGENTS.md` と同一内容であることを確認した。

## 適用されている指示の要約

- 編集前に関連ファイルを確認する
- 必要なファイルだけを変更し、無関係なリファクタリングや外部依存の追加を避ける
- 振る舞いの変更に対応するテストを追加・更新する
- JavaScript変更後に対象プロジェクトで `npm test` を実行し、失敗を残さない
- 実施できない確認は理由を報告する
- ブランチ作成・切り替え、コミット、プッシュを依頼なしに行わない
- 既存の未コミット変更を破棄・上書きしない
- 完了時に実装、変更ファイル、テスト、未実施確認、コミット有無を報告する
