import { IHotel } from "@/interfaces";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface Props {
  hotel: IHotel;
}

const CardTwo = ({ hotel }: Props) => {
  const router = useRouter();
  const { name, images, price, id } = hotel;

  return (
    <div>
      <div className="relative pb-[58%]">
        <div className="absolute flex h-full w-full items-center justify-center">
          <Image fill alt="slide" src={images.cover} sizes="30vw" />
        </div>
      </div>

      <div className="flex justify-between items-center mt-3 gap-2">
        <div className="text-steelGray overflow-hidden">
          <p className="text-base 2xl:text-xl truncate">{name}</p>
          <p className="text-xs 2xl:text-base truncate">
            Price starts from {price.toLocaleString()}
          </p>
        </div>
        <div
          className="text-primary text-sm 2xl:text-base cursor-pointer hover:opacity-70 py-2 px-6 bg-white rounded-[4px] whitespace-nowrap"
          style={{ filter: "drop-shadow(0px 0px 3px rgba(0,0,0,0.2 ))" }}
          onClick={() => router.push(`/hotels/${id}`)}
        >
          View Details
        </div>
      </div>
    </div>
  );
};

export default CardTwo;
