# get_icon

## Introduction

Get favicon of website based on website url.

## Install
```shell
npm install @tidus/get_icon --save
# or
yarn add @tidus/get_icon
```

## Usage
```javascript
const { get_icon } = require('@tidus/get_icon')
let icon_url = await get_icon('https://github.com')
console.log(icon_url)
```

## Test

```shell
yarn test
```

## Coverage
```shell
yarn coverage
```
