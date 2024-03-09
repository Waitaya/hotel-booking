import { menus } from "@/constants/menu";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

interface Props {
  onClose: Function;
}

const MobileMenu = ({ onClose }: Props) => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="grid grid-cols-1 divide-y">
      {menus.map((menu) => {
        const { label, key, route } = menu;
        const isMatch = pathname.split("/").slice(0, 2).join("/") === route;
        const textColor = isMatch ? "text-primary" : "text-gray-600";

        return (
          <div
            key={key}
            onClick={() => {
              router.push(route);
              onClose();
            }}
            className={`text-2xl flex items-center justify-center py-4 ${textColor}`}
          >
            {label}
          </div>
        );
      })}
    </div>
  );
};

export default MobileMenu;
