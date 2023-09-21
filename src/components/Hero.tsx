"use client";
import { classNames } from "@/utils/classNames";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./Button";

export const Hero = () => {
  const [mobileTitle, setMobileTitle] = useState(false);
  useEffect(() => {
    const updateTitle = () => {
      setMobileTitle(window.innerWidth < 1280 ? true : false);
    };
    updateTitle();
    window.addEventListener("resize", updateTitle);
    return () => {
      window.removeEventListener("resize", updateTitle);
    };
  }, []);

  const MobileTitle = (
    <h1
      className={classNames(
        "text-2xl font-bold -tracking-[0.019em] text-default-900",
        "dark:text-default-25",
        "sm:text-4xl sm:-tracking-[0.021em] ",
        "md:text-5xl md:-tracking-[0.021em] ",
        "lg:text-6xl lg:-tracking-[0.021em] "
      )}
    >
      <span className="text-primary-500">FLUX </span>
      <span className="">Design Systems</span>
    </h1>
  );

  const DesktopTitle = (
    <h1
      className={classNames(
        "text-7xl font-bold -tracking-[0.022em] text-default-900",
        "dark:text-default-25"
      )}
    >
      <span className="text-primary-500">FLUX </span>
      <span className="break-all md:break-normal">Design Systems</span>
    </h1>
  );

  return (
    <div
      className={classNames(
        "grid grid-cols-4",
        "md:grid-cols-8",
        "xl:grid-cols-12"
      )}
    >
      <div
        className={classNames(
          "flex flex-col justify-center col-span-4 gap-8 min-h-[calc(100vh_-_128px)]",
          "sm:col-span-3",
          "md:col-span-6 md:gap-10",
          "xl:col-span-8"
        )}
      >
        <div
          className={classNames("flex flex-col gap-4", "md:gap-6", "lg:gap-8")}
        >
          <h1
            className={classNames(
              "text-2xl font-bold -tracking-[0.019em] text-default-900",
              "dark:text-default-25",
              "sm:text-4xl sm:-tracking-[0.021em]",
              "md:text-5xl md:-tracking-[0.021em]",
              "lg:text-6xl lg:-tracking-[0.021em]",
              "xl:text-7xl xl:-tracking-[0.021em]"
            )}
          >
            <span className="text-primary-500">FLUX </span>
            <span className="">Design Systems</span>
          </h1>
          <div
            className={classNames(
              "flex flex-col justify-center gap-1 text-base -tracking-[0.011em] text-default-600",
              "dark:text-default-300",
              "sm:text-lg sm:-tracking-[0.014em]",
              "md:text-xl md:-tracking-[0.017em]",
              "lg:text-2xl lg:-tracking-[0.019em]"
            )}
          >
            <div className="flex gap-1">
              <p>
                A components that create based on{" "}
                <Link
                  as="button"
                  href="https://tailwindcss.com/"
                  className="underline font-medium"
                >
                  TailwindCSS.
                </Link>{" "}
                ✨
              </p>
            </div>
            <p>
              Everything in it is free to use. This components has been Auto
              Layout, Variants, Variables, and supported for Dark Mode theme.
            </p>
          </div>
        </div>
        <Button
          bgColor="bg-primary-500"
          textColor="text-white"
          children="Explore Components"
          rightIcon={
            <ArrowLongRightIcon
              className={classNames("w-6 h-6", "md:w-8 md:h-8")}
            />
          }
          onClick={() => (window.location.href = "/components")}
        />
      </div>
    </div>
  );
};
