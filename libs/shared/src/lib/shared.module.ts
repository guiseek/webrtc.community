import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CallAvatarComponent } from './components'
import { MediaStreamService } from './services/media-stream.service'

export { MediaStreamService } from './services/media-stream.service'

@NgModule({
  imports: [CommonModule],
  declarations: [CallAvatarComponent],
  providers: [MediaStreamService],
  exports: [CallAvatarComponent],
})
export class SharedModule {}
