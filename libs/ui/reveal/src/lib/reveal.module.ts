import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { RevealDirective } from './reveal.directive'

@NgModule({
  imports: [CommonModule],
  declarations: [RevealDirective],
  exports: [RevealDirective],
})
export class RevealModule {}



