# Contributing to @vuepic/vue-datepicker

As an open source project, the best way to support @vuepic/vue-datepicker is to contribute to its development.
You can start with reporting new issues, improving the docs, or - if you feel confident enough
to dive into the source code - send a pull request!

## Found a bug?

If you find a bug in the code, you can help by [submitting an issue](#submitting-an-issue)


## Missing a feature?

You can *request* a new feature by [submitting a request issue](https://github.com/Vuepic/vue-datepicker/issues/new?assignees=&labels=&template=feature_request.md&title=) to this GitHub
Repository. If you would like to *implement* a new feature, please submit an issue with a proposal for your work first,
so we can discuss what is the best way to implement, as well as to be sure nobody else works on that already.

> Do not create PRs for features that are not approved first in the issue tracker.

## Submission guidelines

### Submitting an issue

If you find a bug in the source code, you can help by [submitting an issue](https://github.com/Vuepic/vue-datepicker/issues/new?template=bug_report.md)

> You must follow the issue template. If no info is provided for reproduction, the issue will be closed without review.

Before you submit an issue, please search the issue tracker, maybe an issue for your problem already exists and the discussion
might inform you of workarounds readily available.

### Submitting a pull request

Before you submit your pull request, ensure the following guidelines are followed:

- Fork the project, install NPM dependencies using `pnpm` and start the development server from  the `playground` folder.
- Commit your changes using a descriptive commit message that follows defined [commit message guidelines](#commit-message-guidelines).
- Push the code to your forked repository and create a pull request on GitHub.
- If somebody from project contributors suggests changes, then:
    - Make the required updates.
    - Re-run all test suites to ensure tests are still passing.
    - Rebase your branch and force push to your GitHub repository (this will update your Pull Request). Basically you can
      use `git commit -a --amend` and `git push --force origin my-fix-branch` in order to keep single commit in the feature
      branch.

That's it! Thank you for your contribution!

## Coding standard

To ensure consistency throughout the source code, keep these rules in mind as you are working:

- All features or bug fixes **must be tested**, ideally by unit tests.
- If you are implementing a new feature or extending public API, you should **document it**.
- Ensure that the following scripts pass without errors:
  - `pnpm --filter @vuepic/vue-datepicker build`
  - `pnpm --filter @vuepic/vue-datepicker test`


## Commit Message Guidelines

The project follows [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/).