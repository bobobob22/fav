import { useEffect, useState } from "react";

import { AlbumHeader } from "../components/AlbumHeader/AlbumHeader";
import { AlbumList } from "../components/AlbumList/AlbumList";
import { FavMusicForm } from "../components/FavMusicForm/FavMusicForm";
import { defaultAlbums } from "./Album.const";
import { Album, ListOrder } from "./Album.types";

export const AlbumContainer = () => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [listOrder, setListOrder] = useState<ListOrder>(ListOrder.grid);

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
    const sortedValue = event.target.value as keyof Album;

    const sortedAlbums = [...albums].sort((elA, elB) => {
      return elA[sortedValue] < elB[sortedValue] ? -1 : 1;
    });

    setAlbums(sortedAlbums);
  };

  const toggleAlbumForm = () => {
    setShowAddForm(!showAddForm);
  };

  return (
    <>
      <AlbumHeader
        sortAlbums={sortAlbums}
        changeListOrder={changeListOrder}
        toggleAlbumForm={toggleAlbumForm}
      />
      {showAddForm && <FavMusicForm setAlbums={setAlbums} albums={albums} />}
      <AlbumList
        albums={albums}
        removeAlbum={removeAlbum}
        toggleFavorite={toggleFavorite}
        listOrder={listOrder}
      />
    </>
  );
};
