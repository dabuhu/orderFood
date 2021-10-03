import { Breadcrumbs, Button, Grid, Typography } from "@mui/material";
import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { menus, dishes } from "../../entity/common";
import styles from "./Menus.module.scss";
// import valiables from "../../styles/variables.scss";
import { Stack } from "@mui/material";
import CardDishes from "../../components/card/CardDishes";
import { dishes as disheItem, menu} from "../../interface/interface";

export interface MenusProps {}

export default function Menus(props: MenusProps) {
  const router = useRouter();
  const [menu, setMenu] = useState<menu>();
  const [dishesList, setDishesList] = useState<disheItem[]>();
  const gotoHashtag = (hashtag: string) => {
    router.push(`/explore/${hashtag}`);
  };
  const getDishesList = (disheListId: number[]) => {
    if (!disheListId.length) return [];
    let newList: disheItem[] = [];
    disheListId.forEach((o) => {
      let newItem = dishes.find((item) => item.dishesId === o);
      if (newItem) newList.push(newItem);
    });
    setDishesList(newList);
  };
  useEffect(() => {
    let term = menus.find(
      (item) =>
        item.menusName.trim().toLocaleLowerCase() ===
        router.query.explore?.toString().trim().toLocaleLowerCase()
    );
    if (term) {
      setMenu(term);
    }
    getDishesList(term?.dishesIds || []);
  }, [router]);
  return (
    <div style={{ marginTop: "60px" }} className="pt-5 container">
      <Breadcrumbs aria-label="breadcrumb">
        <Link href="/explore">
          <a>Explore</a>
        </Link>
        <Typography color="text.primary">{router.query.explore}</Typography>
      </Breadcrumbs>
      <Grid container spacing={2} className={` ${styles.menusHead}`}>
        <Grid item xs={12} md={9}>
          <Stack direction="column" spacing={2}>
            <Stack
              direction="row"
              className={`${styles.menusHeadImage}`}
              alignItems="center"
              sx={{ marginTop: "20px" }}
            >
              <img src={menu?.linkImg || "/"} height={100} />
              <h1 className="ms-3">{menu?.menusName}</h1>
            </Stack>
            <Stack direction="row" spacing={2}>
              {menu?.hashtag?.map((item, index) => (
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: "20px",
                    backgroundColor: "#1c0056",
                    "&:hover": {
                      backgroundColor: "#1c0056",
                    },
                    textTransform: "none",
                  }}
                  key={index}
                  onClick={() => gotoHashtag(item)}
                >
                  {item}
                </Button>
              ))}
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} md={3}>
          {/* <Button variant="contained">Contained</Button> */}
        </Grid>
      </Grid>
      <Typography sx={{ paddingTop: "3rem" }}>{menu?.description}</Typography>
      <Grid container spacing={1} sx={{ marginTop: "3rem" }} direction="column">
        <h5>Top Dishes</h5>
        <Stack direction="row" spacing={1}>
          {dishesList?.map((item, index) => (
            <CardDishes item={item} key={index} />
          ))}
        </Stack>
      </Grid>
    </div>
  );
}
