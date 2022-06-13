oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @scraping.house/cli
$ s COMMAND
running command...
$ s (--version)
@scraping.house/cli/0.0.0 darwin-x64 node-v17.3.0
$ s --help [COMMAND]
USAGE
  $ s COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`s help [COMMAND]`](#s-help-command)
* [`s plugins`](#s-plugins)
* [`s plugins:install PLUGIN...`](#s-pluginsinstall-plugin)
* [`s plugins:inspect PLUGIN...`](#s-pluginsinspect-plugin)
* [`s plugins:install PLUGIN...`](#s-pluginsinstall-plugin-1)
* [`s plugins:link PLUGIN`](#s-pluginslink-plugin)
* [`s plugins:uninstall PLUGIN...`](#s-pluginsuninstall-plugin)
* [`s plugins:uninstall PLUGIN...`](#s-pluginsuninstall-plugin-1)
* [`s plugins:uninstall PLUGIN...`](#s-pluginsuninstall-plugin-2)
* [`s plugins update`](#s-plugins-update)

## `s help [COMMAND]`

Display help for s.

```
USAGE
  $ s help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for s.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.10/src/commands/help.ts)_

## `s plugins`

List installed plugins.

```
USAGE
  $ s plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ s plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.1.0/src/commands/plugins/index.ts)_

## `s plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ s plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ s plugins add

EXAMPLES
  $ s plugins:install myplugin 

  $ s plugins:install https://github.com/someuser/someplugin

  $ s plugins:install someuser/someplugin
```

## `s plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ s plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ s plugins:inspect myplugin
```

## `s plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ s plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ s plugins add

EXAMPLES
  $ s plugins:install myplugin 

  $ s plugins:install https://github.com/someuser/someplugin

  $ s plugins:install someuser/someplugin
```

## `s plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ s plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ s plugins:link myplugin
```

## `s plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ s plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ s plugins unlink
  $ s plugins remove
```

## `s plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ s plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ s plugins unlink
  $ s plugins remove
```

## `s plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ s plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ s plugins unlink
  $ s plugins remove
```

## `s plugins update`

Update installed plugins.

```
USAGE
  $ s plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
