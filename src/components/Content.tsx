import { classNames } from "@/utils/classNames";
import { FC } from "react";

const Content: FC<ContentProps> & {
  Title: FC<ContentTitleProps>;
  Section: FC<ContentSectionProps>;
} = ({ children }) => {
  return <section className="flex flex-col gap-12">{children}</section>;
};

const ContentTitle: FC<ContentTitleProps> = ({ title, children }) => {
  return (
    <div className="flex flex-col items-start gap-4 self-stretch">
      <h1
        className={classNames(
          "text-2xl font-bold -tracking-[0.021em] text-default-900",
          "lg:text-4xl",
          "dark:text-default-25",
        )}
      >
        {title}
      </h1>
      <div
        className={classNames(
          "text-sm -tracking-[0.011em] text-default-600",
          "lg:text-base",
          "dark:text-default-300",
        )}
      >
        {children}
      </div>
    </div>
  );
};

const ContentSection: FC<ContentSectionProps> = ({ key, id, children }) => {
  return (
    <div
      key={key}
      id={id}
      className="container flex scroll-mt-24 flex-col gap-4"
    >
      {children}
    </div>
  );
};

Content.Title = ContentTitle;
Content.Section = ContentSection;

export default Content;
