"use client";

import React, { useState } from "react";
import Wrap from "../../components/wrap";
import Image from "next/image";
import { RightOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { payments } from "@/constants/payments";

const totalDesc = [
  { label: "Base fare", price: 1000 },
  { label: "Total discount", price: 0 },
  { label: "Price after discount", price: 1000 },
  { label: "Taxes & service fees", price: 140 },
];

const PaymentsPage = () => {
  const router = useRouter();

  const [selected, setSelected] = useState("");

  return (
    <Wrap>
      <div className="mt-6 mb-5">
        <h1 className="text-steelGray font-medium text-2xl mb-4">
          Payment Details
        </h1>
        <div className="lg:grid grid-cols-3 gap-4 mb-4">
          {/* ----------- Left ---------*/}
          <div className="col-span-2">
            <div className="pl-3">
              {payments.map((payment) => {
                const { key, label, path } = payment;
                const isMatch = key === selected;
                return (
                  <div
                    key={key}
                    onClick={() => {
                      setSelected(key);
                      router.push("/done");
                    }}
                    className={`flex justify-between bg-white p-6 max-w-[600px] rounded-xl cursor-pointer ${
                      isMatch ? "border border-solid border-primary" : "pl-1"
                    }`}
                    style={
                      isMatch
                        ? {
                            filter:
                              "drop-shadow(0px 0px 8px rgba(0,0,0,0.16 ))",
                          }
                        : {}
                    }
                  >
                    <div className="flex gap-6 items-center">
                      <Image src={path} width={59} height={59} alt={label} />
                      <p className="text-steelGray text-xl">{label}</p>
                    </div>
                    {isMatch && (
                      <RightOutlined className="!text-primary text-xl" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* ----------- Right ---------*/}
          <div className="lg:pr-16 px-1">
            <div
              className="rounded bg-white p-4"
              style={{ filter: "drop-shadow(0px 0px 3px rgba(0,0,0,0.16 ))" }}
            >
              {totalDesc.map((total, index) => (
                <div
                  key={index}
                  className="flex justify-between text-base 2xl:text-xl mb-2"
                >
                  <span className="opacity-55">{total.label}</span>
                  <span className="text-meelrose2">
                    {total.price.toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </span>
                </div>
              ))}
              <div className="flex justify-between text-lg 2xl:text-[22px] mb-2">
                <span className="text-steelGray font-semibold">
                  Total Amount
                </span>
                <span className="text-primary font-semibold">
                  {(1140).toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrap>
  );
};

export default PaymentsPage;
