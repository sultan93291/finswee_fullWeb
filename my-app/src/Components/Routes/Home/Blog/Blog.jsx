import BlogCards from "@/Components/Cards/BlogCards/BlogCards";
import Heading from "@/Components/Tags/Heading/Heading";
import React from "react";

const Blog = () => {
  const Date = "19 jan 2022";
  const HeadingTXt =
    "How one Webflow user grew his single person consultancy from $0-100K in 14 months";
  const paraTxt =
    "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract";
  const BlogCard = [
    {
      imgPath: "/Images/Home/Blog/beard.png",
      Date: Date,
      HeadingTXt: HeadingTXt,
      paraTxt: paraTxt,
    },
    {
      imgPath: "/Images/Home/Blog/brownHair.png",
      Date: Date,
      HeadingTXt: HeadingTXt,
      paraTxt: paraTxt,
    },
    {
      imgPath: "/Images/Home/Blog/apple.png",
      Date: Date,
      HeadingTXt: HeadingTXt,
      paraTxt: paraTxt,
    },
  ];
  return (
    <section className=" h-auto w-auto  px-navbarPadding py-32   bg-white flex flex-col gap-16  ">
      <Heading
        Heading={"h2"}
        text={"Our blog"}
        className={"Heading-two text-DarkBlue"}
      />
      <div className=" flex gap-8 ">
        {BlogCard.map((item, index) => (
          <BlogCards
            key={index}
            src={item.imgPath}
            height={285}
            width={405}
            DateTxt={item.Date}
            ParaTxt={item.paraTxt}
            HeadingTxt={item.HeadingTXt}
            alt={"blog card image"}
            imgStyle={"bg-cover"}
          />
        ))}
      </div>
    </section>
  );
};

export default Blog;
