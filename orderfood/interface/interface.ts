export interface product {
  linkImg: string;
  name: string;
  price: number;
  sale: number;
  dietary: string;
  promotion: string;
  linkTo?: string;
}
export interface dishes {
  linkImg: string;
  dishesName: string;
  linkTo?: string;
}
export interface menu {
  menusId: number;
  menusName: string;
  linkImg: string;
  description: string;
  hashtag: string[];
  dishesIds: number[];
}
