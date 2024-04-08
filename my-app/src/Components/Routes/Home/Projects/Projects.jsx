import Heading from "@/Components/Tags/Heading/Heading";
import IMG from "@/Components/Tags/IMG/IMG";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Projects = () => {
  return (
    <section className=" h-auto w-auto  px-navbarPadding py-32 flex flex-col gap-16    bg-white  ">
      <div className="flex justify-between items-center  ">
        <Heading
          Heading={"h2"}
          text={"View our projects"}
          className={"Heading-two text-DarkBlue "}
        />
        <span className=" flex items-center  gap-4 label-two text-DarkBlue text-base ">
          {" "}
          view pricing <BsArrowRight className=" text-xl " />{" "}
        </span>
      </div>
      <div className="flex gap-8 ">
        <div className="h-[600px] w-[843px] relative after:absolute after:content-[''] after:h-[600px] after:w-[396px] after:bg-blue_linear  after:top-0 after:left-0 after:z-20 ">
          <IMG
            src={"/Images/Home/Projects/workhub.jpg"}
            alt={"workhub img"}
            width={843}
            height={600}
            className={"h-full w-full bg-cover"}
          />
          <div className=" absolute top-0 left-0 z-30 ">
            <h1>hello this is sultan</h1>
          </div>
        </div>
        <div className="flex flex-col gap-8 ">
          <IMG
            src={"/Images/Home/Projects/uninas.jpg"}
            alt={"uninas img"}
            width={405}
            height={284}
          />
          <IMG
            src={"/Images/Home/Projects/chruch.jpg"}
            alt={"chruch img"}
            width={405}
            height={284}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
