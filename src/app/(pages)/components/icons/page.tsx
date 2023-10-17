import Content from "@/components/Content";
import { classNames } from "@/utils/classNames";
import Link from "next/link";
import React from "react";

const Icons = () => {
  return (
    <>
      <Content>
        <Content.Title title="Colors">
          <p>
            Flux Design Systems use{" "}
            <Link
              href="https://heroicons.com/"
              className={classNames(
                "font-medium text-primary-500",
                "dark:text-primary-25",
                "hover:underline",
              )}
            >
              Hero Icons
            </Link>
            for all components.
          </p>
        </Content.Title>
        <Content.Section>
          <iframe
            src="https://heroicons.com/"
            className="object-fit aspect-video w-full rounded-xl border border-default-200 shadow-lg dark:border-default-200/50"
            height="500"
          ></iframe>
        </Content.Section>
      </Content>
    </>
  );
};

export default Icons;
