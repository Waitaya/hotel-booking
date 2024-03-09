import { theme } from "antd";
import type { ThemeConfig } from "antd/es/config-provider";

export const themeAntd: ThemeConfig = {
  algorithm: theme.defaultAlgorithm,
  token: {
    fontFamily: "inherit",
  },
  components: {
    Input: {
      activeBorderColor: "#0097E0",
      hoverBorderColor: "#0097E0",
      colorBgContainer: "#EBEDFF",
      colorBorder: "#EBEDFF",
      paddingBlock: 12,
      colorTextPlaceholder: "#8E8E8E",
      colorIcon: "#54C3F1",
      borderRadius: 10,
    },
    Button: {
      colorPrimary: "#2D3DDF",
      fontSize: 16,
      fontWeight: 600,
    },
    DatePicker: {
      borderRadius: 10,
      fontSizeIcon: 30,
      colorTextPlaceholder: "#A9A9C8",
    },
  },
};
