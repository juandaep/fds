"use client";
import { classNames } from "@/utils/classNames";
import { FC } from "react";
import Tooltip from "../Tooltips";

interface ColorItemProps {
  color: string;
  name: string;
  hex: string;
  isWide: boolean;
}

export const ColorItems: FC<ColorItemProps> = ({
  color,
  name,
  hex,
  isWide,
}) => {
  const handleCopyToClipboard = (textToCopy: string) => {
    navigator.clipboard.writeText(textToCopy).catch((error) => {
      console.error("Failed to copy text: ", error);
    });
  };

  return (
    <Tooltip content="Copied" trigger="click" direction="top-center">
      <div
        className="relative flex cursor-pointer flex-col gap-2"
        onClick={() => {
          handleCopyToClipboard(hex);
        }}
      >
        <div
          className={`${classNames(
            "h-16 rounded-lg border border-default-200 transition-transform",
            "dark:border-default-800",
            "active:scale-95",
          )} ${color} ${isWide ? "w-28 lg:w-[244px]" : "w-[110px]"}`}
        ></div>
        <div className="text-sm -tracking-sm">
          <p className={classNames("text-default-800", "dark:text-default-50")}>
            {name}
          </p>
          <p
            className={classNames(
              "font-medium text-default-900",
              "dark:text-default-25",
            )}
          >
            {hex}
          </p>
        </div>
      </div>
    </Tooltip>
  );
};
