"use client";
import { Button } from "@/components/Button";
import { classNames } from "@/utils/classNames";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [mobileTitle, setMobileTitle] = useState(false);
  useEffect(() => {
    const updateTitle = () => {
      setMobileTitle(window.innerWidth < 768 ? true : false);
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
        "text-4xl font-bold -tracking-[0.021em] text-default-900 text-center",
        "md:text-7xl md:-tracking-[0.022em] ",
        "dark:text-default-25"
      )}
    >
      Welcome to
      <span className="text-primary-500"> Flux </span>
      <br />
      <span className="break-all md:break-normal">Design Systems</span>
    </h1>
  );

  const DesktopTitle = (
    <h1
      className={classNames(
        "text-3xl font-bold -tracking-[0.021em] text-default-900 text-center",
        "md:text-7xl md:-tracking-[0.022em] ",
        "dark:text-default-25"
      )}
    >
      Welcome to
      <span className="text-primary-500"> Flux </span>
      <span className="break-all md:break-normal">Design Systems</span>
    </h1>
  );

  return (
    <div className={classNames("grid grid-cols-6", "md:grid-cols-12")}>
      <div
        className={classNames(
          "flex flex-col items-center col-span-6 px-4 gap-14 min-h-[calc(100vh_-_128px)] justify-center",
          "md:col-span-12 md:gap-10 md:py-10"
        )}
      >
        <div className={classNames("flex flex-col gap-4", "gap-6")}>
          {mobileTitle ? MobileTitle : DesktopTitle}
          <div
            className={classNames(
              "flex flex-col justify-center gap-1 text-base -tracking-[0.006em] text-center text-default-600",
              "md:text-2xl -tracking-[0.019em]",
              "dark:text-default-300"
            )}
          >
            <div className="flex justify-center gap-1 text-center">
              <p>
                A design systems based on{" "}
                <Link
                  href="https://tailwindcss.com/"
                  className="hover:underline font-medium"
                >
                  TailwindCSS
                </Link>{" "}
                and You can use it for free ✨.
              </p>
            </div>
            <p>
              The design system has been Auto Layout, Variants, Variables, and
              supported for Dark Mode theme. This website is only for a preview
              of the components in it.
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
}
