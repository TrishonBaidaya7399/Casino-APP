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
      "Leading the online gambling industry since 2017, Stake.com offers a wide variety of online casino and sports betting options, operating globally in 15 different languages. With a reputable and secure platform, Stake Casino is home to worldwide local currencies and crypto betting options for online slot games, Stake Originals and live casino games. Stake Sportsbook offers unbeatable odds on all major sporting events including a range of eSport leagues. We host regular bet bonuses and promotions and offer an exclusive VIP Club experience - all with a simple-to-use deposit process on our licensed platform.",
  },
  {
    title: "Is Brand Name Licensed?",
    content: "Yes, Brand Name operates under proper licensing and regulatory oversight to ensure fair play and secure transactions for all users.",
  },
  {
    title: "Is Betting on Brand Name Safe?",
    content: "Yes, betting on Brand Name is safe. The platform uses advanced security measures, encryption technology, and follows strict regulatory guidelines to protect user data and funds.",
  },
  {
    title: "What Currencies Can I Bet With?",
    content: "Brand Name supports a wide range of currencies including major fiat currencies like USD, EUR, GBP, and various cryptocurrencies such as Bitcoin, Ethereum, and other popular digital assets.",
  },
  {
    title: "What Types of Casino Games Can I Play?",
    content: "Brand Name offers an extensive selection of casino games including slot machines, table games like blackjack and roulette, live dealer games, poker variants, and exclusive Brand Name Originals games.",
  },
  {
    title: "What Sports Can I Bet On?",
    content: "You can bet on a comprehensive range of sports including football, basketball, tennis, soccer, hockey, baseball, boxing, MMA, and various eSports tournaments and leagues.",
  },
  {
    title: "How Do I Watch Live Streams?",
    content: "Live streams are available for select sporting events and can be accessed directly through your Brand Name account. Simply navigate to the live betting section and look for the stream icon next to eligible events.",
  },
];

