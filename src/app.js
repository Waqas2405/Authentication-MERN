import express from 'express';
import morgan from 'morgan';
import Route from './routes/auth.routs.js';
const app=express();


app.use(express.json());
app.use(morgan("dev"));

app.use("/auth/api",Route);

export default app;