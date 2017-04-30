# await-to-js

[![NPM version][npm-image]][npm-url]
[![Downloads][download-badge]][npm-url]
[![Coveralls][coveralls-image]][coveralls-url]

> Async await wrapper for easy error handling

## Install

```sh
yarn add await-to-ts
```

OR

```sh
npm i --save await-to-ts
```

## Usage

```js
import to from 'await-to-ts'

const f = () => Promise.resolve(42)
const g = () => Promise.resolve('42')

async function main() {
  const [err, n] = await to(f())
  if (err) {
    throw err
  }

  console.log(n) // n is a number

  const [err1, s] = await to(g())
  if (err) {
    throw err
  }

  console.log(s) // s is a string
}

main()
```

[npm-url]: https://npmjs.org/package/await-to-ts
[npm-image]: https://img.shields.io/npm/v/await-to-ts.svg?style=flat-square

[travis-url]: https://travis-ci.org/phra/await-to-ts
[travis-image]: https://img.shields.io/travis/phra/await-to-ts.svg?style=flat-square

[coveralls-url]: https://coveralls.io/r/phra/await-to-ts
[coveralls-image]: https://img.shields.io/coveralls/phra/await-to-ts.svg?style=flat-square

[depstat-url]: https://david-dm.org/phra/await-to-ts
[depstat-image]: https://david-dm.org/phra/await-to-ts.svg?style=flat-square

[download-badge]: http://img.shields.io/npm/phra/await-to-ts.svg?style=flat-square
