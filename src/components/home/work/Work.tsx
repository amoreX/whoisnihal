import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";
import React from "react";

const Work = ({
  company,
  title,
  date,
  description,
}: {
  company: string;
  title: string;
  date: string;
  description: string;
}) => {
  return (
    <button className="w-full  relative items-start text-left flex flex-col group cursor-pointer rounded-lg    transition-[background-color,padding] duration-75">
      <div className="absolute  w-[calc(100%+20px)] h-[calc(100%+10px)] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-sm border border-border opacity-0 group-hover:opacity-100 transition-all duration-0"></div>
      <div className="absolute  w-[calc(100%+25px)] h-[calc(100%+15px)] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-md border border-border/50 opacity-0 group-hover:opacity-100 transition-all duration-0"></div>

      <div className="text-xl text-work-company font-medium">{company}</div>
      <div className="text-work-meta font-medium text-sm flex gap-2 items-center">
        {title}{" "}
        <div className="w-[1px] h-[10px] bg-work-meta translate-y-[2px]"></div>{" "}
        {date}
      </div>
      <div className="text-work-description mt-1  max-w-[700px]">
        {description}
      </div>
    </button>
  );
};

export default Work;
