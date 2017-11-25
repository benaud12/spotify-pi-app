import { Component } from '@angular/core';
import { SpotifyClientService } from './services/spotify-client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = `Mick's Spotty`;
  public authResponse: any;
  public playlistResponse: any;
  public searchKeywords: string;

  constructor(private spotify: SpotifyClientService) {}

  public authenticateClient(): void {
    this.spotify.authenticateClient().subscribe(response => {
      this.authResponse = response;
    });
  }

  public searchPlaylists(query: string): void {
    this.spotify.searchPlaylists(query).subscribe(response => {
      this.playlistResponse = response;
    });
  }
}
