
import express from "express";
import bodyParser from 'body-parser';
import cors  from 'cors';
import mongoose from "mongoose";
import router from '../src/routes'

class Server {
    static listen(PORT: string | number, arg1: () => void) {
        throw new Error("Method not implemented.");
    }
    expressInstance: any;
    constructor() {
        this.expressInstance = express();
        this.middlewareSetup();
        this.routingSetup();
    }

    
    middlewareSetup() {

        // Setup Cross Origin access
        this.expressInstance.use(cors());

        // Setup requests format parsing (Only JSON requests will be valid)
        this.expressInstance.use(bodyParser.urlencoded({ extended: true }));
        this.expressInstance.use(bodyParser.json());

    }

    routingSetup() {
        // Instantiate router object
        this.expressInstance.use('/', router)
    }


}

export default Server;


