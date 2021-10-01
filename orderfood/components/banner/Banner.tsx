import { Tabs, Box, Tab, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import styles from "./Banner.module.scss";
import DirectionsCarRoundedIcon from "@mui/icons-material/DirectionsCarRounded";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { useForm } from "react-hook-form";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import LocationOnIcon from '@mui/icons-material/LocationOn';
export interface BannerProps {}

export default function Banner(props: BannerProps) {
  const router = useRouter();
  const [tabValue, setTabValue] = useState("Delivery");
  const [whereValue, setWhereValue] = useState('');
  const [displayLocation, setDisplayLocation] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();
  const handleSubmitFindFood = (data: any) => {
    router.push("/explore");
  };

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
  };
  // useState(()=>{
  //   setValue("where",'123')
  // },[])
  return (
    <div className={`${styles.bannerFood} `}>
      <div
        className={`container d-flex align-items-center ${styles.bannerFoodContent}`}
      >
        <h1 className="col-sm-6 col-12">
          Every meal matters. Discover favorites for any occassion
        </h1>
        <div className={`col-sm-6 col-12 justify-content-center`}>
          <form
            onSubmit={handleSubmit(handleSubmitFindFood)}
            className={` ${styles.bannerForm}`}
          >
            <Box sx={{ width: "100%", padding: "10px" }}>
              <Tabs
                sx={{ width: "100%" }}
                value={tabValue}
                onChange={handleChange}
                aria-label="wrapped label tabs example"
              >
                <Tab
                  sx={{ width: "50%" }}
                  value="Delivery"
                  label={
                    <>
                      <DirectionsCarRoundedIcon />
                      Delivery
                    </>
                  }
                />
                <Tab
                  value="Pickup"
                  label={
                    <>
                      <ShoppingBagIcon />
                      Pickup
                    </>
                  }
                  sx={{ width: "50%" }}
                />
              </Tabs>
              <div className={`${styles.bannerFormInput}`}>
                <TextField
                  label="To where?"
                  id="to-where"
                  placeholder="Anywhere"
                  size="small"
                  value={whereValue}
                  variant="standard"
                  sx={{ width: "100%" }}
                  onBlur={() => setDisplayLocation(false)}
                  onFocus={() => setDisplayLocation(true)}
                  // {...register('where')}
                />
              </div>
              <div
                className={`${styles.bannerFormLocation} ${
                  displayLocation ? "" : "d-none"
                } cursor-pointer`}
                onClick={()=>setWhereValue('Ha Noi, Viet Nam')}
              >
                <LocationOnIcon/> <u>Use curent Location</u>
              </div>
              <div className={`${styles.bannerFormInput}`}>
                <TextField
                  label="For when?"
                  id="for-when"
                  placeholder="Anytime"
                  size="small"
                  variant="standard"
                  sx={{ width: "100%" }}
                  {...register('when')}
                />
              </div>
              <div className="d-flex w-100 justify-content-center mb-2">
                <Button
                  variant="contained"
                  sx={{
                    backgroundImage:
                      "linear-gradient(to right, #000 , #333399)",
                  }}
                  type="submit"
                >
                  Find Food
                </Button>
              </div>
            </Box>
          </form>
          <Link href="/explore">
            <a className="text-white">Skip and explore all restaurants</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
