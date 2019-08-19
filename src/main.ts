import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 8080;

  app.enableCors({
    origin: '*',
    methods: ['GET', 'POST', 'DELETE'],
    maxAge: 60,
  });

  await app.listen(port);
}
bootstrap();
