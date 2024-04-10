import Heading from "@/Components/Tags/Heading/Heading";
import IMG from "@/Components/Tags/IMG/IMG";
import Paragraph from "@/Components/Tags/Paragraph/Paragraph";

import React from "react";

const Design = () => {
  return (
    <section className=" h-auto w-auto  px-navbarPadding py-32 flex justify-between  bg-white   ">
      <div className="flex flex-col">
        <Paragraph className={"label-one my-2 "} text={"About us"} />
        <div className=" flex flex-col gap-8">
          <Heading
            text={"Our designs solve problems"}
            Heading={"h1"}
            className={"Main-Heading text-DarkBlue w-fiveNinetyFive "}
          />
          <Paragraph
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
            }
            className={"Body-One text-DarkBlue w-fourEightyFour"}
          />
        </div>
      </div>
      <IMG src={"/Images/About/Design/designers.png"} height={336} width={547} />
    </section>
  );
};

export default Design;
