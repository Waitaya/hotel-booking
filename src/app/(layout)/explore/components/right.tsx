import { RightCircleOutlined } from "@ant-design/icons";
import Image from "next/image";
import React from "react";

const Right = () => {
  return (
    <div className="relative h-screen">
      <Image fill alt="slide" src="/images/incredible-india.png" sizes="50vw" />
      <Image
        fill
        alt="slide"
        src="/images/incredible-bg.png"
        sizes="50vw"
        className="z-10"
      />
      <div className="absolute z-20 left-16 right-4 text-white bottom-1/4">
        <p className="lg:text-[40px] 2xl:text-[63px] p-0 ml-8 font-normal">
          Incredible India
        </p>
        <p className="lg:text-2xl 2xl:text-[33px] ml-6 font-normal my-2">
          “For where thy treasure is, there also will thy heart be.”
        </p>

        <div
          className="text-lg ml-6 mt-4 2xl:text-xl !text-white opacity-80 flex justify-center items-center rounded lg:w-28 lg:h-12 2xl:w-32 2xl:h-16"
          style={{
            background:
              "linear-gradient(134deg, rgba(255,255,255,0.4 ) 0.00%, rgba(255,255,255,0.3 ) 100.00%)",
          }}
        >
          Take Tour
        </div>
      </div>

      <div className="right-10 z-20 bottom-1/2 absolute">
        <RightCircleOutlined className="text-[44px] !text-white" />
      </div>
    </div>
  );
};

export default Right;
