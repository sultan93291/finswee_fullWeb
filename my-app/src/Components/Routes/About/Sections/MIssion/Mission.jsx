import Heading from "@/Components/Tags/Heading/Heading";
import IMG from "@/Components/Tags/IMG/IMG";
import Paragraph from "@/Components/Tags/Paragraph/Paragraph";
import React from "react";

const Mission = () => {
  return (
    <section className=" h-auto  mx-auto bg-Gray  ">
      <div className="flex flex-col gap-16 py-32 max-w-maxWidth mx-auto ">
        <div className="flex flex-col gap-oneFourty  ">
          <div className="flex gap-sixty items-center ">
            <div className="flex flex-col gap-4  ">
              <Paragraph
                text={"Our Mission "}
                className={"label-two text-DarkBlue"}
              />
              <Heading
                Heading={"h3"}
                text={"Inspire, Innovate, Share"}
                className={"Heading-Three text-DarkBlue "}
              />
              <Paragraph
                text={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                }
                className={"Body-One text-DarkBlue  w-sixTwentyThree "}
              />
            </div>
            <IMG
              src={"/Images/About/Mission/man.png"}
              height={"334"}
              width={514}
              alt={"man.png"}
            />
          </div>
          <div className="flex gap-sixty items-center ">
            <IMG
              src={"/Images/About/Mission/gog.png"}
              height={"334"}
              width={514}
              alt={"man.png"}
            />
            <div className="flex flex-col gap-4  ">
              <Paragraph
                text={"Our Vision"}
                className={"label-two text-DarkBlue"}
              />
              <Heading
                Heading={"h3"}
                text={"Laser focus"}
                className={"Heading-Three text-DarkBlue "}
              />
              <Paragraph
                text={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                }
                className={"Body-One text-DarkBlue  w-sixTwentyThree "}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
