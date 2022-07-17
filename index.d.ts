import { FastifyPluginCallback } from 'fastify'

declare module 'fastify' {
  export interface FastifyInstance {
    // This is an example decorator type added to fastify
    osm: (bbox: number[], queries: string[], buffer: number) => any
  }
}

declare const osm: FastifyPluginCallback<(bbox: number[], queries: string[], buffer: number) => any>

export { osm }
export default osm
