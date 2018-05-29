exports.connOptions = {
  db: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  servers: [{
    host: process.env.DB_HOST,
    port: process.env.DB_PORT
  }],
  max: 2
}

exports.qOptions = {
  db: process.env.DB_NAME, // The name of the database in RethinkDB
  name: 'RegistrationEmail' // The name of the table in the database
}
