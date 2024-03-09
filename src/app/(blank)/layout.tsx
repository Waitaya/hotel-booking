"use client";

import "@/styles/globals.css";
import { RootStyle } from "../components/rootStyle";
import { ConfigProvider } from "antd";
import { themeAntd } from "@/styles/antd/theme";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RootStyle>
      <ConfigProvider theme={themeAntd}>
        <html lang="en">
          <body>{children}</body>
        </html>
      </ConfigProvider>
    </RootStyle>
  );
}
