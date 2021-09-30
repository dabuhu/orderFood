import { Provider, useState } from "react";
import { ReactElement } from "react";
import React, { createContext } from "react";

export interface IAppProps {
  children: ReactElement;
}
export interface GlobalContent  {
  keywordGlobal:string,
  dietGlobal:string[],
  promotionGlobal:string,
  setGlobalDiet:(dietGlobal:string[])=>void,
  setGlobalPromotion:(keywordGlobal:string)=>void,
  setGlobalKeyword:(promotionGlobal:string)=>void,
};
const detfauldFilter = {
  keywordGlobal:'',
  dietGlobal:[],
  promotionGlobal:'',
  setGlobalDiet:()=>{},
  setGlobalPromotion:()=>{},
  setGlobalKeyword:()=>{},
};
export const FilterContext = createContext<GlobalContent>(detfauldFilter);
const FilterProvider = ({ children }: IAppProps) => {
  const [keywordGlobal, setKeywordGlobal] = useState(detfauldFilter.keywordGlobal);
  const [dietGlobal, setDietGlobal] = useState(detfauldFilter.dietGlobal);
  const [promotionGlobal, setPromotionGlobal] = useState(detfauldFilter.promotionGlobal);

  //edit filters
  const setGlobalKeyword = (data: any) => {
    setKeywordGlobal(data);
  };
  const setGlobalDiet = (data: any) => {
    setDietGlobal(data);
  };
  const setGlobalPromotion = (data: any) => {
    setPromotionGlobal(data);
  };

  const filterContext = { keywordGlobal,dietGlobal,promotionGlobal,setGlobalDiet,setGlobalPromotion, setGlobalKeyword };
  return (
    <FilterContext.Provider value={filterContext}>{children}</FilterContext.Provider>
  );
};
export default FilterProvider;
