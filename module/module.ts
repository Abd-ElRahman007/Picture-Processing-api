import sharp from 'sharp';
import express from 'express';
const sharpModule = async (filename: unknown, wd: number, ht: number, res: express.Response): Promise<void> => {
  sharp(`./src/img/${filename}.jpg`)
    .resize(wd, ht)
    .toFile(
      `./src/thumbnail/${filename}_thumb${wd}x${ht}.jpg`
    )
    .then((info): void => {
      console.log(info);
      res.sendFile(
        `${filename}_thumb${wd}x${ht}.jpg`,
        { root: './src/thumbnail' }
      );
    })
    .catch((err): void => {
      console.log(err);
    });
}
export default sharpModule;
