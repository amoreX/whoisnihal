"use client";
import { ArrowElbowRightUpIcon } from "@phosphor-icons/react/dist/ssr";
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="mt-auto">
      <div className="w-full mt-12 flex select-none border-border/70 backdrop-blur-lg border-2 border-b-0 overflow-hidden  h-fit  pt-6  relative">
        <div className="size-full z-10 absolute pointer-events-none left-0 top-0 overflow-hidden mix-blend-lighten light:opacity-30 dark:opacity-5 ">
          <Image
            width={1000}
            height={1000}
            src="/images/open-peeps.png"
            className="size-full object-cover"
            alt=""
          />
        </div>
        <div className="size-full z-20 font-light  px-12  flex flex-col items-center text-footer-text">
          <div className="mt-auto items-end w-full inline-flex text-lg pb-6 font-normal ">
            <div className="w-full flex gap-1 items-center text-foreground">
              Built using{" "}
              <a
                target="_blank"
                href="https://nextjs.org/docs/13/app/building-your-application/configuring/mdx#nextmdx"
                className="text-footer-link hover:underline inline ml-1"
              >
                @next/mdx
              </a>
              <button
                onClick={() => window.scrollTo(0, 0)}
                className="ml-auto size-[40px] flex items-center justify-center bg-footer-button-bg hover:bg-footer-button-hover-bg text-footer-button-text cursor-pointer transition-colors duration-200"
              >
                <ArrowElbowRightUpIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
