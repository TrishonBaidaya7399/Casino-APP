"use client";
import { useState, useEffect } from "react";
import { useSidebarStore } from "@/store/sidebar-store";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  Crown,
  Calendar,
  ChevronUp,
  Briefcase,
  ChevronDown,
} from "lucide-react";
import { usePathname } from "next/navigation";
import AnimatedHamburger from "../global-components/animated-hamburger";
import { Button } from "../ui/button";
import Link from "next/link";
import PromotionsIconSVG from "../common/svg_icons/sidebar-icons/promotions-icon-svg";
import AffiliateIconSVG from "../common/svg_icons/sidebar-icons/affiliate-icon-svg";
import VipIconSVG from "../common/svg_icons/sidebar-icons/vip-icon-svg";
import BlogIconSVG from "../common/svg_icons/sidebar-icons/blog-icon-svg";
import ForumIconSVG from "../common/svg_icons/sidebar-icons/forum-icon-svg";
import SponsorShipIconSVG from "../common/svg_icons/sidebar-icons/sponsorships-icon-svg";
import ResponsibleIconSVG from "../common/svg_icons/sidebar-icons/responsible-icon-svg";
import LiveSupportIconSVG from "../common/svg_icons/sidebar-icons/live-support-icon-svg";
import CasinoIconSVG from "../common/svg_icons/sidebar-icons/casino-icon-svg";
import SportsIconSVG from "../common/svg_icons/sidebar-icons/sports-icon-svg";

export interface MenuItem {
  text: string;
  icon: any;
  href?: string;
  children?: MenuItem[];
}

export const menuItems1: MenuItem[] = [
  {
    text: "Promotions",
    icon: PromotionsIconSVG,
    children: [
      { text: "Welcome Bonus", icon: Star, href: "/" },
      { text: "Daily Rewards", icon: Calendar, href: "/" },
      { text: "VIP Rewards", icon: Crown, href: "/" },
    ],
  },
  { text: "Affiliate", icon: AffiliateIconSVG, href: "/" },
  { text: "VIP Club", icon: VipIconSVG, href: "/" },
  { text: "Blog", icon: BlogIconSVG, href: "/" },
  { text: "Forum", icon: ForumIconSVG, href: "/" },
];

export const menuItems2: MenuItem[] = [
  {
    text: "Sponsorships",
    icon: SponsorShipIconSVG,
    children: [
      { text: "Partner Program", icon: SponsorShipIconSVG, href: "/" },
      { text: "Brand Deals", icon: Briefcase, href: "/" },
    ],
  },
  { text: "Responsible Gambling", icon: ResponsibleIconSVG, href: "/" },
  { text: "Live Support", icon: LiveSupportIconSVG, href: "/" },
];

export const menuSections: { items: MenuItem[] }[] = [
  { items: menuItems1 },
  { items: menuItems2 },
];

export default function AppSidebar() {
  const { mobileOpen, toggleMobileOpen } = useSidebarStore();
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const pathname = usePathname();

  useEffect(() => {
    if (mobileOpen) {
      setExpandedItems([]);
    }
  }, [mobileOpen]);

  const handleItemClick = (itemText: string) => {
    const isExpanded = expandedItems.includes(itemText);

    if (mobileOpen) {
      toggleMobileOpen();
      setTimeout(() => {
        if (!isExpanded) {
          setExpandedItems((prev) => [...prev, itemText]);
        }
      }, 300);
      return;
    }

    if (isExpanded) {
      setExpandedItems(expandedItems.filter((i) => i !== itemText));
    } else {
      setExpandedItems([...expandedItems, itemText]);
    }
  };

  return (
    <nav
      className={`hidden md:block z-50 sticky top-0 left-0 h-screen overflow-y-auto border-r border-border bg-sidebar shrink-0
      transition-all duration-300`}
    >
      {/* top bar */}
      <div className="sticky top-0 left-0 z-40 flex items-center p-4 bg-sidebar">
        {/* Desktop hamburger */}
        <div className="hidden md:block">
          <AnimatedHamburger isOpen={mobileOpen} onClick={toggleMobileOpen} />
        </div>

        {/* Casino / Sports buttons */}
        <div
          className={`flex gap-2 items-center transition-all duration-300 overflow-hidden 
            ${mobileOpen
              ? "max-w-auto md:max-w-0 pl-4 md:pl-0"
              : "max-w-auto md:max-w-50 pl-4"
            }`}
        >
          <Button
            href="/casino"
            variant={pathname === "/casino" ? "purpleGradient" : "gray"}
            asChild
          >
            Casino
          </Button>
          <Button href="/sports"
            variant={pathname === "/sports" ? "greenGradient" : "gray"}
            asChild
          >
            Sports
          </Button>
        </div>
      </div>

      {/* menu sections */}
      <div className="text-sidebar-foreground flex flex-col gap-2 p-4 text-sm">

        {/* visible only in collapse state */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              key="mobileMenu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-full flex items-start flex-col gap-2 overflow-hidden"
            >
              <Link
                className={`inline-block p-3 transition-all duration-300 rounded-lg 
                  ${pathname === "/casino"
                    ? "bg-gradient-to-t from-purple-1 to-blue-1 hover:opacity-80"
                    : "bg-background-2 hover:bg-background-2/55"
                  }`}
                  href='/casino'
                >
                <CasinoIconSVG />
              </Link>

              <Link
                className={`inline-block p-3 transition-all duration-300 rounded-lg 
                  ${pathname === "/sports"
                    ? "bg-gradient-to-t from-cyan-1 to-green-1 hover:opacity-80"
                    : "bg-background-2 hover:bg-background-2/55"
                  }`}
                  href="/sports"
                >
                <SportsIconSVG />
              </Link>

            </motion.div>
          )}
        </AnimatePresence>

        {menuSections.map((section, index) => (
          <div key={index} className="rounded-lg bg-background">
            {section.items.map((item) => {
              const isExpanded = expandedItems.includes(item.text);

              return (
                <div key={item.text}>
                  {item.children ? (
                    <button
                      onClick={() => handleItemClick(item.text)}
                      className={`flex gap-0.5 items-center justify-between cursor-pointer relative
                        w-full p-3 overflow-hidden transition-all duration-300
                        hover:bg-background-2
                        ${isExpanded
                          ? "bg-background-2 rounded-t-lg"
                          : "bg-transparent rounded-lg"
                        }`}
                    >
                      <span className="flex items-center relative z-10">
                        {/* <item.icon className="size-5" /> */}
                        <item.icon className="fill-white" />
                        <span
                          className={`whitespace-nowrap overflow-hidden transition-all duration-300 
                            ${mobileOpen
                              ? "max-w-auto md:max-w-0 pl-2 md:pl-0"
                              : "max-w-auto md:max-w-50 pl-2"
                            }`}
                        >
                          {item.text}
                        </span>
                      </span>
                      <span
                        className={
                          mobileOpen
                            ? "static md:absolute md:-right-0.5 md:top-1/2 md:-translate-y-1/2"
                            : "relative"
                        }
                      >
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown
                            className={`w-4 h-4 transform transition-transform duration-300 ${mobileOpen ? "md:-rotate-90" : "rotate-0"
                              }`}
                          />
                        )}
                      </span>
                    </button>
                  ) : (
                    <Link
                      href={item.href || "#"}
                      className="flex gap-0.5 items-center justify-between relative
                        w-full p-3 overflow-hidden transition-all duration-300
                        hover:bg-background-2 rounded-lg"
                    >
                      <span className="flex items-center relative z-10">
                        <item.icon className="size-5" />
                        <span
                          className={`whitespace-nowrap overflow-hidden transition-all duration-300 
                            ${mobileOpen
                              ? "max-w-auto md:max-w-0 pl-2 md:pl-0"
                              : "max-w-auto md:max-w-50 pl-2"
                            }`}
                        >
                          {item.text}
                        </span>
                      </span>
                    </Link>
                  )}

                  {/* children */}
                  {item.children && (
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className={`px-3 flex flex-col rounded-b-lg ${isExpanded ? "bg-background" : "bg-transparent"
                            }`}
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.text}
                              href={child.href || "#"}
                              className="flex rounded hover:bg-sidebar-hover gap-2 relative"
                            >
                              <span className="flex items-start relative py-1 pl-1">
                                <div className="relative size-6">
                                  <svg
                                    className="absolute left-1/2 -translate-x-1/2 -translate-y-[65%] stroke-2 stroke-background-2 h-9"
                                    viewBox="0 0 13 36"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M1 24V30C0.99995 32 1.4 35 5 35C8.6 35 10.5 35 13 35" />
                                    <path d="M1 0V24" />
                                  </svg>
                                </div>

                                <span
                                  className={`whitespace-nowrap overflow-hidden transition-all duration-300 
                                    text-white/55 cursor-pointer hover:text-white
                                    ${mobileOpen
                                      ? "max-w-auto md:max-w-0"
                                      : "max-w-auto md:max-w-50"
                                    }`}
                                >
                                  {child.text}
                                </span>
                              </span>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </nav>
  );
}
