import { CommonModule } from '@angular/common'
import { NgModule, ModuleWithProviders } from '@angular/core'
import { OverlayModule } from '@angular/cdk/overlay'
import { OverlogSnack } from './overlog.snack'
import { OverlogService } from './overlog.service'
import { defaultOverlogConfig, OVERLOG_CONFIG } from './overlog-config'

@NgModule({
  imports: [CommonModule, OverlayModule],
  declarations: [OverlogSnack],
  providers: [OverlogService],
  exports: [OverlogSnack],
})
export class OverlogModule {
  public static forRoot(
    config = defaultOverlogConfig
  ): ModuleWithProviders<OverlogModule> {
    return {
      ngModule: OverlogModule,
      providers: [
        {
          provide: OVERLOG_CONFIG,
          useValue: { ...defaultOverlogConfig, ...config },
        },
      ],
    }
  }
}
