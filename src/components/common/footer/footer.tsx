"use client";

import Link from "next/link";
import { GlobalAccordion } from "@/components/global-components/global-accordion";
import FacebookIconSVG from "../svg_icons/facebook-icon-svg";
import XIconSVG from "../svg_icons/x-Icon-svg";
import MessageIconSVG from "../svg_icons/message-Icon-svg";
import InstaIconSVG from "../svg_icons/Insta-Icon-svg";
import YoutubeIconSVG from "../svg_icons/youtube-Icon-svg";
import TiktokIconSVG from "../svg_icons/tiktok-Icon-svg";
import LinkedinIconSVG from "../svg_icons/linkedin-Icon-svg";
import { Dot } from "lucide-react";
import Image from "next/image";

const footerLinks = {
  Casino: [
    "Casino Games",
    "Slots",
    "Live Casino",
    "Roulette",
    "Blackjack",
    "Poker",
    "Publishers",
    "Promos & Competitions",
    "Brand Name Engine",
  ],
  Sports: [
    "Sportsbook",
    "Live Sports",
    "Soccer",
    "Basketball",
    "Tennis",
    "eSports",
    "Bet Bonuses",
    "Sports Rules",
    "Racing Rules",
  ],
  Support: [
    "Help Center",
    "Fairness",
    "Gambling Helpline",
    "Live SupportSelf Exclusion",
    "Law Enforcement Request",
  ],
  "About Us": [
    "VIP Club",
    "Affiliate",
    "Privacy Policy",
    "AML Policy",
    "Terms of Service",
  ],
  "Payment Info": [
    "Deposit & Withdrawals",
    "Currency Guide",
    "Crypto Guide",
    "Supported Crypto",
    "How to Use the Vault",
    "How Much to Bet With",
  ],
  FAQ: [
    "How-to Guides",
    "Online Casino Guide",
    "Sports Betting Guide",
    "How to Live Stream Sports",
    "Brand Name VIP Guide",
    "House Edge Guide",
  ],
};

// Transform footerLinks for accordion
const accordionData = Object.entries(footerLinks).map(([title, links]) => ({
  title,
  content: (
    <ul className="space-y-2.5 text-white/55">
      {links.map((link) => (
        <li key={link}>
          <Link
            href="#"
            className="hover:text-white transition-all duration-300 flex flex-row items-center gap-1"
          >
            <Dot className="text-muted" />
            {link}
          </Link>
        </li>
      ))}
    </ul>
  ),
}));

const socialIcons = [
  { Icon: FacebookIconSVG, href: "#" },
  { Icon: XIconSVG, href: "#" },
  { Icon: MessageIconSVG, href: "#" },
  { Icon: InstaIconSVG, href: "#" },
  { Icon: YoutubeIconSVG, href: "#" },
  { Icon: TiktokIconSVG, href: "#" },
  { Icon: LinkedinIconSVG, href: "#" },
];

export default function Footer() {
  return (
    <div className="app-container pb-10">
      {/* Accordion for medium and smaller displays */}
      <div className="lg:hidden">
        <div className="flex flex-row justify-center items-center gap-3 w-full mb-6">
          <span>
            <Image
              src="/logos/logo.webp"
              alt="Branch logo"
              width={32}
              height={32}
              loading="lazy"
            />
          </span>
          <span className="text-lg font-semibold text-foreground">
            BRAND NAME
          </span>
        </div>
      </div>
      <div className="lg:hidden">
        <GlobalAccordion data={accordionData} />
      </div>
      <footer className="hidden lg:block bg-background-1 p-6 rounded-lg overflow-hidden text-sm">
        {/* Grid for large displays */}
        <div className="grid grid-cols-6 gap-6">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="space-y-2.5">
              <h4 className="font-semibold text-white">{title}</h4>
              <ul className="space-y-2.5 text-white/55">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="hover:text-white transition-all duration-300"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col lg:flex-row items-center justify-between border-t border-border pt-4">
          <div className="flex space-x-4">
            {socialIcons.map(({ Icon, href }, i) => (
              <Link key={i} href={href} className="group">
                <Icon className="fill-white/55 group-hover:fill-white transition-all duration-300" />
              </Link>
            ))}
          </div>
          <p className="text-xs mt-4 lg:mt-0 text-white/55">
            © 2025 brandname.com | All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
