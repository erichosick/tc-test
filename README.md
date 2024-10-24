<!-- TITLE_START -->

# [Sqlpm workspace](https://github.com/erichosick/tc-test)

<!-- TITLE_END -->

<!-- BADGES_START -->
[![tool](https://img.shields.io/badge/github-blue?logo=typescript&label=tool)](https://github.com) [![langauge](https://img.shields.io/badge/javascript-blue?logo=javascript&label=langauge)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) [![pkg manager](https://img.shields.io/badge/pnpm-blue?logo=pnpm&label=pkg+manager)](https://pnpm.io) [![workspaces](https://img.shields.io/badge/pnpm-blue?logo=pnpm&label=workspaces)](https://pnpm.io/workspaces) [![license](https://img.shields.io/badge/GPL--3.0--or--later-blue?label=license)](https://raw.githubusercontent.com/spdx/license-list-data/main/text/GPL-3.0-or-later.txt)
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

<!-- DEPENDENCIES_END -->

<!-- CONFIGURATION_START -->

<!-- CONFIGURATION_END -->

<!-- DOCUMENTATION_START -->

<!-- DOCUMENTATION_END -->

<!-- EXAMPLES_START -->

<!-- EXAMPLES_END -->

<!-- FAQ_START -->

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