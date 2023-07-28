require('dotenv').config();
import http = require('http');
import expressServer from "./server"
// const connectPSQlDb = require('./config/dbConnection');
import databaseConnection from './config/dbConnection';

// Normalize port number which will expose server
const port = normalizePort(process.env.PORT);

// Instantiate the expressServer class
export let expressInstance = new expressServer().expressInstance;

// Make port available within server
expressInstance.set('port', port);

// Create the HTTP Express Server
const server = http.createServer(expressInstance);

// Start listening on the specified Port (Default: 3000)
server.listen(port,()=>{
    console.log(` Server listening on port ${port}`)
});

databaseConnection();

// Port Normalization
function normalizePort(val){
    const port = typeof val === 'string' ? parseInt(val, 10) : val;
    if (isNaN(port)) {
        return val;
    } else if (port >= 0) {
        return port;
    } else {
        return false;
    }
}




// require('dotenv').config();
// import express from 'express';
// import * as bodyParser from "body-parser";
// import router from './UserManagement/routes/index'
// import { Request, Response, NextFunction } from 'express';
// import  dbConnection  from './config/db';
// import User from './UserManagement/models/userModel';
// import Role from './UserManagement/models/roleModel';

// const app = express();

// // const userRoutes = require('./UserManagement/routes/index')

// // dbConnection.addModels([User, Role]);

// const port = process.env.PORT;
// app.use(bodyParser.json());

// app.get('/', (request: Request, response: Response) => {
//     response.send(process.env.HELLO);
// });

// app.use('/', router);



// app.listen(port, (): void => {
//     console.log(`Server Running at port ${port}`);

//     // dbConnection.authenticate()
//     //     .then(async () => {
//     //         console.log("Connection established");

//     //         try {
//     //             await dbConnection.sync({ force: true })
//     //             console.log("Synced");
//     //         }
//     //         catch (error) {
//     //             console.log("errorrrrr" + error);
//     //         }

//     //     })
//     //     .catch((error) => {
//     //         console.log(`Unable to connect: ${error}`);
//     //     })

// })




