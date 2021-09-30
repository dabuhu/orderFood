import SearchIcon from "@mui/icons-material/Search";
import {
  AppBar,
  Box,
  Button,
  ButtonProps,
  CssBaseline,
  Divider,
  IconButton,
  InputBase,
  Toolbar,
} from "@mui/material";
import FoodBankIcon from "@mui/icons-material/FoodBank";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { styled } from "@mui/material/styles";
import { useRouter } from "next/dist/client/router";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import HideOnScroll from "./HidenOnscroll";
export interface HeaderProps {}

export default function Header(props: HeaderProps) {
  const router = useRouter();
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    border: "1px solid black",
    color: "black",
    "&:hover": {
      border: "1px solid black",
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));
  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    color: "black",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));
  const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: "white",
    textTransform: "none",
    backgroundColor: "black",
    "&:hover": {
      //   backgroundColor: purple[700],
    },
  }));
  const gotoExplore = () => {
    router.push("/explore");
  };
  const gotoFavorite = () => {
    router.push("/favorite");
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
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
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
                  height: '50px'
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
                  height: '50px'
                }}
              >
                <FavoriteIcon color="error"/> FAVORITE
              </IconButton>
              <IconButton
                size="small"
                aria-label="show 17 new notifications"
                color="secondary"
                sx={{
                  backgroundColor: "black",
                  borderRadius: 0,
                  color: "white",
                  marginLeft: '20px',
                  '&:hover':{
                    backgroundColor: "black",
                    outline: '1px solid red'
                  }
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
