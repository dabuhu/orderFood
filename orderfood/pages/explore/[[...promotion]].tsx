import { useRouter } from "next/dist/client/router";
import React, { useContext, useEffect, useState } from "react";
import CardProduct from "../../components/card/CardProduct";
import SideFilter from "../../components/sideBar/SideFilter";
import { productList } from "../../entity/Highlight";
import { FilterContext } from "../../provider/provider";

export interface PromotionProps {}
export type product = {
  linkImg: string;
  name: string;
  price: number;
  sale: number;
  dietary: string;
  promotion: string;
};
export default function Promotion(props: PromotionProps) {
  const router = useRouter();
  const { keywordGlobal, dietGlobal, promotionGlobal, setGlobalPromotion } =
    useContext(FilterContext);
  const [products, setProducts] = useState<product[]>([]);
  useEffect(() => {
    const filterProducts = () => {
      let newData = [...productList];
      if (keywordGlobal !== "") {
        for (let i = 0; i < newData.length; i++) {
          if (
            !newData[i].name
              .trim()
              .toLocaleLowerCase()
              .includes(keywordGlobal.trim().toLocaleLowerCase())
          ) {
            newData.splice(Number(i), 1);
            i--;
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
          if (
            newData[i].promotion.trim().toLocaleLowerCase() !==
            promotionGlobal.trim().toLocaleLowerCase()
          ) {
            newData.splice(Number(i), 1);
            i--;
          }
        }
      }
      setProducts(newData);
    };
    filterProducts();
  }, [keywordGlobal, dietGlobal, promotionGlobal]);
  useEffect(() => {
    setGlobalPromotion(router.query.promotion?.toString() || "");
  }, [router]);
  return (
    <div style={{ marginTop: "60px" }} className="d-flex">
      <div className="sideFilter col-2">
        <SideFilter />
      </div>
      <div className="show col-10 d-flex flex-wrap">
        {products.length ? (
          products?.map((item, index) => (
            <div key={index} className="ms-2">
              <CardProduct item={item} />
            </div>
          ))
        ) : (
          <h4 className="p-5">No products...</h4>
        )}
      </div>
    </div>
  );
}
