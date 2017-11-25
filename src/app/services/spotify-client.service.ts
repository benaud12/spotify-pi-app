import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class SpotifyClientService {

  private clientUrl: string = 'http://192.168.1.108:3000';

  constructor(private http: HttpClient) {}

  public authenticateClient(): Observable<any> {
    return this.http.get(`${this.clientUrl}/api/authenticate/client`)
      .pipe(
        tap(response => console.log(`Auth response: ${response}`)),
        catchError(this.handleError('authenticateClient', []))
      )
  }

  public searchPlaylists(query: string): Observable<any> {
    const queryString = query ? `q=${encodeURI(query)}` : '';
    return this.http.get(`${this.clientUrl}/api/search/playlist`)
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
