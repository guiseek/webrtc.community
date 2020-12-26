import { City } from './city'

export class User {
  uuid: string
  name: string
  email: string
  pass: string
  city: City
  created: Date
  updated: Date
}
