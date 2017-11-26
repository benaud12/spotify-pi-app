export interface SpotifyImage {
  height: number;
  url: string;
  width: number;
}

export interface SpotifyUser {
  external_urls: {
    [other: string]: string;
  };
  href: string;
  id: string;
  type: string;
  uri: string;
}

export interface SpotifyPlaylist {
  collaborative: boolean;
  external_urls: {
    [other: string]: string;
  };
  href: string;
  id: string
  images: SpotifyImage[];
  name: string;
  owner: SpotifyUser;
  public: any;
  snapshot_id: string;
  tracks: {
    href: string;
    total: number;
  };
  type: string;
  uri: string;
}

export interface SpotifyPlaylistSeachResponse {
  playlists: {
    href: string;
    items: SpotifyPlaylist[];
    limit: number;
    next: string;
    offset: number;
    previous?: string;
    total: number;
  }
}

export interface SpotifyAuthenticationResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
}
