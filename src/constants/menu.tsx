import {
  HeartOutlined,
  HomeOutlined,
  SearchOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { ReactElement } from "react";

interface IMenu {
  key: string;
  label: string;
  route: string;
  icon: ReactElement;
}

export const menus: IMenu[] = [
  {
    // icon: <HomeIcon />,
    icon: <HomeOutlined />,
    key: "1",
    label: "Home",
    route: "/",
  },
  {
    // icon: <SearchIcon />,
    icon: <SearchOutlined />,
    key: "2",
    label: "Explore",
    route: "/explore",
  },
  {
    // icon: <HeartIcon />,
    icon: <HeartOutlined />,
    key: "3",
    label: "Trips",
    route: "/trips",
  },
  {
    // icon: <UserIcon />,
    icon: <UserOutlined />,
    key: "4",
    label: "Profile",
    route: "/profile",
  },
];
