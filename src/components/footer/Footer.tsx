"use client"
import { ArrowElbowRightUpIcon } from "@phosphor-icons/react/dist/ssr";
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full mt-12 select-none border-stone-800 border-2 border-b-0 overflow-hidden min-h-[250px] h-fit  pt-6  relative">
      <div className="size-full absolute pointer-events-none left-0 top-0 overflow-hidden mix-blend-lighten opacity-5 ">
        <Image
            width={1000}
            height={1000}
          src="/images/open-peeps.png"
          className="size-full object-cover"
          alt=""
        />
      </div>
      <div className="size-full font-light text-9xl flex flex-col items-center text-stone-500">
        ronish rohan
        <div className="mt-auto h-[100px] items-end w-full inline-flex text-lg pb-6 font-normal px-12">
          <div className="w-full flex items-center">
            Built using{" "}
            <a
              href="https://nextjs.org/docs/13/app/building-your-application/configuring/mdx#nextmdx"
              className="text-stone-400 hover:underline inline ml-1"
            >
              @next/mdx
            </a>
            <button onClick={() => window.scrollTo(0, 0)} className="ml-auto size-[40px] flex items-center justify-center bg-stone-800 hover:bg-stone-700 hover:text-stone-200 cursor-pointer">
              <ArrowElbowRightUpIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
