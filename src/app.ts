import 'reflect-metadata';
import express, { json } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import { createConnection } from 'typeorm';

// Routes
import userRoutes from './routes/users.routes';

// Initializations
export const app = express();

// Init DB
createConnection();

// middlewares

// comunications with other servers
app.use(cors());

// Helmet can help protect your app from some well-known web vulnerabilities
// by setting HTTP headers appropriately.
app.use(helmet());

// sms servers develops
app.use(morgan('dev'));

// format json to object
app.use(json());

// Data format form
app.use(express.urlencoded({ extended: false }));

// routes
app.use('/api', userRoutes);
