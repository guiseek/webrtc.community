import { ConfigService } from '@nestjs/config'

export const mongooseFactory = (configService: ConfigService) => {
  const user = configService.get('DB_USER')
  const pass = configService.get('DB_PASS')
  const name = configService.get('DB_NAME')
  return {
    uri: `mongodb+srv://${user}:${pass}@mongodb-0.nnzp1.mongodb.net/${name}?retryWrites=true&w=majority`,
  }
}
