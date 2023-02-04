export enum ListOrder {
  grid = "grid",
  list = "list"
}

export interface Album {
  id: number;
  albumName: string;
  artist: string;
  addedAt: number;
  isFavorite: boolean;
}


