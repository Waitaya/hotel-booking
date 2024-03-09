import Image from "next/image";
import React from "react";

interface Props {
  onClick: Function;
}

const CardFour = ({ onClick }: Props) => {
  return (
    <div
      onClick={() => {
        onClick();
      }}
      className="border border-solid border-[#d1d1d1] flex rounded w-full cursor-pointer"
    >
      <div className="w-[30%] min-w-[30%]">
        <div className="relative pb-[96%]">
          <div className="absolute flex h-full w-full items-center justify-center">
            <Image fill alt="slide" src="/images/bed-room.png" sizes="30vw" />
          </div>
        </div>
      </div>

      <div className="flex-1 pl-2 md:pl-4 py-2 pt-3">
        <p className="text-steelGray text-xs 2xl:text-sm">Deluxe Room</p>
        <p className="text-primary font-semibold text-base md:text-lg 2xl:text-2xl mt-1">
          1,500 BAHT/night
        </p>
      </div>

      <div className="bg-primary text-white w-10 2xl:w-12 flex justify-center items-center rounded">
        <div className="rotate-90 text-nowrap text-xs 2xl:text-sm">
          Book Now
        </div>
      </div>
    </div>
  );
};

export default CardFour;
