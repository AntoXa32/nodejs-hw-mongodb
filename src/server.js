import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import { env } from './utils/env.js';
import { UPLOAD_DIR } from './constants/index.js';

import notFoundHandler from './middlewares/notFoundHandler.js';
import errorHandler from './middlewares/errorHandler.js';
import logger from './middlewares/logger.js';

import authRoute from './routers/auth.js';
import contactsRouter from './routers/contacts.js';

const setupServer = () => {
  const app = express();

  app.use(logger);
  app.use(cors());
  app.use(express.json());
  app.use(cookieParser());

  app.use('uploads', express.static(UPLOAD_DIR));

  app.use('/auth', authRoute);

  app.use('/contacts', contactsRouter);

  app.use(notFoundHandler);

  app.use(errorHandler);

  const PORT = Number(env('PORT', '3000'));

  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
};

export default setupServer;
