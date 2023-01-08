## @magic-modules/p

this is the [@magic-modules](https://github.com/magic-modules) P component.

if it receives a string as argument, it will return a paragraph wrapping it.
if an array is received, a div containing multiple paragraphs will be returned.

[![NPM version][npm-image]][npm-url]
[![Linux Build Status][travis-image]][travis-url]
[![Windows Build Status][appveyor-image]][appveyor-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![Greenkeeper badge][greenkeeper-image]][greenkeeper-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]

#### install:

```bash
npm install --save-exact @magic-modules/p
```

#### usage:

##### markdown:

```markdown
<P>Text to wrap</P>
```

##### javascript:

```javascript
export const View = () => [P('Text to wrap')]
```

##### array:

```javascript
export const View = () => [
  P([
    'First paragraph',
    'Second paragraph',
    ['paragraph with a ', Link({ to: '/' }, 'link'), ' wrapped in the text.'],
  ]),
]
```

#### changelog

##### 0.0.1

first release.

##### 0.0.2 - unreleased

...

[npm-image]: https://img.shields.io/npm/v/@magic-modules/p.svg
[npm-url]: https://www.npmjs.com/package/@magic-modules/p
[travis-image]: https://img.shields.io/travis/com/magic-modules/p/master
[travis-url]: https://travis-ci.com/magic-modules/p
[appveyor-image]: https://img.shields.io/appveyor/ci/magicmodules/p/master.svg
[appveyor-url]: https://ci.appveyor.com/project/magicmodules/p/branch/master
[coveralls-image]: https://coveralls.io/repos/github/magic-modules/p/badge.svg
[coveralls-url]: https://coveralls.io/github/magic-modules/p
[greenkeeper-image]: https://badges.greenkeeper.io/magic-modules/p.svg
[greenkeeper-url]: https://badges.greenkeeper.io/magic-modules/p.svg
[snyk-image]: https://snyk.io/test/github/magic-modules/p/badge.svg
[snyk-url]: https://snyk.io/test/github/magic-modules/p
