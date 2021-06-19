import express from 'express';
import morgan from 'morgan'
import path from 'path'
import cors from 'cors'
import indexRoutes from './routes';

const app = express();


// set defautl port for the server
app.set('port', process.env.PORT || 4000);


// middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

// routes
app.use('/api', indexRoutes);

// this folder will be used to store book covers
app.use('/uploads', express.static(path.resolve('uploads')));

export default app;