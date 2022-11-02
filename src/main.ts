import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());
  app.enableCors({
    credentials: true,
    origin: [
      'http://localhost:8081',
      'http://localhost:8081',
      'http://localhost:8080',
      'http://localhost:8082',
      'http://127.0.0.1:8081',
      'http://127.0.0.1:8082',
      'http://127.0.0.1:8080',
      'https://localhost:8081',
      'https://localhost:8080',
      'https://127.0.0.1:8081',
      'https://127.0.0.1:8080',
      'https://studiooo.cz',
      'https://www.studiooo.cz',
      'http://46.101.114.1:8081'

    ],
  });
  //app.setGlobalPrefix('api')
  await app.listen(3000);
}
bootstrap();
