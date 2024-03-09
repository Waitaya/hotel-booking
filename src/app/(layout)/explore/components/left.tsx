import CardOne from "@/app/components/card/one";
import {
  AirplaneIcon,
  BuildingIcon,
  CarIcon,
  LocationIcon,
} from "@/app/components/icons";
import DateRangePicker from "@/app/components/input/dateRangePicker";
import { IHotel } from "@/interfaces";
import { hotelAPI } from "@/networks";
import { EnvironmentOutlined, TeamOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const options = [
  { label: "Hotel", icon: <BuildingIcon /> },
  { label: "Flight", icon: <AirplaneIcon /> },
  { label: "Car", icon: <CarIcon /> },
];

const Left = () => {
  const router = useRouter();

  const [recentSearch, setRecentSearch] = useState<IHotel[]>([]);
  const [selectedOption, setSelectedOption] = useState<string | undefined>(
    "Hotel"
  );

  const handleDate = (values: { startDate: string; endDate: string }) => {
    console.log("values :>> ", values);
  };

  const fetch = async () => {
    const { data } = await hotelAPI.getAll();
    setRecentSearch(data);
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      <div>
        <Input placeholder="Search city , Country, Place for Travel advisory" />

        <p className="text-primary text-2xl md:text-3xl font-medium mt-10">
          What Are You Looking For?
        </p>

        <div className="flex md:gap-28 my-9 items-center justify-around md:justify-center">
          {options.map(({ icon, label }) => {
            const isSelected = label === selectedOption;
            const textColor = isSelected ? "text-white" : "text-doveGray";
            const selectedBackground = isSelected ? "bg-primary" : "hidden";
            return (
              <div
                key={label}
                className="flex flex-col gap-5 cursor-pointer"
                onClick={() => setSelectedOption(label)}
              >
                <div className="flex flex-col relative items-center justify-center">
                  <div
                    className={`w-[58px] h-[58px] rounded-full absolute ${selectedBackground}`}
                  />
                  <div className={`z-10 h-8 ${textColor}`}>{icon}</div>
                </div>
                <span className="text-center text-doveGray">{label}</span>
              </div>
            );
          })}
        </div>

        <div className="w-full flex flex-col gap-[14px]">
          <Input
            prefix={
              <EnvironmentOutlined className="!text-mountainMist text-lg mr-7" />
            }
            className="!bg-transparent border border-solid !border-primary !rounded-[4px]"
            placeholder="Location"
          />
          <DateRangePicker allowClear={false} onValue={(e) => handleDate(e)} />
          <Input
            prefix={
              <TeamOutlined className="!text-mountainMist text-lg mr-7" />
            }
            className="border border-solid !border-meelrose !rounded-[4px]"
            placeholder="Facilities"
          />
          <div className="flex justify-center mt-2">
            <Button
              onClick={() => router.push("/hotels")}
              type="primary"
              className="!px-14 w-fit !py-5 !flex !rounded-[4px] !text-lg !font-normal justify-center items-center"
            >
              Search
            </Button>
          </div>
        </div>
      </div>

      <p className="text-steelGray m-0 p-0 font-medium text-xl py-6">
        Recent Searches
      </p>

      <div className="overflow-auto flex flex-col gap-6 lg:h-[calc(100vh_-_628px)]">
        {recentSearch.map((hotel, index) => (
          <CardOne key={index} hotel={hotel} />
        ))}
      </div>
    </>
  );
};

export default Left;
