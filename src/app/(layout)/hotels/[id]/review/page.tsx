"use client";

import Wrap from "@/app/components/wrap";
import { IHotel } from "@/interfaces";
import { hotelAPI } from "@/networks";
import { StarFilled } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

interface IForm {
  fName: string;
  lName: string;
  email: string;
  phone: string;
  special: string;
}

const totalDesc = [
  { label: "1 room X 1 night", price: 1000 },
  { label: "Total discount", price: 0 },
  { label: "Price after discount", price: 1000 },
  { label: "Taxes & service fees", price: 140 },
];

const ReviewHotelPage = () => {
  const router = useRouter();
  const params = useParams();
  const id = params.id;
  const [form] = Form.useForm();

  const [hotel, setHotel] = useState<IHotel>();

  const fetch = async () => {
    const { data } = await hotelAPI.getById(String(id));
    setHotel(data);
  };

  useEffect(() => {
    fetch();
  }, []);

  const onFinish = async (values: IForm) => {
    console.log("form values :>> ", values);
    router.push("/payments");
  };

  if (!hotel) return <h1 className="text-center">Loading ....</h1>;

  const { name, images } = hotel;

  return (
    <Wrap>
      <div className="lg:pr-24">
        <Input placeholder="Search city , Country, Place for Travel advisory" />

        <div className="lg:grid grid-cols-3 lg:gap-28 2xl:gap-[140px] mt-6">
          {/* ----------- Left ---------*/}
          <div className="col-span-2">
            <p className="text-steelGray text-lg 2xl:text-2xl font-medium">
              Review your booking
            </p>

            <div className="md:flex justify-between gap-4">
              <div>
                <div className="flex gap-6 items-center my-1">
                  <p className="text-primary text-base md:text-lg 2xl:text-[22px] m-0 p-0">
                    {name}
                  </p>
                  <div className="text-nowrap">
                    {Array.from(Array(4)).map((_, index) => (
                      <StarFilled
                        key={index}
                        className="!text-saffronMango text-sm md:text-xl"
                      />
                    ))}
                  </div>
                </div>
                <p className="text-xs md:text-base 2xl:text-xl mb-1 opacity-55">
                  Tambudki, Arpora, goa, Goa, India
                </p>
                <p className="text-xs md:text-base 2xl:text-xl mb-1 opacity-55">
                  This hotel is reviewed by global firm
                </p>
              </div>
              <div className="w-full md:min-w-[180px] md:max-w-[230px]">
                <div className="relative pb-[45%]">
                  <Image fill alt="slide" src={images.cover} sizes="30vw" />
                </div>
              </div>
            </div>

            <div className="bg-zircon p-5 rounded-[15px] my-4 md:my-6 xl:my-8 flex items-center flex-wrap gap-2 justify-between">
              <div className="flex flex-col">
                <span className="opacity-55 text-xs 2xl:text-base">
                  Check-in
                </span>
                <p className="text-steelGray text-base 2xl:text-xl">
                  Sunday 21, Dec
                </p>
                <span className="opacity-55 text-xs 2xl:text-base">10am</span>
              </div>
              <div className="bg-meelrose2 px-8 py-3 2xl:py-4 h-fit flex justify-center items-center rounded text-primary text-xs text-center 2xl:text-base">
                <span>1 night</span>
              </div>
              <div className="flex flex-col">
                <span className="opacity-55 text-xs 2xl:text-base">
                  Check-out
                </span>
                <p className="text-steelGray text-base 2xl:text-xl">
                  Monday 22,Dec
                </p>
                <span className="opacity-55 text-xs 2xl:text-base">10am</span>
              </div>
              <div>
                <p className="text-steelGray text-base 2xl:text-xl">
                  2 Adult - 1 room
                </p>
              </div>
            </div>

            <div className="mb-4 lg:mb-0">
              <Form
                initialValues={{
                  fName: "",
                  lName: "",
                  email: "",
                  phone: "",
                  special: "",
                }}
                form={form}
                onFinish={onFinish}
              >
                <p className="text-steelGray text-base 2xl:text-xl font-medium">
                  Guest Details
                </p>

                <div className="grid grid-cols-2 gap-3 py-3 mb-2">
                  <Form.Item
                    name="fName"
                    rules={[
                      {
                        required: true,
                        message: "Please input your first name!",
                      },
                    ]}
                  >
                    <Input
                      className="!bg-transparent border border-solid !border-primary !rounded-[4px]"
                      placeholder="First Name"
                    />
                  </Form.Item>

                  <Form.Item
                    name="lName"
                    rules={[
                      {
                        required: true,
                        message: "Please input your last name!",
                      },
                    ]}
                  >
                    <Input
                      className="!bg-transparent border border-solid !border-primary !rounded-[4px]"
                      placeholder="Last Name"
                    />
                  </Form.Item>

                  <Form.Item
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "Please input your E-mail address!",
                      },
                    ]}
                  >
                    <Input
                      className="!bg-transparent border border-solid !border-primary !rounded-[4px]"
                      placeholder="E-mail address"
                    />
                  </Form.Item>

                  <Form.Item
                    name="phone"
                    rules={[
                      {
                        required: true,
                        message: "Please input your mobile number!",
                      },
                    ]}
                  >
                    <Input
                      className="!bg-transparent border border-solid !border-primary !rounded-[4px]"
                      placeholder="Mobile number"
                    />
                  </Form.Item>

                  <div className="col-span-2">
                    <span className="text-steelGray mb-1 text-xs lg:text-sm 2xl:text-lg">
                      Special Request(optional)
                    </span>
                    <Form.Item name="special">
                      <TextArea
                        rows={3}
                        className="!bg-transparent border border-solid !border-primary !rounded-[4px] !w-full"
                      />
                    </Form.Item>
                  </div>
                </div>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="!px-6 !py-5 lg:!px-14 w-fit lg:!py-5 !flex !rounded-[4px] !text-sm lg:text-base 2xl:!text-lg !font-normal justify-center items-center"
                >
                  Continue
                </Button>
              </Form>
            </div>
          </div>

          {/* ----------- Right ---------*/}
          <div className="">
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
              <span className="text-steelGray font-semibold">Total Amount</span>
              <span className="text-primary font-semibold">
                {(1140).toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </span>
            </div>

            <div
              className="p-4 mx-[2px] mb-4 bg-white rounded-[15px] mt-5 text-steelGray"
              style={{ filter: "drop-shadow(0px 3px 3px rgba(0,0,0,0.16 ))" }}
            >
              <p className="text-base font-medium 2xl:text-xl">
                Cancellation Charges
              </p>
              <span className="text-xs 2xl:text-base opacity-70">
                <span className="font-semibold leading-10">
                  {" "}
                  Non Refundable{" "}
                </span>
                <br />
                Penalty may be charged by the airline & by MMT based on how
                close to departure date you cancel. View fare rules to know
                more. <br /> VIEW POLICY
              </span>
            </div>
          </div>
        </div>
      </div>
    </Wrap>
  );
};

export default ReviewHotelPage;
