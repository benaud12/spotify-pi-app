import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import {
  SpotifyPlaylistSeachResponse,
  SpotifyAuthenticationResponse
} from './spotify-client.interfaces';

@Injectable()
export class SpotifyClientService {

  private clientUrl: string = environment.spotifyApiUrl;

  constructor(private http: HttpClient) {}

  public authenticateClient():
    Observable<SpotifyAuthenticationResponse | any[]> {
      return this.http
        .get<SpotifyAuthenticationResponse>(
          `${this.clientUrl}/api/authenticate/client`)
        .pipe(
          tap(response => console.log(`Auth response: ${response}`)),
          catchError(this.handleError('authenticateClient', []))
        )
    }

  public searchPlaylists(query: string):
    Observable<SpotifyPlaylistSeachResponse | any[]> {
      const queryString = query ? `?q=${encodeURI(query)}` : '';
      return this.http
        .get<SpotifyPlaylistSeachResponse>(
          `${this.clientUrl}/api/search/playlist${queryString}`)
        .pipe(
          tap(response => console.log(`Playlist search response: ${response}`)),
          catchError(this.handleError('searchPlaylists', []))
        )
    }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
