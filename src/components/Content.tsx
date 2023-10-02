import { classNames } from "@/utils/classNames";
import { FC } from "react";

export const Content: FC<ContentProps> = ({ children }) => {
  return <section className="flex flex-col gap-12">{children}</section>;
};

export const ContentTitle: FC<ContentTitleProps> = ({ title, children }) => {
  return (
    <div className="flex flex-col items-start gap-4 self-stretch">
      <h1
        className={classNames(
          "text-4xl font-bold -tracking-[0.021em] text-default-900",
          "dark:text-default-25",
        )}
      >
        {title}
      </h1>
      <div
        className={classNames(
          "text-base -tracking-[0.011em] text-default-600",
          "dark:text-default-300",
        )}
      >
        {children}
      </div>
    </div>
  );
};
