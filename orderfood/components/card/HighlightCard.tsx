import React from "react";
import Image from "next/image";
import Link from "next/Link";
import styles from './styleCard.module.scss';

export interface HighlightCardProps {
  item: highlight;
}
type highlight = {
  linkImg: string;
  highlightId?: number;
  linkTo: string;
  label?: string;
};
export default function HighlightCard({ item }: HighlightCardProps) {
  return (
    <div>
      <Link href={item.linkTo}>
        <a className={`d-flex flex-column justify-content-center align-items-center ${styles.highlightImg}`}>
          <div className="px-2">
            <Image src={item.linkImg} height={140} width={140} />
          </div>
          <span className={styles.textNone}>{item.label}</span>
        </a>
      </Link>
    </div>
  );
}
