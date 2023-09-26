import { Content, ContentTitle } from "@/components/Content";
import { classNames } from "@/utils/classNames";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

const typography = () => {
  return (
    <Content>
      <ContentTitle title="Typhography: Inter">
        <div className="flex gap-1.5">
          <span>Flux Design Systems use Inter typeface and use</span>
          <Link
            href="https://rsms.me/inter/dynmetrics/"
            className={classNames('flex gap-1.5 text-primary-500 font-medium', 'dark:text-primary-25', 'hover:border-b hover:border-primary-500 hover:dark:border-primary-25')}
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
