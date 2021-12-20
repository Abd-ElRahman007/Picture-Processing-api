// adding the express module
import express from 'express';
import routes from './routes/sharp';

// intializing the express app
const app = express();

// setting the port
const port = 3000;

// adding a route
app.get('/', (req, res) => {
  res.send('to start converting a picture, go to /convert');
});

app.use('/convert', routes);

//listening to the port
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`listening on http://localhost:${port}`);
});

export default app;
