# fastify-osm

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)  ![CI workflow](https://github.com/gzileni/fastify-osm/workflows/CI%20workflow/badge.svg)

Supports Fastify versions `4.x`

Plugin for Fastify to perform [OverPass](https://overpass-api.de) queries on OpenStreetMap 

## Install

```bash
npm i fastify-osm
```

## Usage

Require `fastify-osm` and register.

```javascript
const fastify = require('fastify')()

fastify.register(require('fastify-osm'))

/** bbox coordinates to run query overpass */
const bbox = [
  '7.265396118164062',
  '45.687715074360916',
  '7.414398193359375',
  '45.697715074360916'
]

/** 
 * array's node to run query overpass 
 * 
 * Example:
 * military=airfield -> Military airports
 * highway -> all roads
 * landuse=industrial
 * */
const params = {
  queries: ['military=airfield', 'highway', 'landuse=industrial'],
  buffer: 0.5,          // Calculates a buffer for input features for a given radius.
  units: 'kilometers',  // Units supported are miles, kilometers (default), and degrees.
  endpoint: 'https://overpass-api.de/api/interpreter'  // DEFAULT: https://overpass-api.de/api/interpreter
}
/** GeoJSON results */
const response = fastify.osm(params)
console.log(JSON.stringify(response));
fastify.listen(3000)
```

## Acknowledgements

## License

Licensed under [MIT](./LICENSE)
