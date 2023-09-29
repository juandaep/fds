import { classNames } from "@/utils/classNames";
import React, { FC } from "react";

export const Content: FC<ContentProps> = ({ children }) => {
  return <section className="flex flex-col gap-12">{children}</section>;
};

export const ContentTitle: FC<ContentTitleProps> = ({ title, children }) => {
  return (
    <div className="flex flex-col items-start gap-4 self-stretch">
      <h1
        className={classNames(
          "text-4xl font-bold text-default-900 -tracking-[0.021em]",
          "dark:text-default-25"
        )}
      >
        {title}
      </h1>
      <div
        className={classNames("text-base text-default-600 -tracking-[0.011em]", "dark:text-default-300")}
      >
        {children}
      </div>
    </div>
  );
};
