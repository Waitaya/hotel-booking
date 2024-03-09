"use client";

import { Button } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const PaymentDone = () => {
  const router = useRouter();

  return (
    <div className="flex items-center p-4 flex-col w-full h-screen justify-center">
      <div className="relative w-full md:w-[300px] lg:w-[400px] 2xl:w-[640px] max-w-[638px]">
        <div className="relative pb-[75%]">
          <Image
            src="/images/undraw-astronaut.png"
            fill
            sizes="50vw"
            alt="payment done"
          />
        </div>
      </div>
      <h1 className="text-primary text-xl md:text-lg lg:text-3xl 2xl:text-[48px] my-5">
        Booking Successfully completed
      </h1>
      <p className="font-light text-sm md:text-base lg:text-lg 2xl:text-xl m-0 p-0 text-center">
        Your trip schedule is ready,please check under profile.
      </p>
      <Button
        onClick={() => router.push("/")}
        type="primary"
        className="mt-5 !px-14 w-fit !py-5 !flex !rounded-[4px] !text-lg !font-normal justify-center items-center"
      >
        Home
      </Button>
    </div>
  );
};

export default PaymentDone;
