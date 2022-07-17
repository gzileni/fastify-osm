# @fastify/osm

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)  ![CI workflow](https://github.com/gzileni/fastify-osm/workflows/CI%20workflow/badge.svg)

Supports Fastify versions `4.x`

## Install

```bash
npm i @fastify/osm
```

## Usage

Require `@fastify/osm` and register.

```javascript
const fastify = require('fastify')()

fastify.register(require('@fastify/osm'), {
  // put your options here
})

fastify.listen(3000)
```

## Acknowledgements

## License

Licensed under [MIT](./LICENSE)
