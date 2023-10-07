import Content from "@/components/Content";
import { PageNavigation } from "@/components/pagenavigation/PageNavigation";

const Components = () => {
  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      <Content>
        <Content.Title title="Components Overview">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi
          provident nam repellat inventore commodi corrupti quo tempore facere
          necessitatibus nobis, est sunt aperiam perferendis quaerat, voluptates
          dolorem corporis, harum voluptatibus?
        </Content.Title>
        <div
          id="home"
          className="flex h-96 scroll-mt-24 items-center justify-center bg-amber-100"
        >
          <h1>Home</h1>
        </div>
        <div
          id="about"
          className="flex h-96 scroll-mt-32 items-center justify-center bg-blue-100"
        >
          <h1>About</h1>
        </div>
        <div
          id="contact"
          className="flex h-96 scroll-mt-32 items-center justify-center bg-red-100"
        >
          <h1>Contact</h1>
        </div>
      </Content>
      <PageNavigation sections={sections} />
    </>
  );
};

export default Components;
