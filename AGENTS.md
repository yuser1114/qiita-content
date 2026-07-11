# Repository instructions

## Repository overview

This repository contains Qiita articles and local source code used for technical verification.

- Qiita article sources are stored under `public/`.
- Verification source code is stored under `src/`.
- The verification project for July 11, 2026 is stored under `src/20260711/`.
- Each experiment must remain independent so its result can be compared with the common baseline.

## Before starting work

- Run `git status --short` before editing.
- Inspect the files related to the requested task before deciding how to implement it.
- Read the applicable `package.json`, existing source files, and existing tests.
- Understand the current responsibilities of each file before making changes.
- Preserve all existing uncommitted changes.
- Do not assume that a file can be overwritten solely because it appears generated or temporary.

## Scope and change control

- Modify only the experiment directory, result directory, and article sections required by the current task.
- Do not modify `src/20260711/baseline`.
- Do not modify completed experiment directories unless explicitly requested.
- Keep the diff focused on the requested behavior.
- Do not perform unrelated refactoring, renaming, formatting, or file reorganization.
- Do not add speculative features that were not requested.
- Do not add external dependencies unless the user explicitly requests them.
- Do not change package versions or package manager configuration unless required by the request.

## Task application architecture

For task management applications under `src/20260711/experiments/`:

- Keep task data creation, validation, updating, deletion, and filtering logic in `src/taskManager.js`.
- Keep DOM access, event registration, rendering, and browser interaction in `src/app.js`.
- Keep markup and page-specific presentation in `index.html`.
- Do not introduce DOM dependencies into `taskManager.js`.
- Prefer small functions with clear responsibilities.
- Preserve existing exported functions and behavior unless a change is required by the request.
- Follow the naming and coding style already used by the baseline.
- Avoid duplicating the same business rule in multiple files.

## Testing rules

- When application behavior changes, add or update tests for the changed business logic.
- Preserve all existing tests.
- Include tests for the main successful behavior.
- Include a boundary or invalid-input test when the changed logic accepts input values.
- Include a regression test for existing behavior when the change could affect it.
- Use the existing Node.js standard test runner.
- Do not add a new testing framework.
- Run `npm test` from the applicable experiment directory after implementation.
- Do not report the task as complete while tests are failing.
- When an initial test run fails and is later fixed, record both the failure and the final result.
- If a test cannot be executed, clearly report why.

## Manual verification

When browser behavior changes, verify the relevant user operations when the available environment permits it.

Confirm both the new behavior and existing behavior that could be affected.

If browser verification cannot be performed:

- Do not claim that it was performed.
- Record which operations remain unverified.
- Explain the reason briefly.

## Result recording

For comparison experiments:

- Save the actual test output.
- Save the diff between the common baseline and the experiment.
- Save the diff statistics.
- Record files inspected, files changed, commands executed, and checks performed.
- Record decisions that were not explicitly stated in the feature request.
- Do not alter previous experiment results to make the comparison appear more favorable.

## Qiita article rules

- Preserve existing article content unless the current task explicitly requires updating it.
- Write only results that were actually observed.
- Replace private absolute paths with repository-relative paths in the article.
- Do not include personal information, credentials, company names, or confidential business details.
- Prefer concise excerpts over full diff or log output.
- Separate observed results from interpretation.
- State limitations that prevent a strong conclusion.

## Git rules

- Do not create or switch branches unless explicitly requested.
- Do not commit or push unless explicitly requested.
- Do not amend existing commits.
- Do not use commands that discard changes, including `git reset --hard` and `git clean -fd`.
- Do not overwrite or remove existing uncommitted work.

## Completion report

At the end of the task, report:

1. What was implemented
2. Files inspected
3. Files changed or created
4. Tests and checks performed
5. Test results
6. Manual checks performed
7. Checks that could not be performed
8. Important implementation decisions
9. Whether a commit or push was performed

