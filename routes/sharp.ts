import express from 'express';
import sharp from 'sharp';
import { promises as fsPromises } from 'fs';
import fs from 'fs';

const routes = express.Router();

routes.get('/', (req: express.Request, res: express.Response) => {
  if (fs.existsSync(`./src/img/${req.query.filename}.jpg`)) {
    if (
      fs.existsSync(
        `./src/thumbnail/${req.query.filename}_thumb${req.query.width}x${req.query.height}.jpg`
      )
    ) {
      res.sendFile(
        `${req.query.filename}_thumb${req.query.width}x${req.query.height}.jpg`,
        { root: './src/thumbnail' }
      );
    } else {
      fsPromises.mkdir('./src/thumbnail', { recursive: true });
      sharp(`./src/img/${req.query.filename}.jpg`)
        .resize(Number(req.query.width), Number(req.query.height))
        .toFile(
          `./src/thumbnail/${req.query.filename}_thumb${req.query.width}x${req.query.height}.jpg`
        )
        .then((info) => {
          console.log(info);
          res.sendFile(
            `${req.query.filename}_thumb${req.query.width}x${req.query.height}.jpg`,
            { root: './src/thumbnail' }
          );
        })
        .catch((err) => {
          console.log(err);
        });
    }
  } else {
    console.log('file not found');
    res.send('file not found');
  }
});
export default routes;
