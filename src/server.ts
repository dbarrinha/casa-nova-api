import dotenv from "dotenv";

import express, { type Express, type Request, type Response } from "express";
import bodyParser from "body-parser";
import authRoutes from './routes/authRoutes';
import connectDB from './config/db';

dotenv.config();
const app: Express = express();
const PORT = 3000;
connectDB();
app.use(bodyParser.json());

app.get('/', (_req: Request, res: Response) => {
  res.send('Hello World');
});

app.use(authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;