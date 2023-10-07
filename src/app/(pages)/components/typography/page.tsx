import Content from "@/components/Content";
import { classNames } from "@/utils/classNames";
import Link from "next/link";

const typography = () => {
  return (
    <Content>
      <Content.Title title="Typography: Inter">
        <p>
          Flux Design Systems use Inter typeface and use{" "}
          <Link
            href="https://rsms.me/inter/dynmetrics/"
            className={classNames(
              "font-medium text-primary-500",
              "dark:text-primary-25",
              "hover:underline",
            )}
          >
            Inter Dynamic Metric{" "}
          </Link>
          guideline with a bit modification.
        </p>
      </Content.Title>
      <Content.Section>
        <div
          className={classNames(
            "shadow-4 flex flex-col gap-6 rounded-2xl border border-default-300 p-6",
            "dark:border-default-700",
          )}
        >
          <div
            className={classNames(
              "flex gap-4 divide-x divide-default-200 border-b border-b-default-200 pb-4",
              "dark:divide-default-800 dark:border-b-default-800",
            )}
          >
            <p>Font size: 12px</p>
            <p className="pl-4">Line height: 16px</p>
            <p className="pl-4">Letter spacing: 0em</p>
          </div>
          <div
            className={classNames("-tracking-xs flex flex-wrap gap-8 text-xs")}
          >
            <p className="font-normal">Text XS Regular</p>
            <p className="font-medium">Text XS Medium</p>
            <p className="font-semibold">Text XS Semibold</p>
            <p className="font-bold">Text XS Bold</p>
          </div>
        </div>
      </Content.Section>
    </Content>
  );
};

export default typography;
