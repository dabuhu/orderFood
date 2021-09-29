import * as React from "react";
import Image from "next/image";
import BannerImg from '../../public/images/banner/banner.jpg';

export interface BannerProps {}

export default function Banner(props: BannerProps) {
  return (
    <div className='red'>
        <Image
        src={BannerImg}
        alt="Diet food"
        />
    </div>
  );
}
