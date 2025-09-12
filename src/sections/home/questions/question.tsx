import React from "react";
import { GlobalAccordion } from "@/components/global-components/global-accordion";

function Question() {
  return (
    <div>
      <h2 className="text-foreground-muted text-base font-semibold pb-2.5">
        Still Have Questions?
      </h2>
      <GlobalAccordion data={sampleData} />
    </div>
  );
}

export default Question;

const sampleData: any[] = [
  {
    title: "Who is Brand Name",
    content:
      "Leading the online gambling industry since 2017, Stake.com offers a wide variety of online casino and sports betting options, operating globally in 15 different languages...",
  },
  {
    title: "Is Brand Name Licensed?",
    content: "Yes, Stake.com is a licensed platform...",
  },
  {
    title: "Is Betting on Brand Name Safe?",
    content: "Yes, betting on Stake.com is safe...",
  },
];
