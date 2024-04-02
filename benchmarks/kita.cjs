'use strict'

const path = require('path')

globalThis.KITA_PROJECT_ROOT = path.resolve(__dirname, '../kita/dist')

const { Kita } = require('@kitajs/runtime')
const fastify = require('fastify')

const app = fastify()

app.register(Kita, {
  fastifyScalarUi: false,
  fastifySwagger: false
})

app.listen({ port: 3000, host: '127.0.0.1' })
