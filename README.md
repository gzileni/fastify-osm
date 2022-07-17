# fastify-osm

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)  ![CI workflow](https://github.com/gzileni/fastify-osm/workflows/CI%20workflow/badge.svg)

Supports Fastify versions `4.x`

Plugin for Fastify to perform [OverPass](https://overpass-api.de) queries on OpenStreetMap 

## Install

```bash
npm i @fastify/osm
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
const queries = ['military=airfield', 'highway', 'landuse=industrial']
/** Calculates a buffer for input features for a given radius. */
const buffer = 0.5
/** Units supported are miles, kilometers (default), and degrees. */
const units = 'kilometers'
/** GeoJSON results */
const response = app.osm(bbox, queries, buffer, units)
console.log(JSON.stringify(response));

fastify.osm()

fastify.listen(3000)
```

## Acknowledgements

## License

Licensed under [MIT](./LICENSE)
