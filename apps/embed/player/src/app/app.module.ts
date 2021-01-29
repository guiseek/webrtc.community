import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'
import { PlayerComponent } from './player/player.component'
import { AppComponent } from './app.component'

@NgModule({
  declarations: [AppComponent, PlayerComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: ':video',
          component: PlayerComponent,
        },
        {
          path: '**',
          redirectTo: '0',
        },
      ],
      { useHash: true }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
