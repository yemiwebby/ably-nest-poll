import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';
import * as express from 'express';
import * as path from 'path';

async function bootstrap() {
	const app = await NestFactory.create(ApplicationModule);

	app.use(express.static(path.join(__dirname, 'public')));
	app.set('views', __dirname + '/views');
	app.set('view engine', 'ejs');
	
	await app.listen(3000);
}
bootstrap();
