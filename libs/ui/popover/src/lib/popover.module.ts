import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalModule } from '@angular/cdk/portal';
import { PopoverComponent } from './popover.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { PopoverArrowDirective } from './popover-arrow.directive';
import { PopoverCloseDirective } from './popover-close.directive';
import { PopoverOpenDirective } from './popover-open.directive';
import { PopoverService } from './popover.service';

@NgModule({
  declarations: [
    PopoverComponent,
    PopoverArrowDirective,
    PopoverCloseDirective,
    PopoverOpenDirective,
  ],
  imports: [CommonModule, OverlayModule, PortalModule],
  exports: [
    PopoverComponent,
    PopoverArrowDirective,
    PopoverCloseDirective,
    PopoverOpenDirective,
  ],
  providers: [PopoverService]
})
export class PopoverModule {}
