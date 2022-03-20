# Contributing to @vuepic/vue-datepicker

As an open source project, the best way to support @vuepic/vue-datepicker is to contribute to its development.
You can start with reporting new issues, improving the docs, or - if you feel confident enough
to dive into the source code - send a pull request!

**Any help is much appreciated!**

## Found a bug?

If you find a bug in the source code, you can help by [submitting an issue](https://github.com/Vuepic/vue-datepicker/issues/new?assignees=&labels=&template=bug_report.md&title=)

## Missing a feature?

You can *request* a new feature by [submitting a request issue](https://github.com/Vuepic/vue-datepicker/issues/new?assignees=&labels=&template=feature_request.md&title=) to this GitHub
Repository. If you would like to *implement* a new feature, please submit an issue with a proposal for your work first,
so we can discuss what is the best way to implement, as well as to be sure nobody else works on that already.

## Submission guidelines

### Submitting an issue

Before you submit an issue, please search the issue tracker, maybe an issue for your problem already exists and the discussion
might inform you of workarounds readily available.

Please provide steps to reproduce for found bug. This will help to understand and fix the issue faster.

### Submitting a pull request

Before you submit your pull request consider the following guidelines:

- Fork the project, install NPM dependencies and start the development server.
- Follow defined [coding standard](#coding-standard).
- Commit your changes using a descriptive commit message that follows defined [commit message conventions](#commit-message-guidelines).
- Push the code to your forked repository and create a pull request on GitHub.
- If somebody from project contributors suggest changes then:
    - Make the required updates.
    - Re-run all test suites to ensure tests are still passing.
    - Rebase your branch and force push to your GitHub repository (this will update your Pull Request). Basically you can
      use `git commit -a --amend` and `git push --force origin my-fix-branch` in order to keep single commit in the feature
      branch.

That's it! Thank you for your contribution!

## <a name="coding-standard"></a> Coding standard

To ensure consistency throughout the source code, keep these rules in mind as you are working:

- All features or bug fixes **must be tested**, ideally by unit tests.
- If you are implementing a new feature or extending public API, you should **document it**.
- Follow defined rules in [.eslintrc.js](../.eslintrc.js) and [.prettier.js](../.prettierrc.js).
  when you submit your PR.

Some highlights:

- use 4 spaces for indentation
- always use semicolons
- always use trailing comma
- use single quotes where possible
- prefer `const` over `let` (and do not use `var`)

## Commit Message Guidelines

The project have very precise rules over how git commit messages can be formatted. This leads to
**more readable messages** that are easy to follow when looking through the **project history**.

```
{type}({scope - optional}): {subject}
<BLANK LINE>
{body}
<BLANK LINE>
{footer}
```

#### Subject - {subject}

Summary of the changes made.

#### Allowed Types - {types}

- feat -> feature
- fix -> bug fix
- docs -> documentation
- style -> formatting, lint stuff
- refactor -> code restructure without changing external behavior
- test -> adding missing tests
- chore -> maintenance
- rearrange -> files moved, added, deleted etc
- update -> update code (versions, library compatibility)

#### Scope - {scope}

Where the change was (i.e. the file, the component, the package).