import * as React from "react";
import Image from "next/image";
import Link from 'next/link';
import { dishes } from "../../interface/interface";

export interface CardDishesProps {
  item: dishes;
}

export default function CardDishes({ item }: CardDishesProps) {
  return (
    <div >
      <Link href={item.linkTo||'#'}>
        <a
          className={`d-flex flex-column justify-content-center align-item-center `}
        >
          <div>
            <Image src={item.linkImg} height={350} width={350} />
          </div>
          <div className="ms-2">
            <h5 className={``}>{item.dishesName}</h5>
          </div>
        </a>
      </Link>
    </div>
  );
}
