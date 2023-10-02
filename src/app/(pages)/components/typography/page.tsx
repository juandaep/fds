import { Content, ContentTitle } from "@/components/Content";
import { classNames } from "@/utils/classNames";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const typography = () => {
  return (
    <Content>
      <ContentTitle title="Typography: Inter">
        <div className="flex gap-1.5">
          <span>Flux Design Systems use Inter typeface and use</span>
          <Link
            href="https://rsms.me/inter/dynmetrics/"
            className={classNames(
              "flex gap-1.5 font-medium text-primary-500",
              "dark:text-primary-25",
              "hover:border-b hover:border-primary-500 hover:dark:border-primary-25",
            )}
          >
            Inter Dynamic Metric <ArrowTopRightOnSquareIcon width={16} />
          </Link>
          <span>guideline.</span>
        </div>
      </ContentTitle>
    </Content>
  );
};

export default typography;
