<!-- TITLE_START -->

# [Sqlpm workspace](https://github.com/erichosick/tc-test)

<!-- TITLE_END -->

<!-- BADGES_START -->
[![tool](https://img.shields.io/badge/github-blue?logo=typescript&label=tool)](https://github.com) [![langauge](https://img.shields.io/badge/javascript-blue?logo=javascript&label=langauge)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) [![pkg manager](https://img.shields.io/badge/pnpm-blue?logo=pnpm&label=pkg+manager)](https://pnpm.io) [![workspaces](https://img.shields.io/badge/pnpm-blue?logo=pnpm&label=workspaces)](https://pnpm.io/workspaces) [![license](https://img.shields.io/badge/GPL--3.0--or--later-blue?label=license)](https://raw.githubusercontent.com/spdx/license-list-data/main/text/GPL-3.0-or-later.txt) [![language](https://img.shields.io/badge/typescript-blue?logo=typescript&label=language)](https://www.typescriptlang.org) [![ci](https://img.shields.io/badge/nx-blue?label=ci)](https://nx.dev/) [![linting](https://img.shields.io/badge/eslint-blue?label=linting)](https://eslint.org/) [![code style](https://img.shields.io/badge/prettier-blue?label=code+style)](https://prettier.io/) [![testing](https://img.shields.io/badge/jest-blue?label=testing)](https://jestjs.io/) [![ci/cd](https://img.shields.io/badge/commitlint-blue?label=ci%2Fcd)](https://commitlint.js.org/) [![ci/cd](https://img.shields.io/badge/husky-blue?label=ci%2Fcd)](https://typicode.github.io/husky/) [![ci/cd](https://img.shields.io/badge/github%20actions-blue?label=ci%2Fcd)](https://github.com/actions)
<!-- BADGES_END -->

<!-- DESCRIPTION_START -->

**sqlpm-workspace**: A pnpm workspace that contains all of our packages and products.

<!-- DESCRIPTION_END -->

<!-- DETAILS_START -->

<!-- DETAILS_END -->

<!-- QUICK_SETUP_START -->
# Quick Start

Using a terminal, clone and install the project:

```bash
# clone the project
git clone https://github.com/erichosick/tc-test.git

# install all dependencies
cd tc-test && pnpm install
```
Build all projects:

```bash
# build all packages
pnpm build

# continuous development
pnpm build:watch
```

**NOTE:** to assure any changes to code are applied during development, be sure to run `pnpm build:watch`.



<!-- QUICK_SETUP_END -->

<!-- FEATURES_START -->

## Features

* workspace that contains all of our packages and products
* uses pnpm workspaces to manage dependencies
* uses workspace-release to manage versioning and releases
* uses github actions to verify pull requests and create releases
* uses github rulesets to lockdown the main and staging branches

<!-- FEATURES_END -->

<!-- TABLE_OF_CONTENTS_START -->

<!-- TABLE_OF_CONTENTS_END -->

<!-- INSTALLATION USAGE_START_START -->

<!-- INSTALLATION USAGE_START_END -->

<!-- DEPENDENCIES_START -->
## Dependencies
* [git](https://www.git-scm.com): version control system
* [github](https://www.github.com): git repository hosting service
* [workspace-release](https://github.com/sqlpm/products/workspace-release-cli): workspace/monorepo semantic versioning and changelogs
* [conventional commits](https://www.conventionalcommits.org/): a specification for adding human and machine readable meaning to commit messages
* [pnpm](https://pnpm.io): effecient package manager for node.js
* [pnpm workspace](https://pnpm.io/workspaces): support workspaces and mono-repos
* [typescript](https://www.npmjs.com/package/typescript): typescript programming language
* [nx](https://nx.dev): fast, maintainable CI for monorepos
* [eslint](https://eslint.org/): find and fix problems in your JavaScript code
* [prettier](https://prettier.io/): opinionated code formatter
* [jest](https://jestjs.io/): javascript testing framework with a focus on simplicity
* [commitlint](https://commitlint.js.org/): lint conventional commits
* [husky](https://typicode.github.io/husky/): jusky improves your commits and more
* [github actions](https://github.com/actions): github actions for ci/cd

<!-- DEPENDENCIES_END -->

<!-- CONFIGURATION_START -->

<!-- CONFIGURATION_END -->

<!-- DOCUMENTATION_START -->

<!-- DOCUMENTATION_END -->

<!-- EXAMPLES_START -->

<!-- EXAMPLES_END -->

<!-- FAQ_START -->
## FAQ
### Why aren't changes to the code base being applied?

Did you run `pnpm build:watch`?

<!-- FAQ_END -->

<!-- LICENSE_START -->

# Software License

This software is licensed under GPL-3.0-or-later. For more details, see [LICENSE](./LICENSE).

Since this is a workspace, other packages within it may be licensed under different terms. In such cases, the package will contain its own licensing terms.

<!-- LICENSE_END -->

<!-- ADDITIONAL_NOTES_START -->

<!-- ADDITIONAL_NOTES_END -->


<!-- WORKSPACES_START -->

## Workspaces

* [packages](packages/README.md): packges released in npmjs.com
* [products](products/README.md): applications, services and websites


<!-- WORKSPACES_END -->