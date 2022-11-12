import cookieParser from 'cookie-parser';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

const bootstrap = async () => {
  try {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule);

    app.use(cookieParser);
    app.enableCors({ credentials: true, origin: process.env.CLIENT_API });

    await app.listen(PORT, () => console.log(`Sever start on port: ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

bootstrap()
  .then(() => console.log('Server OK'))
  .catch(() => console.log('Server start ERROR'));
