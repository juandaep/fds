import Content from "@/components/Content";
import { PageNavigation } from "@/components/pagenavigation/PageNavigation";
import { typographyData } from "@/data/typographyData";
import { classNames } from "@/utils/classNames";
import Link from "next/link";

const Typography = () => {
  const sections = [
    { id: "text-xs", label: "Text xs" },
    { id: "text-sm", label: "Text sm" },
    { id: "text-base", label: "Text base" },
    { id: "text-lg", label: "Text lg" },
    { id: "text-xl", label: "Text xl" },
    { id: "text-heading3", label: "Text heading 3" },
    { id: "text-heading2", label: "Text heading 2" },
    { id: "text-heading1", label: "Text heading 1" },
    { id: "text-display3", label: "Text display 3" },
    { id: "text-display2", label: "Text display 2" },
    { id: "text-display1", label: "Text display 1" },
  ];
  return (
    <>
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
        {typographyData.map((textSpec, specIndex) => (
          <div
            className={classNames(
              "flex scroll-mt-24 flex-col gap-6 rounded-2xl border border-default-300 p-6 shadow-3",
              "dark:border-default-700",
            )}
            key={specIndex}
            id={sections[specIndex].id}
          >
            <div
              key={specIndex}
              className={classNames(
                "flex gap-4 divide-x divide-default-200 border-b border-b-default-200 pb-4 text-sm -tracking-sm text-default-500",
                "lg:text-base lg:-tracking-base",
                "dark:divide-default-800 dark:border-b-default-800 dark:text-default-400",
              )}
            >
              <p>
                Font size:{" "}
                <span className="font-semibold text-default-800 dark:text-default-50">
                  {textSpec.textSpecs.fontsize}
                </span>
              </p>
              <p className="pl-4">
                Line height:{" "}
                <span className="font-semibold text-default-800 dark:text-default-50">
                  {textSpec.textSpecs.lineheight}
                </span>
              </p>
              <p className="pl-4">
                Letter spacing:{" "}
                <span className="font-semibold text-default-800 dark:text-default-50">
                  {textSpec.textSpecs.letterspacing}
                </span>
              </p>
            </div>
            <div className={`flex flex-wrap gap-8 ${textSpec.textClass}`}>
              {textSpec.textData.map((textData, dataIndex) => (
                <p
                  key={dataIndex}
                  className={`${textData.fontweight} w-full break-words lg:w-auto`}
                >
                  {textData.label}
                </p>
              ))}
            </div>
          </div>
        ))}
      </Content>
      <PageNavigation sections={sections} />
    </>
  );
};

export default Typography;
