import { format } from "date-fns";

import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import { Album } from "../FavMusicForm/FavMusicForm";
import {
  AlbumName,
  AlbumArtist,
  AlbumDate,
  AlbumWrapper,
  IconWrapper,
  IconsWrapper,
} from "./Album.styles";
import { useTranslation } from "react-i18next";

export interface IAlbum {
  album: Album;
  removeAlbum: (albumId: number) => void;
  toggleFavorite: (albumId: number) => void;
}

export const AlbumComponent = ({
  album,
  removeAlbum,
  toggleFavorite,
}: IAlbum) => {
  const { t } = useTranslation();

  return (
    <AlbumWrapper>
      <AlbumName>{album.id}.  {t("Album name")} : {album.albumName}</AlbumName>
      <AlbumArtist>{t("Created by")}: {album.artist}</AlbumArtist>
      <AlbumDate>{t("Added at")}: {format(album.addedAt, "MM/dd/yyyy 'at' h:mm a'")}</AlbumDate>
      <IconsWrapper>
        <IconWrapper onClick={() => toggleFavorite(album.id)}>
          {album.isFavorite ? (
            <FavoriteIcon color={"success"}/>
          ) : (
            <FavoriteBorderIcon />
          )}
        </IconWrapper>
        <IconWrapper onClick={() => removeAlbum(album.id)}>
          <DeleteIcon />
        </IconWrapper>
      </IconsWrapper>
    </AlbumWrapper>
  );
};
