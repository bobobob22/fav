import ReorderIcon from "@mui/icons-material/Reorder";

import { Button } from "../ui/Button/Button";
import {
  MainButtonsWrapper,
  ReorderIconWrapper,
  ChangeOrderWrapper,
  StyledSelect,
} from "./AlbumHeader.styles";

import { useMediaQuery } from "../../hooks/useMediaQuery";
import { useTranslation } from "react-i18next";
import { breakpoints } from "../../theme/responsive";
import { Album } from "../../containers/Album.types";

interface ISortOption {
  value: keyof Album | null;
  label: string;
  isDisabled?: boolean;
}

interface IAlbumHeader {
  sortAlbums: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  changeListOrder: () => void;
  toggleAlbumForm: () => void;
}

export const AlbumHeader = ({
  sortAlbums,
  changeListOrder,
  toggleAlbumForm,
}: IAlbumHeader) => {
  const isNotMobile = useMediaQuery(`(min-width: ${breakpoints["md"]}px`);
  const { t } = useTranslation();

  const sortOptions: ISortOption[] = [
    {
      value: null,
      label: t("Sort"),
      isDisabled: true,
    },
    {
      value: "id",
      label: `${t("Sort by")} id`,
    },
    {
      value: "albumName",
      label: `${t("Sort by")} name`,
    },
    {
      value: "addedAt",
      label: `${t("Sort by")} date`,
    },
  ];

  return (
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
  );
};
