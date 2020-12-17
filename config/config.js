module.exports = {
  development: {
    dialect: 'sqlite',
    storage: './db.development.sqlite'
  },
  test: {
    dialect: 'sqlite',
    storage: ':memory:'
  },
  production: {
    host: process.env.host,
    port: process.env.port,
    user: process.env.username,
    password: process.env.password,
    database: process.env.database
  }
}