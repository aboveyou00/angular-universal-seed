import * as express from 'express';
import { Request, Response } from 'express';
import { Server } from 'http';
import * as cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';
import * as path from 'path';

export function initializeRoutesAndListen(port: number): Promise<Server> {
    return new Promise((resolve, reject) => {
        const app = express();
        
        app.use(
            cookieParser(),
            bodyParser.urlencoded({ extended: true }),
            bodyParser.json()
        );
        
        
        
        const server = app.listen(port, (err: any, result: any) => {
            if (err) return void(reject(err));
            resolve(server);
        });
    });
}
