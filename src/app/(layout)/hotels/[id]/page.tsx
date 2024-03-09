"use client";

import CardFour from "@/app/components/card/four";
import {
  BathIcon,
  ClocksIcon,
  DemandIcon,
  GlassAndBottleIcon,
  MessageBox,
  SportCarIcon,
  WifiIcon,
} from "@/app/components/icons";
import Wrap from "@/app/components/wrap";
import { IHotel } from "@/interfaces";
import { hotelAPI } from "@/networks";
import { EllipsisOutlined, StarFilled } from "@ant-design/icons";
import { Button, Input } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

interface Props {
  params: {
    id: string;
  };
}

const ratings = [
  { label: "Housekeeping", number: 4 },
  { label: "Food", number: 5 },
  { label: "Service", number: 4 },
  { label: "Staff", number: 4 },
];

const facilities = [
  { icon: <SportCarIcon /> },
  { icon: <BathIcon /> },
  { icon: <GlassAndBottleIcon /> },
  { icon: <WifiIcon /> },
  { icon: <ClocksIcon /> },
  { icon: <EllipsisOutlined /> },
];

const HotelPage = ({ params }: Props) => {
  const router = useRouter();
  const [hotel, setHotel] = useState<IHotel>();

  const fetch = async () => {
    const { data } = await hotelAPI.getById(params.id);
    setHotel(data);
  };

  useEffect(() => {
    fetch();
  }, []);

  if (!hotel) return <h1 className="text-center">Loading ....</h1>;

  const { name, address, price, images, id } = hotel;

  return (
    <Wrap>
      <div className="lg:pr-[67px]">
        <Input placeholder="Search city , Country, Place for Travel advisory" />

        <div className="xl:grid grid-cols-3 gap-[84px] mt-6">
          <div className="col-span-2">
            <div className="flex gap-1 lg:gap-3 w-full">
              <div className="w-[61.8%]">
                <div className="relative pb-[66%]">
                  <Image fill alt="slide" src={images.desc[0]} sizes="30vw" />
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-1 lg:gap-3">
                <div className="relative pb-[69%]">
                  <Image fill alt="slide" src={images.desc[1]} sizes="30vw" />
                </div>
                <div className="flex-1">
                  <div className="grid grid-cols-2 gap-1 lg:gap-3 h-full">
                    <div className="h-full">
                      <div className="relative h-full">
                        <Image
                          fill
                          alt="slide"
                          src={images.desc[2]}
                          sizes="30vw"
                        />
                      </div>
                    </div>
                    <div className="h-full">
                      <div className="relative h-full">
                        <Image
                          fill
                          alt="slide"
                          src={images.desc[3]}
                          sizes="30vw"
                        />
                        <div className="w-full absolute h-full z-30 bg-steelGray opacity-30 rounded" />
                        <div className="w-full h-full absolute z-40 flex items-center justify-center text-xs md:text-base 2xl:text-lg text-white">
                          See all
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-2 lg:mt-4 justify-between">
              <div>
                <h1 className="text-lg lg:text-xl xl:text-[28px] text-steelGray m-0 p-0">
                  {name}
                </h1>
                <p className="text-meelrose2 m-0 p-0 text-xs lg:text-base xl:text-lg">
                  {address.district}, {address.city}, {address.country}
                </p>
              </div>
              <Button
                type="primary"
                ghost
                onClick={() => router.push(`/hotels/${params.id}/review`)}
                className="!font-medium !text-sm md:!text-base !px-4 !py-5 2xl:!text-lg lg:!py-6 lg:!px-7 !flex justify-center items-center"
              >
                Price Starting from {price.toLocaleString()} BAHT
              </Button>
            </div>

            <div className="flex flex-col lg:flex-row gap-3 lg:gap-7 xl:gap-20 2xl:gap-24 w-full mt-10">
              <CardFour onClick={() => router.push(`/hotels/${id}/review`)} />
              <CardFour onClick={() => router.push(`/hotels/${id}/review`)} />
            </div>
          </div>

          <div className="mt-4 px-[2px] xl:px-0 mb-4">
            <div
              className="bg-white p-8 2xl:p-10 rounded"
              style={{ filter: "drop-shadow(0px 0px 3px rgba(0,0,0,0.16 ))" }}
            >
              <div className="relative">
                <MessageBox className="absolute" />
                <p className="absolute left-4 top-4 text-xl text-white">8.4</p>
              </div>

              <div className="ml-24 mb-6">
                <p className="text-steelGray text-lg 2xl:text-xl font-medium">
                  Excellent
                </p>
                <span className="text-meelrose2 text-sm 2xl:text-base">
                  6879 Reviews
                </span>
              </div>

              {ratings.map((rating, index) => (
                <div key={index} className="flex gap-4 2xl:gap-6 items-center">
                  <p className="text-sm 2xl:text-base text-steelGray min-w-[114px]">
                    {rating.label}
                  </p>
                  <div className="text-gamboge">
                    {Array.from(Array(rating.number)).map((_, iNumber) => (
                      <StarFilled key={iNumber} />
                    ))}
                  </div>
                </div>
              ))}

              <p className="text-steelGray text-sm 2xl:text-base mt-4 mb-2">
                Services
              </p>

              <div className="gap-5 my-1 hidden md:flex">
                {facilities.map((facility, index) => (
                  <div
                    key={index}
                    className="bg-white w-[30px] h-[30px] rounded-[10px] flex justify-center items-center"
                    style={{
                      filter: "drop-shadow(0px 0px 3px rgba(0,0,0,0.19 ))",
                    }}
                  >
                    {facility.icon}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 flex gap-5 items-center">
              <DemandIcon />
              <span className="text-sm 2xl:text-xl">
                This property is in highly demand today.
              </span>
            </div>
          </div>
        </div>
      </div>
    </Wrap>
  );
};

export default HotelPage;
