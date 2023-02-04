import { Album, ListOrder } from "../../containers/Album.types";
import { AlbumComponent } from "../Album/Album";
import { AlbumsWrapper } from "./AlbumList.styles";

interface IAlbumList {
  albums: Album[];
  removeAlbum: (albumId: number) => void;
  toggleFavorite: (albumId: number) => void;
  listOrder: ListOrder;
}

export const AlbumList = ({
  albums,
  removeAlbum,
  toggleFavorite,
  listOrder,
}: IAlbumList) => {
  return (
    <AlbumsWrapper listOrder={listOrder}>
      {albums.map((album) => {
        return (
          <AlbumComponent
            key={album.id}
            album={album}
            removeAlbum={removeAlbum}
            toggleFavorite={toggleFavorite}
          />
        );
      })}
    </AlbumsWrapper>
  );
};
