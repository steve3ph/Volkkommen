import Build from "@/components/Build";
import ContactSection from "@/components/ContactSection";
import Deliver from "@/components/Deliver";
import Discover from "@/components/Discover";
import PageIntro from "@/components/PageIntro";
import Values from "@/components/Values";
import React from "react";

const ProcessPage = () => {
  return (
    <>
      <PageIntro eyebrow="Our process" title="What is IIoT?">
        <p>
        The term industrial internet of things is often encountered in the manufacturing industries,
         referring to the industrial subset of the IoT. Potential benefits of the industrial internet of things include improved productivity, 
         analytics and the transformation of the workplace. The potential of growth by implementing IIoT is predicted to generate $15 trillion of global GDP by 2030.
        </p>
      </PageIntro>
      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        {/* Discover */}
        <Discover />
        {/* Build */}
        <Build />
        {/* Deliver */}
        <Deliver /> 
      </div>
      {/* Values */}
      <Values />
      <ContactSection />
    </>
  );
};

export default ProcessPage;
