import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.enableCors({origin: true,
  //           methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  //           credentials: true,});
	app.use(cookieParser());
  app.enableCors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
   const config = new DocumentBuilder()
     .setTitle('ft_Transcendence')
     .setDescription('Transcendence Routes')
     .setVersion('1.0')
     .build();
   const document = SwaggerModule.createDocument(app, config);
   SwaggerModule.setup('api', app, document);
  await app.listen(3005, process.env.HOST);
  
}
bootstrap();