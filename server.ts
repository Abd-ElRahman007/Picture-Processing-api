// adding the express module
import express from 'express';

// intializing the express app
const app = express();

// setting the port
const port = 3000;

// adding a route
app.get('/', (req, res) => {
  res.send('to start converting a picture, go to /convert');
});

//listening to the port
app.listen(port, () => {
  console.log(`listening on localhost:${port}`);
});