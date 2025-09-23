import {
  GlobeHemisphereEastIcon,
  GlobeIcon,
  MapPinSimpleIcon,
  SuitcaseIcon,
} from "@phosphor-icons/react/dist/ssr";
import React from "react";
import NameReveal from "./NameReveal";

const Header = () => {
  return (
    <div className="mt-[150px] flex w-full flex-col">
      <NameReveal/>
      <div className="w-full mt-6  flex flex-col">
        <div className="flex gap-2 items-center font-medium text-stone-400">
          <GlobeHemisphereEastIcon size={20} /> Bengaluru, India
        </div>
        <div className="flex gap-2 items-center font-medium text-stone-400 mb-4">
          <SuitcaseIcon size={20} /> Building <div className="text-accent flex items-center gap-1" > Rae</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
