import express from 'express';

const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  res.send('hiiiiii');
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});