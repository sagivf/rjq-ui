const assert = require('assert')
const path = require('path')

const middleware = {
  koa (route, options) {
    const Koa = require('koa')
    const serve = require('koa-static')
    const rjqApiKoa = require('rjq-api-koa')
    const mount = require('koa-mount')

    const rjqMount = rjqApiKoa(options)
    const app = new Koa()

    app.use(rjqMount)
    app.use(serve(path.join(__dirname, '/build')))

    return mount(route, app)
  },
  express (route, options) {
    const express = require('express')
    const rjqApiExpress = require('rjq-api-express')

    const rjqMount = rjqApiExpress(options)
    const app = express()

    app.use(route, rjqMount)
    app.use(route, express.static(path.join(__dirname, '/build')))

    return app
  }
}

module.exports = function (type, route = '/rjq-ui', options) {
  assert(type, `missing the middelware type: ${Object.keys(middleware)}`)
  return middleware[type](route, options)
}
