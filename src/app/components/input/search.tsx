import { SearchOutlined } from "@ant-design/icons";
import type { InputProps } from "antd";
import { Input } from "antd";
import React from "react";
import { twMerge } from "tailwind-merge";

interface IInputSearch {
  isPrefix?: boolean;
}

const InputSearch: React.FC<InputProps & IInputSearch> = ({
  className,
  isPrefix,
  ...props
}) => {
  return (
    <Input
      placeholder="Search ..."
      suffix={!isPrefix && <SearchOutlined />}
      prefix={isPrefix && <SearchOutlined className="mr-1" />}
      className={twMerge(
        "w-[424px] border-flashWhite bg-flashWhite [&>input]:bg-flashWhite",
        className
      )}
      {...props}
    />
  );
};

export default InputSearch;
