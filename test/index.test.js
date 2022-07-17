const { test } = require('tap')

test('should register the correct decorator', async t => {
  t.plan(1)

  const app = require('fastify')()

  app.register(require('..'))

  await app.ready()

  const bbox = [
    '7.265396118164062',
    '45.687715074360916',
    '7.414398193359375',
    '45.697715074360916'
  ]
  const queries = ['military=airfield', 'highway', 'landuse=industrial']
  const buffer = 0.5
  const units = 'kilometers'
  const response = app.osm(bbox, queries, buffer, units)
  console.log(JSON.stringify(response))
  t.type(response, Object)
})
