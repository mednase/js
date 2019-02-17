import express from 'express'
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan'

let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname ,'/node_modules')));
app.listen(8000,() =>console.log('running on port 8000'));

app.use('/',express.static(path.join(__dirname, '/../client/build')));
export default app;
