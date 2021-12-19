import express from 'express';
import { promises as fsPromises } from 'fs';
import fs from 'fs';
import sharpModule from '../module/module';

const routes = express.Router();

routes.get('/', (req: express.Request, res: express.Response): void => {
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
      const file = req.query.filename;
      const width = Number(req.query.width);
      const height = Number(req.query.height);
      if (
        typeof width == 'number' &&
        width > 0 &&
        typeof height == 'number' &&
        height > 0
      ) {
        fsPromises.mkdir('./src/thumbnail', { recursive: true });
        sharpModule(file, width, height, res);
      } else {
        res.send('No width or height specified');
      }
    }
  } else {
    console.log('file not found');
    res.send('file not found');
  }
});
export default routes;
