import { colorsData } from "@/app/data/colorsData";
import Content from "@/components/Content";
import { ColorItems } from "@/components/colors/ColorItems";
import { PageNavigation } from "@/components/pagenavigation/PageNavigation";
import { classNames } from "@/utils/classNames";

const colors = () => {
  const sections = [
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
        {sections.map((section) => (
          <Content.Section key={section.id} id={section.id}>
            <h2
              className={classNames(
                "text-xl font-semibold text-default-700",
                "dark:text-default-100",
              )}
            >
              {section.label}
            </h2>
            <div className="flex flex-wrap gap-6">
              {colorsData
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
      <PageNavigation sections={sections} />
    </>
  );
};

export default colors;
