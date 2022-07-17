'use strict'

const queryOverpass = require('@derhuerst/query-overpass')
const osmtogeojson = require('osmtogeojson')
const turf = require('@turf/turf')

const fp = require('fastify-plugin')

module.exports = fp(async function (fastify, opts) {
  fastify.decorate('osm', async (bbox, queries, buffer, unit) => {
    const u = unit !== null && unit !== undefined ? unit : 'meters'

    const bb = bbox.join(',')
    let q = '[out:json][timeout:25];('
    queries.forEach(c => (q += `node[${c}](${bb}); way[${c}](${bb}); relation[${c}](${bb});`))
    q += ');out body; >; out skel qt;'
    const resultOsmGeojson = osmtogeojson({
      elements: await queryOverpass(q)
    })
    if (buffer !== null && buffer !== undefined) {
      const resultOsmGeojsonBuffered = turf.buffer(resultOsmGeojson, buffer, { units: u })
      console.log('Buffered: ' + JSON.stringify(resultOsmGeojsonBuffered))
      return resultOsmGeojsonBuffered
    } else {
      console.log(JSON.stringify(resultOsmGeojson))
      return resultOsmGeojson
    }
  })
}, { fastify: '4.x' })
