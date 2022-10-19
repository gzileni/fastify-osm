'use strict'

const queryOverpass = require('@derhuerst/query-overpass')
const osmtogeojson = require('osmtogeojson')
const turf = require('@turf/turf')
const fp = require('fastify-plugin')

module.exports = fp(async function (fastify, opts) {
  fastify.decorate('osm', async (params) => {
    const endpoint = params.endpoint ? params.endpoint : 'https://overpass-api.de/api/interpreter';
    const u = params.unit !== null && params.unit !== undefined ? params.unit : 'kilometers'
    /** invert lat/lon */
    const bboxInverted = [params.bbox[1], params.bbox[0], params.bbox[3], params.bbox[2]]
    const bb = bboxInverted.join(',')
    let q = '[out:json][timeout:25];('
    params.queries.forEach(c => (q += `node[${c}](${bb}); way[${c}](${bb}); relation[${c}](${bb});`))
    q += ');out body; >; out skel qt;'
    const resultOsmGeojson = osmtogeojson({
      elements: await queryOverpass(q, { endpoint: endpoint })
    })
    if (buffer !== null && buffer !== undefined) {
      const resultOsmGeojsonBuffered = turf.buffer(resultOsmGeojson, params.buffer, { units: u })
      return resultOsmGeojsonBuffered
    } else {
      return resultOsmGeojson
    }
  })
}, { fastify: '4.x' })
