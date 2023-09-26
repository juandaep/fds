import { Content, ContentTitle } from "@/components/Content";
import Navigation from "@/components/pagenavigation/PageNavigation";

const components = () => {
  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];
  return (
    <>
      <Content>
        <ContentTitle title="Components Overview">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi
          provident nam repellat inventore commodi corrupti quo tempore facere
          necessitatibus nobis, est sunt aperiam perferendis quaerat, voluptates
          dolorem corporis, harum voluptatibus?
        </ContentTitle>
        <div
          id="home"
          className="h-96 flex justify-center items-center bg-amber-100 scroll-mt-32"
        >
          <h1>Home</h1>
        </div>
        <div
          id="about"
          className="h-96 flex justify-center items-center bg-blue-100 scroll-mt-32"
        >
          <h1>About</h1>
        </div>
        <div
          id="contact"
          className="h-96 flex justify-center items-center bg-red-100 scroll-mt-32"
        >
          <h1>Contact</h1>
        </div>
      </Content>
      <Navigation sections={sections} />
    </>
  );
};

export default components;
