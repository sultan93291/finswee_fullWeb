import BlogImgCard from "@/Components/Cards/BlogImgCard/BlogImgCard";
import Heading from "@/Components/Tags/Heading/Heading";
import Paragraph from "@/Components/Tags/Paragraph/Paragraph";
import React from "react";

const Blog = () => {
  return (
    <section className=" h-auto w-auto  bg-white mx-auto flex flex-col py-32    ">
      <div className="flex flex-col gap-y-12 items-center ">
        <BlogImgCard />
        <div className="flex flex-col gap-4">
          <Paragraph
            text={
              "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside."
            }
            className={
              "Body-One text-DarkBlue opacity-70 w-eightThirtySeven text-center"
            }
          />
          <Paragraph
            text={"read more"}
            className={
              "Body-One text-royalBlue opacity-70 w-eightThirtySeven text-center"
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Blog;
