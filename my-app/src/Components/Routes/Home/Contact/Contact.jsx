"use client";
import Heading from "@/Components/Tags/Heading/Heading";
import Paragraph from "@/Components/Tags/Paragraph/Paragraph";
import React, { useState, useEffect } from "react";
import { RxCross1 } from "react-icons/rx";
import { IoIosAdd } from "react-icons/io";
import "react-accessible-accordion/dist/fancy-example.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const Contact = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const handleAccordion = index => {
    if (index !== expandedIndex) {
      setExpandedIndex(index);
    } else {
      setExpandedIndex(index);
    }
  };

  const ItemContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  const items = [
    {
      itemNum: "1",
      Heading: "How much time does it take?",
      content: ItemContent,
    },
    {
      itemNum: "2",
      Heading: "What is your class naming convention?",
      content: ItemContent,
    },
    {
      itemNum: "3",
      Heading: "How do you communicate?",
      content: ItemContent,
    },
    {
      itemNum: "4",
      Heading: "I have a bigger project. Can you handle it?",
      content: ItemContent,
    },
    {
      itemNum: "5",
      Heading: "What is your class naming convention?",
      content: ItemContent,
    },
  ];
  return (
    <section className=" h-auto w-auto  pl-navbarPadding py-32   bg-white flex gap-hundredThirtySix  ">
      <div>
        <Heading
          Heading={"h3"}
          className={"Heading-Three text-DarkBlue w-threeTwentySeven "}
          text={"Frequently asked questions"}
        />
        <Paragraph
          text={"Contact us for more info"}
          className={"label-one text-royalBlue opacity-85 "}
        />
      </div>
      <div>
        <Accordion preExpanded={[0]} className="relative">
          {items.map((item, index) => (
            <AccordionItem className="" uuid={index} key={index}>
              {item.itemNum}
              <AccordionItemHeading className="  " >
                {item.Heading}
                <AccordionItemButton className="h-[20px] w-[20px] bg-red-400 absolute right-0  ">
                  {expandedIndex === index ? (
                    <RxCross1 onClick={() => handleAccordion(index)} />
                  ) : (
                    <IoIosAdd onClick={() => handleAccordion(index)} />
                  )}
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>{item.content}</AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Contact;
