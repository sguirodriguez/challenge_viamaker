require("dotenv").config;

module.exports = {
  "production": {
    "username": String(process.env.DB_USERNAME),
    "password": String(process.env.DB_PASSWORD),
    "database": String(process.env.DB_DATABASE),
    "host": String(process.env.DB_HOST),
    "dialect": "postgres",
  }
}
