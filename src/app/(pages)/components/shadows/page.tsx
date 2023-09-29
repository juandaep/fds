import { Content, ContentTitle } from "@/components/content/Content";
import { classNames } from "@/utils/classNames";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const shadows = () => {
  return (
    <Content>
      <ContentTitle title="Shadows">
        <div className="flex gap-1.5">
          <span>Flux Design Systems have our own shadows, but we use </span>
          <Link
            href="https://tailwindcss.com/docs/drop-shadow"
            className={classNames('flex gap-1.5 text-primary-500 font-medium', 'dark:text-primary-25', 'hover:border-b hover:border-primary-500 hover:dark:border-primary-25')}
          >
            Tailwind Shadows <ArrowTopRightOnSquareIcon width={16} />
          </Link>
          <span>too.</span>
        </div>
      </ContentTitle>
    </Content>
  );
};

export default shadows;
