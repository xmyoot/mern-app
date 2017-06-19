import express from 'express';
import config from './config';

import apiRouter from './api';

const server = express();

server.set('view enginer', 'ejs');

server.get('/', (req, res) => {
    res.send('hello from server.get function');
});

server.use('/api', apiRouter);
server.use(express.static('public'));

server.listen(config.port, ()=>{
    console.info('express listening on port', config.port);
});