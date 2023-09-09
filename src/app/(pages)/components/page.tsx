import Navigation from "@/components/pagenavigation/PageNavigation";
import React from "react";

const components = () => {
  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];
  return (
    <>
      <section>
        <div
          id="home"
          className="h-screen flex justify-center items-center bg-amber-500"
        >
          <h1>Home</h1>
        </div>

        <div
          id="about"
          className="h-screen flex justify-center items-center bg-blue-100"
        >
          <h1>About</h1>
        </div>

        <div
          id="contact"
          className="h-screen flex justify-center items-center bg-red-100"
        >
          <h1>Contact</h1>
        </div>
      </section>
      <Navigation sections={sections} />
    </>
  );
};

export default components;
