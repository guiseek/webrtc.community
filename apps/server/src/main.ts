/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger, ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'

import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.useGlobalPipes(new ValidationPipe())
  const port = process.env.PORT || 3000
  await app.listen(port, () => {
    Logger.log('Address: http://localhost:' + port, 'ServerSignaling')
  })
}

bootstrap()
