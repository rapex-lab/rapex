# Rapex

A platform for discovering Response to Air Pollution EXposure

## Installation

### Clone the repo

```bash
git clone https://github.com/rapex-lab/rapex.git
```

### Compile it

```bash
./bin/lein uberjar
```

### Launch a postgresql instance for testing

```
bash create-db.sh rapex_dev 54320
```

### Launch rapex

```bash
export MIGRATE_DB=true
export JAVA_OPTS='-Dconf=./example-conf.edn'

bash bin/start
```

### Launch frontend

```bash
cd studio && yarn start:local-dev

# Release it to GitHub
cd studio && yarn build && yarn gh-pages
```

## Usage

FIXME: explanation

    $ java -jar rapex-0.1.0-standalone.jar [args]

## Options

FIXME: listing of options this app accepts.

## Examples

...

### Bugs

...

### Any Other Sections
### That You Think
### Might be Useful

## License

Copyright © 2022 FIXME

This program and the accompanying materials are made available under the
terms of the Eclipse Public License 2.0 which is available at
http://www.eclipse.org/legal/epl-2.0.

This Source Code may also be made available under the following Secondary
Licenses when the conditions for such availability set forth in the Eclipse
Public License, v. 2.0 are satisfied: GNU General Public License as published by
the Free Software Foundation, either version 2 of the License, or (at your
option) any later version, with the GNU Classpath Exception which is available
at https://www.gnu.org/software/classpath/license.html.
