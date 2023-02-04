import { Album } from "./Album.types";

export const defaultAlbums: Album[] = [
  {
    id: 1,
    artist: "Nirvana",
    albumName: "Nevermind",
    addedAt: 1675556052087,
    isFavorite: true
  },
  {
    id: 2,
    artist: "Led Zeppelin",
    albumName: "Led Zeppelin II",
    addedAt: 1675383260901,
    isFavorite: false
  },
  {
    id: 3,
    artist: "Nirvana",
    albumName: "In utero",
    addedAt: 1675124067567,
    isFavorite: true
  },
  {
    id: 4,
    artist: "Led Zeppelin",
    albumName: "Led Zeppelin III",
    addedAt: 1674605674536,
    isFavorite: true
  },
  {
    id: 5,
    artist: "Jethro Tull",
    albumName: "Aqualung",
    addedAt: 1675037688307,
    isFavorite: false
  }
];
