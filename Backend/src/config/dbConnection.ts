
  import Umzug from "umzug";

// require('pg').defaults.parseInt8 = true
import sequelize from 'sequelize';
import path from 'path';

// import dbConnection from "./db";
import database from "./db";
import mongoose from "mongoose";
import server from "../server";
const PORT = process.env.PORT||8080

const migrate = new Umzug({
    migrations: {
        // indicates the folder containing the migration .js files
        path: path.join(__dirname, '../migrations'),
        pattern: /\.js$/,
        // inject sequelize's QueryInterface in the migrations
        params: [database.getQueryInterface(), sequelize],
    },
    // indicates that the migration data should be store in the database
    // itself through sequelize. The default configuration creates a table
    // named `SequelizeMeta`.
    storage: 'sequelize',
    storageOptions: {
        sequelize: database,
    },
})

const seed = new Umzug({
    migrations: {
        // indicates the folder containing the migration .js files
        path: path.join(__dirname, '../seeders'),
        pattern: /\.js$/,
        // inject sequelize's QueryInterface in the migrations
        params: [database.getQueryInterface(), sequelize],
    },
    // indicates that the migration data should be store in the database
    // itself through sequelize. The default configuration creates a table
    // named `SequelizeMeta`.
    storage: 'sequelize',
    storageOptions: {
        sequelize: database,
    },
})

const databaseConnection = async () => {
    try {
        const result: any = await database.authenticate()
            .then(async () => {
                console.log('Connection has been established successfully ( DB ) .')
                try {
                                    await database.sync()
                                    console.log("Synced");
                                }
                                catch (error) {
                                    console.log("errorrrrr" + error);
                                }

                                mongoose.connect("mongodb://127.0.0.1:27017/mydb")
                                .then(()=>console.log("connect to db"))
                                .catch((error)=>console.log(error))
                               server.listen(PORT,()=>console.log("server is running in port 8080"))
                               



                await migrate.up()
                    .then(async () => {
                        console.log('All migrations performed successfully ( DB )')
                        await seed.up()
                            .then((onSeed: any) => {
                                console.log('Data seed successfull. ( DB )')
                                console.log("username for seeded user:anjana.bhardwaj@innobitsystems.com,password:rgbXYZ@9182");
                                
                                return Promise.resolve()
                            }).catch((err: any) => {
                                console.log(err)
                                console.log('Seeder failed ( DB )');
                                return Promise.reject()
                            })
                        return Promise.resolve()
                    }).catch((err: any) => {
                        console.log(err)
                        console.log('Migration failed ( DB )');
                        return Promise.reject()

                    })
                return Promise.resolve()
            }).catch((err) => {
                console.log('Unable to connect to the database: ( DB )', err);
                return Promise.reject()
            })
        return Promise.resolve()
    }
    catch (err) {
        console.log('Failed to connect with Database')
        return Promise.reject()
    }
}

export default databaseConnection;