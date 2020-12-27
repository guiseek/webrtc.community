import { InjectionToken } from '@angular/core'

export interface DataAccessConfig {
  endpoint: string
}

export const DATA_ACCESS_CONFIG = new InjectionToken<DataAccessConfig>(
  'DataAccessConfig'
)
