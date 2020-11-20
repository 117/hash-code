# hash-code

![version](https://img.shields.io/github/package-json/v/117/hash-code?color=196DFF&style=flat-square)
![language](https://img.shields.io/github/languages/code-size/117/hash-code?color=F1A42E&style=flat-square)
![maintenance](https://img.shields.io/github/workflow/status/117/hash-code/test?style=flat-square)
![prettier](https://img.shields.io/static/v1?label=code%20style&message=prettier&color=ff51bc&style=flat-square)

generate a hash code value for an object

## Contents

- [Features](#features)
- [Install](#install)
- [Usage](#usage)
- [Contributing](#contributing)

## Features

- [x] Fast.
- [x] Same functionality as Java's `hashCode()`

## Install

From NPM:

```cmd
> npm i @master-chief/hash-code
```

## Usage

```typescript
import hashcode from '@master-chief/hash-code'

console.log(hashcode({ cat: 'meow' })))
// output: 1225469654
```

## Contributing

Pull requests are encouraged 😍!
