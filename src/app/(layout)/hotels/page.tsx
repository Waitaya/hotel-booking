"use client";

import { Button, Input } from "antd";
import React, { useEffect, useState } from "react";
import CardTwo from "../../components/card/two";
import CardThree from "../../components/card/three";
import Wrap from "../../components/wrap";
import { hotelAPI } from "@/networks";
import { IHotel } from "@/interfaces";

const HotelsPage = () => {
  const [hotels, setHotels] = useState<IHotel[]>([]);
  const [recommended, setRecommended] = useState<IHotel[]>([]);

  const fetch = async (search: string) => {
    const { data } = await hotelAPI.getAll(search);
    const { data: recomend } = await hotelAPI.getRecommended();
    setHotels(data);
    setRecommended(recomend);
  };

  useEffect(() => {
    fetch("");
  }, []);

  return (
    <Wrap>
      <div className="flex lg:gap-7 xl:gap-14">
        <div className="w-full">
          <Input
            placeholder="Search city , Country, Place for Travel advisory"
            onChange={(e) => fetch(e.target.value)}
          />
          <div className="mt-5 flex justify-between items-center">
            <p className="p-0 m-0 steelGray text-sm lg:text-xl font-medium">
              Best places to enjoy your stay
            </p>
            <div className="flex gap-5">
              <Button
                type="primary"
                ghost
                className="!font-medium !text-base !px-4 !py-5 !xl:text-xl lg:!py-6 lg:!px-7 !flex justify-center items-center"
              >
                Sort By
              </Button>
              <Button
                type="primary"
                ghost
                className="!font-medium !text-base !px-4 !py-5 !xl:text-xl lg:!py-6 lg:!px-7 !flex justify-center items-center"
              >
                Filter
              </Button>
            </div>
          </div>

          {hotels.length === 0 ? (
            <h1 className="text-center mt-4">Not found</h1>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[22px] mt-3">
              {hotels.map((hotel, index) => (
                <CardTwo key={index} hotel={hotel} />
              ))}
            </div>
          )}
        </div>
        <div
          className="w-72 mt-[68px] rounded-[4px] bg-white min-h-full p-[14px] pt-7 hidden lg:block"
          style={{ filter: "drop-shadow(-10px 0px 18px rgba(0,0,0,0.1 ))" }}
        >
          <p className="text-steelGray text-lg mb-2">Recomanded</p>
          <div className="flex flex-col gap-8">
            {recommended.map((hotel, index) => (
              <CardThree key={index} hotel={hotel} />
            ))}
          </div>
        </div>
      </div>
    </Wrap>
  );
};

export default HotelsPage;
