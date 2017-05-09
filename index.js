const serve = require('koa-static')
const mount = require('koa-mount')
const Koa = require('koa')
const rjqApiKoa = require('rjq-api-koa')

const {
  PORT = 4000,
  RETHINK_PORT = 15157,
  RETHINK_HOST = 'aws-eu-central-1-portal.0.dblayer.com',
  RETHINK_USER = 'admin',
  RETHINK_PASSWORD = 'DILlJZz2HlHLh3DQAAJuCOOCrnLc54ucmgs882-Bzgc'
} = process.env

let {
  RETHINK_CERT
} = process.env

if (!RETHINK_CERT) {
  console.log('certttt')
  const fs = require('fs')
  RETHINK_CERT = fs.readFileSync('cert')
}

console.log(RETHINK_CERT)
const app = new Koa()
const staticPages = new Koa()

staticPages.use(serve('./public'))
staticPages.use(serve('./public/static'))

app.use(mount('/', staticPages))
app.use(mount('/public/static', staticPages))

app
  .use(rjqApiKoa('/rjq-api', {
    queues: ['Mathematics', 'RegistrationEmail'],
    db: 'JobQueue',
    user: RETHINK_USER,
    password: RETHINK_PASSWORD,
    host: RETHINK_HOST,
    port: RETHINK_PORT,
    ssl: {
      ca: RETHINK_CERT
    }
  }))
  .listen(PORT)

console.log(`Running api at: http://localhost:${PORT}`)
