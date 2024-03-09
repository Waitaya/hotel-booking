import React from "react";
import { menus } from "@/constants/menu";
import { usePathname, useRouter } from "next/navigation";
import { LogoIcon } from "../icons";

const DesktopMenu: React.FC<React.ComponentPropsWithoutRef<"div">> = ({
  className,
  ...props
}) => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div
      className={`w-40 bg-primary relative min-h-screen rounded-tr-[39px] rounded-br-[39px] ${className}`}
      {...props}
    >
      <div className="absolute top-11 left-1/2 -translate-x-2/4 -translate-y-2/4">
        <LogoIcon />
      </div>
      <div className="flex flex-col justify-center items-center h-full gap-16">
        {menus.map((menu) => {
          const { icon, key, label, route } = menu;
          const isMatch = pathname.split("/").slice(0, 2).join("/") === route;
          const colors = isMatch
            ? "text-primary bg-gallery"
            : "text-white bg-transparent";

          return (
            <div
              key={key}
              onClick={() => router.push(route)}
              className={`w-[68px] h-[68px] rounded-full text-lg flex justify-center items-center flex-col cursor-pointer ${colors}`}
              style={{ filter: "drop-shadow(9px 9px 8px rgba(0,0,0,0.22 ))" }}
            >
              {icon}
              <p className="p-0 m-0 text-base">{label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DesktopMenu;
