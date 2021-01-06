import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { Carousel, CarouselItem } from './carousel'
import { PictureSourceSize } from './picture-source-size'

@NgModule({
  imports: [CommonModule, MatIconModule, MatButtonModule],
  exports: [Carousel, CarouselItem, PictureSourceSize],
  declarations: [Carousel, CarouselItem, PictureSourceSize],
})
export class CarouselModule {}
