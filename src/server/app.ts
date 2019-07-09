import * as morgan from 'morgan';
import * as path from 'path';

import * as bodyParser from 'body-parser';

import * as express from 'express';
import * as http from 'http';
import * as mongoose from 'mongoose';

import { MainRoutes } from './routes';


const ENV = process.env.ENV || 'development';

class App {

    public app: express.Application;
    public server: http.Server;
    public mainRoutes: MainRoutes;
    private mongoUrl: string = process.env.DB_CONNECTION || 'mongodb://localhost:27017/test';


    constructor() {
        this.app = express();
        this.config();
        // this.mongoSetup();
        
        this.server = http.createServer(this.app);
        
        this.mainRoutes = new MainRoutes();
        this.initializeRouters();
    }

    private config = (): void => {
        // logger
        const morgan_option = ENV === 'development' ? 'dev' : 'combined';
        this.app.use(morgan(morgan_option));

        // request body parser
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.raw({
            type: 'application/octet-stream',
        }));
        this.app.use(bodyParser.urlencoded({ extended: true }));
    }

    private initializeRouters = (): void => {
        this.app.use(express.static(path.join(__dirname, '../../public')));
        this.app.use('/api', this.mainRoutes.router);
    }

    private mongoSetup = (): void => {
        require('mongoose').Promise = global.Promise;
        mongoose.connect(this.mongoUrl, { useNewUrlParser: true });
    }



}

export default new App();