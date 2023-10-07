import Content from "@/components/Content";
import { PageNavigation } from "@/components/pagenavigation/PageNavigation";
import { classNames } from "@/utils/classNames";
import Link from "next/link";

const shadows = () => {
  const shadowList = [
    { shadow: "shadow-1", name: "shadow-1" },
    { shadow: "shadow-2", name: "shadow-2" },
    { shadow: "shadow-3", name: "shadow-3" },
    { shadow: "shadow-4", name: "shadow-4" },
    { shadow: "shadow-inner", name: "shadow-inner" },
  ];
  const sections = [{ id: "flux-shadows", label: "Flux Shadows" }];

  return (
    <>
      <Content>
        <Content.Title title="Shadows">
          <p>
            Flux Design Systems have our own shadows, but we use{" "}
            <Link
              href="https://tailwindcss.com/docs/drop-shadow"
              className={classNames(
                "font-medium text-primary-500",
                "dark:text-primary-25",
                "hover:underline",
              )}
            >
              Tailwind Shadows{" "}
            </Link>
            too.
          </p>
        </Content.Title>
        {sections.map((sections) => (
          <Content.Section key={sections.id} id={sections.id}>
            <h2
              className={classNames(
                "-tracking-xl text-xl font-semibold text-default-700",
                "dark:text-default-100",
              )}
            >
              {sections.label}
            </h2>
            <div className="flex flex-wrap gap-6">
              {shadowList.map((shadow) => (
                <div
                  className={`flex h-28 w-28 items-center justify-center rounded-lg ${classNames(
                    "border border-default-300 bg-light",
                    "dark:border-default-700",
                  )} ${shadow.shadow}`}
                >
                  <p className="-tracking-sm text-sm text-dark">
                    {shadow.name}
                  </p>
                </div>
              ))}
            </div>
          </Content.Section>
        ))}
      </Content>
      <PageNavigation sections={sections} />
    </>
  );
};

export default shadows;
