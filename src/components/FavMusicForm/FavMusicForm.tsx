import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import ReorderIcon from "@mui/icons-material/Reorder";

import { AlbumComponent } from "../Album/Album";
import { Button } from "../ui/Button/Button";
import {
  Form,
  StyledInput,
  ErrorMsg,
  AlbumsWrapper,
  ReorderIconWrapper,
  MainButtonsWrapper,
  ChangeOrderWrapper,
  StyledSelect,
} from "./FavMusicForm.styles";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { devices } from "../../const/mediaQuery";
import { useTranslation } from "react-i18next";

export enum ListOrder {
  grid = "grid",
  list = "list",
}

const defaultAlbums: Album[] = [
  {
    id: 1,
    artist: "Nirvana",
    albumName: "Nevermind",
    addedAt: 1675556052087,
    isFavorite: true,
  },
  {
    id: 2,
    artist: "Led Zeppelin",
    albumName: "Led Zeppelin II",
    addedAt: 1675383260901,
    isFavorite: false,
  },
  {
    id: 3,
    artist: "Nirvana",
    albumName: "In utero",
    addedAt: 1675124067567,
    isFavorite: true,
  },
  {
    id: 4,
    artist: "Led Zeppelin",
    albumName: "Led Zeppelin III",
    addedAt: 1674605674536,
    isFavorite: true,
  },
  {
    id: 5,
    artist: "Jethro Tull",
    albumName: "Aqualung",
    addedAt: 1675037688307,
    isFavorite: false,
  },
];

export interface Album {
  id: number;
  albumName: string;
  artist: string;
  addedAt: number;
  isFavorite: boolean;
}

type AlbumKeys = keyof Album;

interface ISortOption {
  value: AlbumKeys | null;
  label: string;
  isDisabled?: boolean;
}


type AlbumDTO = Omit<Album, "id" | "addedAt" | "isFavorite">;

export const FavMusicForm = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [albums, setAlbums] = useState<Album[]>([]);
  const [listOrder, setListOrder] = useState<ListOrder>(ListOrder.grid);
  const isNotMobile = useMediaQuery(`(min-width: ${devices.phone})`);
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

  useEffect(() => {
    const savedAlbums = JSON.parse(
      localStorage.getItem("albums") || "[]"
    ) as Album[];

    if (!savedAlbums.length) {
      setAlbums(defaultAlbums);
    } else {
      setAlbums(savedAlbums);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("albums", JSON.stringify(albums));
  }, [albums]);

  const toggleAlbumForm = () => {
    setShowAddForm(!showAddForm);
  };

  const onSubmitHandler = (data: AlbumDTO) => {
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

  const removeAlbum = (albumId: number) => {
    const updatedAlbums = albums.filter((album) => album.id !== albumId);
    setAlbums(updatedAlbums);
  };

  const toggleFavorite = (albumId: number) => {
    const updatedAlbums = albums.map((album) => {
      if (album.id === albumId) {
        return { ...album, isFavorite: !album.isFavorite };
      }
      return album;
    });

    setAlbums(updatedAlbums);
  };

  const changeListOrder = () => {
    setListOrder(
      listOrder === ListOrder.grid ? ListOrder.list : ListOrder.grid
    );
  };

  const sortAlbums = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const sortedValue = event.target.value as AlbumKeys;

    const sortedAlbums = [...albums].sort((elA, elB) => {
      return elA[sortedValue] < elB[sortedValue] ? -1 : 1;
    });

    setAlbums(sortedAlbums);
  };

  const sortOptions: ISortOption[] = [
    {
      value: null,
      label: t('Sort'),
      isDisabled: true,
    },
    {
      value: "id",
      label: `${t("Sort by")} album`
    },
    {
      value: "albumName",
      label: `${t("Sort by")} name`
    },
    {
      value: "addedAt",
      label: `${t("Sort by")} date`
    },
  ];
  

  return (
    <>
      <MainButtonsWrapper>
        <Button
          type="button"
          sx={{ padding: 1, backgroundColor: "orange", marginRight: "2rem" }}
          onClick={toggleAlbumForm}
        >
          {t("Add new album")}
        </Button>
        {isNotMobile && (
          <ChangeOrderWrapper>
            {t("Change view")}
            <ReorderIconWrapper onClick={changeListOrder}>
              <ReorderIcon />
            </ReorderIconWrapper>
          </ChangeOrderWrapper>
        )}

        <StyledSelect onChange={sortAlbums} placeholder="" defaultValue={""}>
          {sortOptions.map((option) => {
            return (
              <option
                key={option.label}
                value={option?.value || ""}
                disabled={option.isDisabled}
              >
                {option.label}
              </option>
            );
          })}
        </StyledSelect>
      </MainButtonsWrapper>
      {showAddForm && (
        <Form onSubmit={handleSubmit(onSubmitHandler)}>
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
      )}

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
    </>
  );
};
