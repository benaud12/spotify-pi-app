import { Component } from '@angular/core';
import { SpotifyClientService } from './services/spotify-client.service';
import { SpotifyPlaylist, SpotifyPlaylistSeachResponse } from './services/spotify-client.interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = `Mick's Spotty`;
  public authResponse: any;
  public playlistResponse: SpotifyPlaylistSeachResponse;
  public playlists: SpotifyPlaylist[];
  public searchKeywords: string;

  constructor(private spotify: SpotifyClientService) {}

  public authenticateClient(): void {
    this.spotify.authenticateClient().subscribe(response => {
      this.authResponse = response;
    });
  }

  public searchPlaylists(query: string): void {
    this.spotify.searchPlaylists(query)
      .subscribe((response: SpotifyPlaylistSeachResponse) => {
        this.playlistResponse = response;
        this.playlists = response.playlists.items;
      });
  }
}
