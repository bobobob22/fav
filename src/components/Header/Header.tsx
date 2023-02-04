import { AppBar, Toolbar } from "@mui/material";
import { useTranslation } from "react-i18next";

import { Button } from "../ui/Button/Button";
import { ButtonsWrapper } from "./Header.styles";

export const Header = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: any) => {
    i18n.changeLanguage(lng);
  };

  return (
    <AppBar
      position="static"
      color="inherit"
      sx={{
        background: "#000",
        color: "#fff",
        paddingX: 5,
        paddingY: 0.5,
      }}
    >
      <Toolbar
        sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}
      >
        <h1>{t("Favourite Albums")}</h1>
        <ButtonsWrapper>
          {i18n.language === "en" && (
            <Button
              sx={{ marginRight: "1rem" }}
              onClick={() => changeLanguage("pl")}
            >
              PL
            </Button>
          )}

          {i18n.language === "pl" && (
            <Button onClick={() => changeLanguage("en")}>EN</Button>
          )}
        </ButtonsWrapper>
      </Toolbar>
    </AppBar>
  );
};
