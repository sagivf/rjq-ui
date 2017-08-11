const rjqUI = require('../../index')
const Koa = require('koa')
const app = new Koa()

app.use(rjqUI('koa'))

app.use(async ctx => {
  ctx.body = 'Hello World'
})

const listener = app.listen(0)
console.info(`Address: ${JSON.stringify(listener.address())}`)
console.info(`Navigate To: http://localhost:${listener.address().port}/rjq-ui/`)
