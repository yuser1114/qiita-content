# 最小限のAGENTS.mdありの検証結果

## 読み込んだAGENTS.md

リポジトリルートの `AGENTS.md`。`src/20260711/agents/minimal-AGENTS.md` と同一内容であることを確認した。

## 適用した指示の要約

編集前調査、必要最小限の変更、挙動変更に対するテスト、JavaScript変更後の `npm test`、未実施確認の明記、Git操作の禁止、既存変更の保護、所定の完了報告。

## 実装した内容

タスク追加時に高・中・低を選択できる優先度、一覧上の色付き優先度表示、優先度別の絞り込みと解除を追加した。優先度未指定時は中、不正値は例外とした。

## 確認した既存ファイル

対象の `index.html`、`package.json`、`src/app.js`、`src/taskManager.js`、`tests/taskManager.test.js`、比較用baseline、共通依頼、AGENTS.md、第1回結果、Qiita記事。

## 変更したファイル

- `src/20260711/experiments/minimal-agents/index.html`
- `src/20260711/experiments/minimal-agents/src/app.js`
- `src/20260711/experiments/minimal-agents/src/taskManager.js`
- `src/20260711/experiments/minimal-agents/tests/taskManager.test.js`
- `src/20260711/results/minimal-agents/setup-result.md`
- `public/20260711_mokumoku.md`

## 新規作成したファイル

- `src/20260711/results/minimal-agents/test-result.txt`
- `src/20260711/results/minimal-agents/diff.txt`
- `src/20260711/results/minimal-agents/diff-stat.txt`
- `src/20260711/results/minimal-agents/codex-result.md`

## 実行したコマンド

`git status --short`、`node --version`、`npm --version`、実装前後の `npm test`、`git diff --no-index`、同 `--stat`、最終 `git status --short`。

## テスト結果

実装前4件成功。実装後は既存4件と追加4件の計8件が成功、失敗0件。外部依存の追加なし。

## 手動確認結果

ローカルHTTPサーバーを起動できず、ブラウザでの画面操作は未確認。確認済みとは扱っていない。

## 実装時にCodexが独自判断した内容

既存の責務を維持し、優先度の定数・検証・絞り込みを `taskManager.js`、DOM入力・描画を `app.js` に配置した。既存呼び出しとの互換性のため既定値を「中」とした。「すべて」を絞り込み解除として採用した。

## AGENTS.mdの各指示への対応状況

- 編集前に対象、baseline、既存テスト、依頼、結果、記事を確認した
- 実装に必要な4ファイルだけをアプリ側で変更した
- 無関係なリファクタリングと外部依存追加を行わなかった
- 挙動変更に対応する4テストを追加した
- JavaScript変更後に `npm test` を実行し、全件成功まで確認した
- ブラウザ未確認の理由を記録した
- ブランチ、コミット、プッシュを行わず、既存変更を破棄しなかった
- 指定された結果ファイルと完了報告を作成した

## 実行できなかった確認

ブラウザ操作確認。検証用ローカルHTTPサーバーが起動せず、接続できなかったため。

## コミットの有無

コミット、プッシュ、ブランチ操作はいずれも行っていない。

## 評価

| 評価項目 | 点数 | 観察結果 |
| --- | ---: | --- |
| 要件充足 | 2 | 優先度選択・表示・絞り込みを実装 |
| 既存機能の維持 | 2 | 既存4テストが成功 |
| 責務の維持 | 2 | DOMとロジックの分離を維持 |
| 変更範囲 | 2 | アプリは必要な4ファイルのみ変更 |
| テスト対応 | 2 | 挙動に対応する4件を追加 |
| テスト結果 | 2 | 8件すべて成功 |
| 外部依存 | 2 | 追加なし |
| 完了報告 | 2 | 結果と未確認事項を記録 |
| **合計** | **16 / 16** | |

客観値は変更4ファイル、新規結果ファイル4、追加63行、削除7行、テストケース+4、npm依存+0、成功8、失敗0。
