import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SpotifyClientService } from './services/spotify-client.service';
import { PlaylistListComponent } from './components/playlist-list/playlist-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaylistListComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'angular-universal-base' }),
    FormsModule,
    HttpClientModule
  ],
  providers: [ SpotifyClientService ],
  bootstrap: [AppComponent]
})
export class AppModule {}
