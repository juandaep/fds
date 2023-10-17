import Content from "@/components/Content";
import { PageNavigation } from "@/components/pagenavigation/PageNavigation";
import { ColorItems } from "@/components/pagesItems/ColorItems";
import { colorData } from "@/components/pagesItems/colorData";
import { classNames } from "@/utils/classNames";

const Colors = () => {
  const colorSection = [
    { id: "bg-colors", label: "Background Colors" },
    { id: "primary-colors", label: "Primary Colors" },
    { id: "error-colors", label: "Error Colors" },
    { id: "warning-colors", label: "Warning Colors" },
    { id: "success-colors", label: "Success Colors" },
    { id: "info-colors", label: "Info Colors" },
  ];

  return (
    <>
      <Content>
        <Content.Title title="Colors">
          Flux Design Systems have a color palette below:
        </Content.Title>
        {colorSection.map((section) => (
          <Content.Section
            sectionKey={section.id}
            key={section.id}
            id={section.id}
          >
            <h2
              className={classNames(
                "text-xl font-semibold -tracking-xl text-default-700",
                "dark:text-default-100",
              )}
            >
              {section.label}
            </h2>
            <div className="flex flex-wrap gap-6">
              {colorData
                .filter((category) => category.title === section.label)
                .map((category) =>
                  category.colorList.map((color, colorIndex) => (
                    <ColorItems
                      key={colorIndex}
                      color={color.color}
                      name={color.name}
                      hex={color.hex}
                      isWide={color.color.endsWith("-500")}
                    />
                  )),
                )}
            </div>
          </Content.Section>
        ))}
      </Content>
      <PageNavigation sections={colorSection} />
    </>
  );
};

export default Colors;
