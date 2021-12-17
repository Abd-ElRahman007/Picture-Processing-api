// eslint-disable-next-line @typescript-eslint/no-unused-vars
import express from 'express';

declare module 'express' {
  interface Express {
    url: string;
  }
}
