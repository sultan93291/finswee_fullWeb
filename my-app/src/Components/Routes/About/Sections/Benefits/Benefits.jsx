import BenefitsCard from "@/Components/Cards/BenefitsCard/BenefitsCard";
import LogoCard from "@/Components/Cards/LogoCard/LogoCard";

import React from "react";

const Benefits = () => {
  return (
    <section className=" h-auto max-w-maxWidth mx-auto py-32 flex flex-col gap-seventySix bg-white ">
      <BenefitsCard />
      <LogoCard />
    </section>
  );
};

export default Benefits;
