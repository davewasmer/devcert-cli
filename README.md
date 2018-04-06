devcert-cli
===========

A CLI wrapper for devcert, to manage development SSL/TLS certificates and domains

[![Version](https://img.shields.io/npm/v/devcert-cli.svg)](https://npmjs.org/package/devcert-cli)
[![Downloads/week](https://img.shields.io/npm/dw/devcert-cli.svg)](https://npmjs.org/package/devcert-cli)
[![License](https://img.shields.io/npm/l/devcert-cli.svg)](https://github.com/davewasmer/devcert-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g devcert-cli
$ devcert COMMAND
running command...
$ devcert (-v|--version|version)
devcert-cli/1.0.0 darwin-x64 node-v9.11.0
$ devcert --help [COMMAND]
USAGE
  $ devcert COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [devcert disable [DOMAIN]](#devcert-disable-domain)
* [devcert generate [DOMAIN]](#devcert-generate-domain)
* [devcert help [COMMAND]](#devcert-help-command)
* [devcert list](#devcert-list)

## devcert disable [DOMAIN]

delete the cached certificate for a domain

```
USAGE
  $ devcert disable [DOMAIN]
```

_See code: [src/commands/disable.ts](https://github.com/davewasmer/devcert-cli/blob/v1.0.0/src/commands/disable.ts)_

## devcert generate [DOMAIN]

generate an SSL/TLS private key and certificate for a domain

```
USAGE
  $ devcert generate [DOMAIN]

OPTIONS
  --skipCertutilInstall  don't attempt to install nss / certutil tooling (needed on some platforms to automate setup)
  --skipHostsFile        don't attempt to modify the /etc/hosts file to support custom domains
```

_See code: [src/commands/generate.ts](https://github.com/davewasmer/devcert-cli/blob/v1.0.0/src/commands/generate.ts)_

## devcert help [COMMAND]

display help for devcert

```
USAGE
  $ devcert help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v1.2.2/src/commands/help.ts)_

## devcert list

list the domains that devcert has generated a certificate for

```
USAGE
  $ devcert list

EXAMPLE
  $ devcert list
  Configured domains:

  my-app.test
  client-project.test
```

_See code: [src/commands/list.ts](https://github.com/davewasmer/devcert-cli/blob/v1.0.0/src/commands/list.ts)_
<!-- commandsstop -->
