import * as React from "react";
import Image from "next/image";
import Link from 'next/link';
import styles from "./styleCard.module.scss";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { Button } from "@mui/material";

export interface CardProductProps {
  item: cardItem;
}
type cardItem = {
  linkImg: string;
  name: string;
  price: number;
  sale: number;
};
export default function CardProduct({ item }: CardProductProps) {
  return (
    <div className={`${styles.cardProduct}`}>
      <Link href="#">
        <a
          className={`d-flex flex-column justify-content-center align-item-center ${styles.cardProductImg}`}
        >
          <div>
            <Image src={item.linkImg} height={350} width={350} />
          </div>
          <div className="ms-2">
            <h5 className={`${styles.textNone}`}>{item.name}</h5>
            <p>
              <MonetizationOnOutlinedIcon /> Min. ${item.price}
            </p>
          </div>
          <div className={`mt-5 p-2 ${styles.cardProductGoToShop}`}>
            <Button variant="outlined">Go to shop</Button>
          </div>
        </a>
      </Link>
    </div>
  );
}
