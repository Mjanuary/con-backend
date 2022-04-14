const config = require("config");
const Pool = require("pg").Pool;
const pool = new Pool({
  user: config.get(`${config.get("status")}.user`),
  host: config.get(`${config.get("status")}.host`),
  database: config.get(`${config.get("status")}.database`),
  password: config.get(`${config.get("status")}.password`),
  port: config.get(`${config.get("status")}.port`),
});

pool.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = pool;
