import FavoriteIcon from "@mui/icons-material/Favorite";
import FoodBankIcon from "@mui/icons-material/FoodBank";
import {
  AppBar,
  Box, CssBaseline,
  Divider,
  IconButton, Toolbar
} from "@mui/material";
import { useRouter } from "next/dist/client/router";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { FilterContext } from "../../provider/provider";
import HideOnScroll from "./HidenOnscroll";
export interface HeaderProps {}

export default function Header(props: HeaderProps) {
  const router = useRouter();
  const { keywordGlobal, setGlobalKeyword } = useContext(FilterContext);
  const gotoExplore = () => {
    router.push("/explore");
  };
  const gotoFavorite = () => {
    router.push("/favorite");
  };
  const requestSearch = (searchedVal: string) => {
    setGlobalKeyword(searchedVal);
  };

  const cancelSearch = () => {
    setGlobalKeyword("");
  };
  return (
    <div className="container">
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar style={{ backgroundColor: "white" }}>
          <Toolbar className="container">
            <Link href="/">
              <a className="nav-link">
                <Image src="/images/logo/logo.webp" width="150" height="35" />
              </a>
            </Link>
            <Box sx={{ flexGrow: 1 }} />
            {/* <SearchBar
              value={keywordGlobal}
              onChange={(searchVal) => requestSearch(searchVal)}
              onCancelSearch={() => cancelSearch()}
            /> */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                width: "fit-content",
                // border: (theme) => `1px solid ${theme.palette.divider}`,
                color: "black",
                "& svg": {
                  m: 1.5,
                },
                "& hr": {
                  mx: 0.5,
                },
              }}
            >
              <Divider
                orientation="vertical"
                style={{ height: "auto" }}
                flexItem
              />
              <IconButton
                size="small"
                aria-label="show 4 new mails"
                color="inherit"
                onClick={gotoExplore}
                sx={{
                  borderRadius: 0,
                  height: "50px",
                }}
              >
                <FoodBankIcon />
                EXPLORE
              </IconButton>
              <Divider
                orientation="vertical"
                style={{ height: "auto" }}
                flexItem
              />
              <IconButton
                size="small"
                aria-label="show 17 new notifications"
                color="inherit"
                onClick={gotoFavorite}
                sx={{
                  borderRadius: 0,
                  height: "50px",
                }}
              >
                <FavoriteIcon color="error" /> FAVORITE
              </IconButton>
              <IconButton
                size="small"
                aria-label="show 17 new notifications"
                color="secondary"
                sx={{
                  backgroundColor: "black",
                  borderRadius: 0,
                  color: "white",
                  marginLeft: "20px",
                  "&:hover": {
                    backgroundColor: "black",
                    outline: "1px solid red",
                  },
                }}
              >
                Sign in / Register
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </div>
  );
}
