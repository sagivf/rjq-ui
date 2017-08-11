#!/usr/bin/env node

const rjqUI = require('../index')
const program = require('commander')
const Koa = require('koa')

//const basicAuthentication = require('')

program
  .option('-d, --db-name [value]', '[optional] agenda ui database name')
  .option('-s, --db-host [value]', '[optional] db server host address')
  .option('-u, --db-user [value]', '[optional] db user name')
  .option('-w, --db-password [value]', '[optional] db user password')
  .option('-i, --db-port [value]', '[optional] db port')
  .option('-c, --db-certfile [value]', '[optional] db cert file')
  .option('-p, --port [value]', '[optional] Server port, default process.env || 3000', process.env.port || 3000)
  .parse(process.argv)

const { port, dbName, dbHost, dbPort, dbUser, dbPassword, dbCertfile } = program
const app = new Koa()
const options = {}

if (dbName || dbHost || dbPort || dbUser || dbPassword) {
  options.connection = {
    db: dbName,
    host: dbHost,
    port: dbPort,
    user: dbUser,
    password: dbPassword
  }
}

if (dbCertfile) {
  const fs = require('fs')
  const cert = fs.readFileSync(dbCertfile)
  options.connection = options.connection || {}
  options.connection.ssl = {
    ca: cert
  }
}

app.use(rjqUI('koa', '/', options))

const listener = app.listen(port)
console.info(`Address: ${JSON.stringify(listener.address())}`)
console.info(`Navigate To: http://localhost:${listener.address().port}/`)