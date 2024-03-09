import { EllipsisOutlined, StarFilled } from "@ant-design/icons";
import Image from "next/image";
import React from "react";
import {
  BathIcon,
  ClocksIcon,
  GlassAndBottleIcon,
  SportCarIcon,
  WifiIcon,
} from "../icons";
import { IHotel } from "@/interfaces";
import { useRouter } from "next/navigation";

interface Props {
  hotel: IHotel;
}

const CardOne = ({ hotel }: Props) => {
  const router = useRouter();

  const { name, images, price, reviews, services, id } = hotel;

  const facilities = [
    { icon: <SportCarIcon /> },
    { icon: <BathIcon /> },
    { icon: <GlassAndBottleIcon /> },
    { icon: <WifiIcon /> },
    { icon: <ClocksIcon /> },
    { icon: <EllipsisOutlined /> },
  ];

  return (
    <div
      onClick={() => router.push(`/hotels/${id}`)}
      className="border border-solid border-[#d1d1d1] flex rounded cursor-pointer"
    >
      <div className="w-[30%] min-w-[30%]">
        <div className="relative pb-[96%]">
          <div className="absolute flex h-full w-full items-center justify-center">
            <Image fill alt="slide" src={images.cover} sizes="30vw" />
          </div>
        </div>
      </div>

      <div className="flex-1 pl-4 md:pl-8 py-2 overflow-hidden">
        <p className="text-steelGray text-base md:text-lg p-0 m-0 font-medium truncate">
          {name}
        </p>
        <div className="flex gap-1">
          {Array.from(Array(4)).map((_, index) => (
            <StarFilled key={index} className="!text-saffronMango text-xs" />
          ))}
        </div>

        <div className="flex items-center gap-4 my-1">
          <div className="bg-carnation rounded-[14px] text-[10px] md:text-xs flex text-white px-2 py-1 gap-1">
            <StarFilled />
            <span className="">4.9</span>
          </div>
          <p className="text-silverChalice text-xs md:text-sm m-0 p-0">
            {reviews} Reviews
          </p>
        </div>

        <p className="hidden md:block m-0 p-0 text-silverChalice text-xs md:text-sm">
          Amenities
        </p>

        <div className="gap-5 my-1 hidden md:flex">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="bg-white w-[30px] h-[30px] rounded-[10px] flex justify-center items-center"
              style={{ filter: "drop-shadow(9px 9px 8px rgba(0,0,0,0.22 ))" }}
            >
              {facility.icon}
            </div>
          ))}
        </div>

        <p className="text-primary p-0 m-0 font-medium mt-1.5 md:mt-2">
          {price.toLocaleString()}/night
        </p>
      </div>

      <div className="bg-primary text-white w-12 md:w-16 flex justify-center items-center rounded">
        <div className="rotate-90 text-nowrap text-base md:text-lg">
          Book Now
        </div>
      </div>
    </div>
  );
};

export default CardOne;
