import sequelize from 'sequelize';
import { Sequelize } from 'sequelize';
import mongoose = require ("mongoose")
require('dotenv').config();

// export default dbConnection;


class Database {
  db : string;
  user : string;
  password : string;
  host : string;
  port : number;
  maxPool : number;
  minPool : number;
  database : sequelize.Sequelize
constructor() {
  this.db = process.env.DB_NAME
  this.user = process.env.DB_USER
  this.password = process.env.DB_PASS
  this.host = 'localhost'
  this.port = 3306
  this.maxPool = 100
  this.minPool = 1

  this.database = new Sequelize(this.db, this.user, this.password, {
    host: this.host,
    ssl: true,
    dialect: 'mysql',
    dialectOptions: {
      encrypt: true,
    },
    port: this.port,
    logging: false,
    pool: {
      max: this.maxPool,
      min: this.minPool,
      acquire: 100000,
      idle: 50000,
    },
  })
}
}
let database = new Database().database
export default database;