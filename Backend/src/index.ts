import express from 'express';
import bodyParser from 'body-parser';
import { initServer } from './serverInit';
import { userRouter } from './controllers/userController';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/user', userRouter);

app.listen(port, async () => {
  await initServer();
  return console.log('server initialized');
});