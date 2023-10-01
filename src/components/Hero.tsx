"use client";
import { useThemeMounted } from "@/app/hooks/useThemeMounted";
import { classNames } from "@/utils/classNames";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./Button";

export const Hero = () => {
  const { theme, resolvedTheme } = useTheme();
  const mounted = useThemeMounted();
  const isDarkTheme = mounted && (theme === "dark" || resolvedTheme === "dark");

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
          className={classNames(
            "flex w-max rounded-lg text-xs font-medium text-default-700 divide-x border border-default-300 divide-default-300",
            "lg:text-sm",
            "dark:text-default-200 dark:border-default-700 dark:divide-default-700"
          )}
        >
          <div
            className={classNames(
              "flex gap-2 py-2 px-2 items-center",
              "lg:py-2 lg:px-3"
            )}
          >
            <Image
              alt="variants"
              src={
                isDarkTheme
                  ? "https://cdn.jsdelivr.net/gh/juandaep/Icons@master/flux/variants-variables-dark.svg"
                  : "https://cdn.jsdelivr.net/gh/juandaep/Icons@master/flux/variants-variables-light.svg"
              }
              width={0}
              height={0}
              className={classNames("h-3 w-3", "lg:h-4 lg:w-4")}
            />
            Variants
          </div>
          <div
            className={classNames(
              "flex gap-2 py-2 px-2 items-center",
              "lg:py-2 lg:px-3"
            )}
          >
            <Image
              alt="variables"
              src={
                isDarkTheme
                  ? "https://cdn.jsdelivr.net/gh/juandaep/Icons@master/flux/variants-variables-dark.svg"
                  : "https://cdn.jsdelivr.net/gh/juandaep/Icons@master/flux/variants-variables-light.svg"
              }
              width={0}
              height={0}
              className={classNames("h-3 w-3", "lg:h-4 lg:w-4")}
            />
            Variables
          </div>
          <div
            className={classNames(
              "flex gap-2 py-2 px-2 items-center",
              "lg:py-2 lg:px-3"
            )}
          >
            <Image
              alt="autolayout"
              src={
                isDarkTheme
                  ? "https://cdn.jsdelivr.net/gh/juandaep/Icons@master/flux/autolayout-dark.svg"
                  : "https://cdn.jsdelivr.net/gh/juandaep/Icons@master/flux/autolayout-light.svg"
              }
              width={0}
              height={0}
              className={classNames("h-2.5 w-2.5", "lg:h-3.5 lg:w-3.5")}
            />
            Auto Layout
          </div>
        </div>
        <div
          className={classNames("flex flex-col gap-4", "md:gap-6", "lg:gap-8")}
        >
          <h1
            className={classNames(
              "text-3xl font-bold -tracking-[0.019em] text-default-900",
              "dark:text-default-25",
              "sm:text-4xl sm:-tracking-[0.021em]",
              "md:text-5xl md:-tracking-[0.021em]",
              "lg:text-6xl lg:-tracking-[0.021em]",
              "xl:text-7xl xl:-tracking-[0.021em]"
            )}
          >
            <span
              className={classNames("text-primary-500", "dark:text-primary-25")}
            >
              FLUX{" "}
            </span>
            <span>Design Systems</span>
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
          rightIcon={
            <ArrowLongRightIcon
              className={classNames("w-6 h-6", "md:w-8 md:h-8")}
            />
          }
          onClick={() => (window.location.href = "/components")}
        >
          Explore Components
        </Button>
      </div>
    </div>
  );
};
