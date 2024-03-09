"use client";

import React, { PropsWithChildren, useState } from "react";
import "@/styles/globals.css";
import { LogoIcon } from "./icons";
import { CloseCircleOutlined, MenuOutlined } from "@ant-design/icons";
import { ConfigProvider, Drawer } from "antd";
import DesktopMenu from "./menu/desktop";
import MobileMenu from "./menu/mobile";
import { themeAntd } from "@/styles/antd/theme";

const BaseLayout = ({ children }: PropsWithChildren) => {
  const [isExpandedMenu, setIsExpanedeMenu] = useState(false);

  return (
    <ConfigProvider theme={themeAntd}>
      {/* <div className="block lg:flex gap-[30px] relative"> */}
      <div className="block lg:flex relative">
        <div className="flex justify-between items-center lg:hidden bg-primary p-4 text-2xl z-50 text-white fixed top-0 left-0 right-0">
          <MenuOutlined onClick={() => setIsExpanedeMenu(true)} />
          <LogoIcon />
          <div />
        </div>
        <DesktopMenu className="hidden lg:block" />
        <div className="w-full px-4 pt-[66px] lg:pt-0  lg:px-0">{children}</div>
      </div>

      <Drawer
        placement="left"
        onClose={() => setIsExpanedeMenu(false)}
        open={isExpandedMenu}
        closable={false}
      >
        <div className="relative">
          <div className="absolute -right-2 text-2xl -top-3 text-red-500">
            <CloseCircleOutlined onClick={() => setIsExpanedeMenu(false)} />
          </div>
          <MobileMenu onClose={() => setIsExpanedeMenu(false)} />
        </div>
      </Drawer>
    </ConfigProvider>
  );
};

export default BaseLayout;
