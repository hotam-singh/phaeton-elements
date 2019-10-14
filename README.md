# Phaeton Elements

Phaeton Elements is a JavaScript library for [Phaeton][Phaeton Core GitHub], the blockchain application platform.

[![Build Status](https://jenkins.phaeton.io/buildStatus/icon?job=phaeton-elements/development)](https://jenkins.phaeton.io/job/phaeton-elements/job/development/)
<a href="https://david-dm.org/PhaetonHQ/phaeton-elements"><img src="https://david-dm.org/PhaetonHQ/phaeton-elements.svg" alt="Dependency Status"></a>
<a href="https://david-dm.org/PhaetonHQ/phaeton-elements/?type=dev"><img src="https://david-dm.org/PhaetonHQ/phaeton-template/dev-status.svg" alt="devDependency Status"></a>
[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)

## Installation

### Installation via npm

Add Phaeton Elements as a dependency of your project:

```sh
$ npm install --save phaeton-elements
```

Import using ES6 modules syntax:

```js
import phaeton from 'phaeton-elements';
```

Or using Node.js modules:

```js
const phaeton = require('phaeton-elements');
```

Or import specific namespaced functionality:

```js
import { APIClient, transactions } from 'phaeton-elements';
// or
const { APIClient, transactions } = require('phaeton-elements');
```

**Note:** If you are installing Phaeton Elements as an npm dependency via a GitHub reference, you will need to manually build the distribution files by running the following commands from the root directory of your project:

```
cd node_modules/phaeton-elements
npm run build
```

### Installation via CDN

Include the following script using the following HTML. The `phaeton` variable will be exposed.

```html
<script src="https://js.phaeton.io/phaeton-elements-1.0.0.js"></script>
```

Or minified:

```html
<script src="https://js.phaeton.io/phaeton-elements-1.0.0.min.js"></script>
```

### Installation from source

Our source code is hosted on GitHub. You can build the distribution yourself by cloning the repository, installing the relevant dependencies and running our build script as follows:

```
git clone https://github.com/PhaetonHQ/phaeton-elements.git
cd phaeton-elements
npm install
npm run build
```

## Usage

Access functionality via the relevant namespace. For example, the following will create and (locally) sign a transfer (type 0) transaction, and then broadcast it to the Phaeton Testnet.

```js
const transaction = phaeton.transaction.transfer({
	amount: '123000000',
	recipientId: '12668885769632475474L',
	passphrase: 'robust swift grocery peasant forget share enable convince deputy road keep cheap',
});

const client = phaeton.APIClient.createTestnetAPIClient();

client.transactions.broadcast(transaction)
	.then(console.info)
	.catch(console.error);
```

Full documentation can be found on the [Phaeton documentation site][].

## Contributors

https://github.com/PhaetonHQ/phaeton-elements/graphs/contributors

## License

Copyright © 2016-2018 Phaeton Foundation

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the [GNU General Public License](https://github.com/PhaetonHQ/phaeton-elements/tree/master/LICENSE) along with this program.  If not, see <http://www.gnu.org/licenses/>.

***

This program also incorporates work previously released with phaeton-js `v0.5.1` (and earlier) versions under the [MIT License](https://opensource.org/licenses/MIT). To comply with the requirements of that license, the following permission notice, applicable to those parts of the code only, is included below:

Copyright © 2016-2017 Phaeton Foundation

Copyright © 2015 Crypti

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


[Phaeton Core GitHub]: https://github.com/PhaetonHQ/phaeton
[Phaeton documentation site]: https://phaeton.io/documentation/phaeton-elements
# phaeton-elements
