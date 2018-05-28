import 'zone.js/dist/zone-node';
import 'reflect-metadata';

import { enableProdMode } from '@angular/core';
enableProdMode();

import { ngExpressEngine } from '@nguniversal/express-engine';
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';

import * as express from 'express';
import * as path from 'path';

const app = express();

const PORT = process.env.PORT || 8081;
const DIST_FOLDER = path.join(process.cwd(), 'dist');

const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./dist/server/main');

app.engine('html', ngExpressEngine({
    bootstrap: AppServerModuleNgFactory,
    providers: [
        provideModuleMap(LAZY_MODULE_MAP)
    ]
}));

app.set('view engine', 'html');
app.set('views', path.join(DIST_FOLDER, 'browser'));

app.get('*.*', express.static(path.join(DIST_FOLDER, 'browser'), {
    maxAge: '1y'
}));

app.get('*', (req, res) => {
    res.render('index', { req });
});

app.listen(PORT, (err: any, result: any) => {
    if (err) {
        console.error(`Failed to start express server.`);
        return;
    }
    
    console.log(`Express server listening on port ${PORT}`);
});
