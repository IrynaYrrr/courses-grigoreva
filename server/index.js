import express from 'express';
import mongoSanitize from 'express-mongo-sanitize';
import compresson from 'compression';
import path from 'path';
import config from 'config';
import mongoose from './services/mongoose';
import routes from './routes/index';

const start = () => {
    const app = express();

    app.use(mongoSanitize());
    app.use(compresson());
    app.use(express.json());

    if (!config.get('dev')) {
        app.use(express.static(path.resolve(path.resolve(), '..', 'client', 'build')));
    }

    app.use('/api', routes);

    app.get('*', (req, res) => {
        res.status(404).end();
    });

    // eslint-disable-next-line no-unused-vars
    app.use((err, req, res, next) => {
        // eslint-disable-next-line no-console
        console.log(err);
        return res.status(500).json({ message: 'Internal Server Error' });
    });

    app.listen(config.get('server.port'), () => {
        if (config.get('dev')) {
            // eslint-disable-next-line no-console
            console.log(`server listening at http://localhost:${config.get('server.port')}`);
        }
    });
};

(async () => {
    await mongoose.connect();
    start();
})();
