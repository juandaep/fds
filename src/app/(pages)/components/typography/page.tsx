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
          guideline.
        </p>
      </Content.Title>
    </Content>
  );
};

export default typography;
