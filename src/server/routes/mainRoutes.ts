import {
    Request,
    Response,
    Router,
} from 'express';

export class MainRoutes {
    public router: Router = Router();
    private logger: any;
    constructor(logger?: any) {
        if (!logger) {
            logger = console;
        }
        this.logger = logger;
        this.initializeRoutes();
    }
    public initializeRoutes = (): void => {
        this.router.route('/data')
            .get((req: Request, res: Response) => {
                res.send('asd');
            });
    }
}