import { Checkbox } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import CardProduct from "../../components/card/CardProduct";
import SideFilter from "../../components/sideBar/SideFilter";
import { productTrending } from "../../entity/Highlight";
import { FilterContext } from "../../provider/provider";

export interface ExploreProps {}

export type product = {
  linkImg: string;
  name: string;
  price: number;
  sale: number;
  dietary: string;
  promotion: string;
};

export default function Explore(props: ExploreProps) {
  const { keywordGlobal, dietGlobal, promotionGlobal } =
    useContext(FilterContext);
  const [products, setProducts] = useState<product[]>([]);
  useEffect(() => {
    const filterProductTrending = () => {
      let newData = [...productTrending];
      if (keywordGlobal !== "") {
        for (let i in newData) {
          if (!newData[i].name.includes(keywordGlobal)) {
            newData.splice(Number(i), 1);
          }
        }
      }
      if (dietGlobal.length) {
        for (let i = 0; i < newData.length; i++) {
          let checkDiet = true;
          for (let o of dietGlobal) {
            if (newData[i].dietary === o) {
              checkDiet = false;
              break;
            }
          }
          if (checkDiet) {
            newData.splice(Number(i), 1);
            i--;
          }
        }
      }
      if (promotionGlobal !== "") {
        for (let i = 0; i < newData.length; i++) {
          if (newData[i].promotion !== promotionGlobal) {
            newData.splice(Number(i), 1);
            i--;
          }
        }
      }
      setProducts(newData);
    };
    filterProductTrending();
  }, [keywordGlobal, dietGlobal, promotionGlobal]);
  return (
    <div style={{ marginTop: "60px" }} className="d-flex">
      <div className="sideFilter col-2">
        <SideFilter />
      </div>
      <div className="show col-10 d-flex flex-wrap">
        {products?.map((item, index) => (
          <div key={index} className="ms-2">
            <CardProduct item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
