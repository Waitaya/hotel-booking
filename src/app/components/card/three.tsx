import { IHotel } from "@/interfaces";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface Props {
  hotel: IHotel;
}

const CardThree = ({ hotel }: Props) => {
  const router = useRouter();

  const { name, images, id } = hotel;

  return (
    <div
      onClick={() => router.push(`/hotels/${id}`)}
      className="cursor-pointer"
    >
      <div
        className="relative pb-[48%]"
        style={{ filter: "drop-shadow(0px 0px 3px rgba(0,0,0,0.21 ))" }}
      >
        <div className="absolute flex h-full w-full items-center justify-center">
          <Image fill alt="slide" src={images.cover} sizes="30vw" />
        </div>
      </div>

      <p className="text-steelGray text-sm mt-1">{name}</p>
    </div>
  );
};

export default CardThree;
