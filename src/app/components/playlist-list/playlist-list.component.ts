import { Component, OnInit, Input } from '@angular/core';
import { SpotifyPlaylist, SpotifyImage } from '../../services/spotify-client.interfaces';

@Component({
  selector: 'app-playlist-list',
  templateUrl: './playlist-list.component.html',
  styleUrls: ['./playlist-list.component.scss']
})
export class PlaylistListComponent implements OnInit {

  @Input()
  public items: SpotifyPlaylist[];

  constructor() { }

  ngOnInit() { }

  public getImageUrl(images: SpotifyImage[], width: number): string {
    const widthMatchImage = images.find((image: SpotifyImage): boolean => {
      return image.width === width;
    });
    return widthMatchImage ? widthMatchImage.url : images[0].url;
  }
}
