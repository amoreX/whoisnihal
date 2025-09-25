import {
  GlobeHemisphereEastIcon,
  GlobeIcon,
  MapPinSimpleIcon,
  SuitcaseIcon,
} from "@phosphor-icons/react/dist/ssr";
import React from "react";
import Title from "./Title";

const Header = () => {
  return (
    <div className=" flex w-full flex-col">
      
      <div className="w-full mt-6  flex flex-col">
        <div className="flex gap-2 items-center font-medium text-stone-400">
          <GlobeHemisphereEastIcon size={20} /> Bengaluru, India
        </div>
        <div className="flex gap-2 items-center font-medium text-stone-400 mb-4">
          <SuitcaseIcon size={20} /> Building <a target="_blank" href="https://www.raeai.app/" className="text-accent flex items-center gap-1 hover:underline " > @Rae</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
