import { Dispatch } from "react";
import { useForm } from "react-hook-form";

import { Button } from "../ui/Button/Button";
import { Form, StyledInput, ErrorMsg } from "./FavMusicForm.styles";
import { useTranslation } from "react-i18next";
import { Album } from "../../containers/Album.types";
import { SetStateAction } from "react";

type AlbumDTO = Omit<Album, "id" | "addedAt" | "isFavorite">;

interface IFavMusicFOrm {
  setAlbums: Dispatch<SetStateAction<Album[]>>;
  albums: Album[];
}

export const FavMusicForm = ({ setAlbums, albums }: IFavMusicFOrm) => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      albumName: "",
      poster: "",
      artist: "",
    },
  });

  const handleSubmitForm = (data: AlbumDTO) => {
    const lastId = albums[albums.length - 1]?.id;

    setAlbums([
      ...albums,
      {
        ...data,
        id: lastId + 1 || 1,
        addedAt: new Date().getTime(),
        isFavorite: false,
      },
    ]);
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(handleSubmitForm)}>
      <p> {t("Add new album")}</p>
      <StyledInput
        type="text"
        {...register("albumName", {
          required: {
            value: true,
            message: `${t(
              "Album name should have length between 3-255 characters"
            )}`,
          },
          minLength: 3,
          maxLength: 255,
        })}
        placeholder={t("Album name") || ""}
      />
      <ErrorMsg>{errors.albumName && errors.albumName.message}</ErrorMsg>
      <StyledInput
        type="text"
        {...register("artist", {
          required: {
            value: true,
            message: `${t(
              "Artist should have length between 3-255 characters"
            )}`,
          },
          minLength: 3,
          maxLength: 255,
        })}
        placeholder={t("Album artist") || ""}
      />
      <ErrorMsg>{errors.artist && errors.artist.message}</ErrorMsg>

      <Button type="submit" sx={{ padding: 1, backgroundColor: "orange" }}>
        {t("Add to list")}
      </Button>
    </Form>
  );
};
