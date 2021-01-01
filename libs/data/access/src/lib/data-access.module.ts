import { AuthStorage } from './auth-storage'
import { CookieStorage } from './cookie-storage'
import { DataAccessService } from './data-access.service'
import { ModuleWithProviders, NgModule } from '@angular/core'
import { DataAccessConfig, DATA_ACCESS_CONFIG } from './data-access-injectors'

@NgModule({
  providers: [DataAccessService, AuthStorage, CookieStorage],
})
export class DataAccessModule {
  static forRoot(
    config: DataAccessConfig
  ): ModuleWithProviders<DataAccessModule> {
    return {
      ngModule: DataAccessModule,
      providers: [
        { provide: DATA_ACCESS_CONFIG, useValue: config ?? { endpoint: '' } },
      ],
    }
  }
}
