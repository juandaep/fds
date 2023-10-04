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
    <>
      {/* Menggunakan komponen Tooltip */}
      <Tooltip content="Klik untuk menyalin" trigger="click">
        <div
          className="relative flex cursor-pointer flex-col gap-2"
          onClick={() => {
            handleCopyToClipboard(hex);
          }}
        >
          <div
            className={`${classNames(
              "h-16 rounded-lg border border-default-200",
              "dark:border-default-800",
            )} ${color} ${isWide ? "w-28 lg:w-[248px]" : "w-28"}`}
          ></div>
          <div className="text-sm">
            <p
              className={classNames("text-default-800", "dark:text-default-50")}
            >
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
    </>
  );
};
