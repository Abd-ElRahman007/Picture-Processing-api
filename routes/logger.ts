import { Express, NextFunction } from 'express';

const logger = (
  req: Express,
  res: Express.Response,
  next: NextFunction
): void => {
  console.log(`${req.url} was visited`);
  next();
};
export default logger;
