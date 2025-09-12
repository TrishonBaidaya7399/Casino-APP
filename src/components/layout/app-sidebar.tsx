"use client";

import type { LucideIcon } from "lucide-react";

import { useState, useEffect } from "react";
import { useSidebarStore } from "@/store/sidebar-store";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  Book,
  Lock,
  Crown,
  Users,
  Award,
  Calendar,
  ChevronUp,
  Handshake,
  Briefcase,
  Headphones,
  ChevronDown,
  MessageCircle,
} from "lucide-react";
import AnimatedHamburger from "../global-components/animated-hamburger";
import { Button } from "../ui/button";
import CloseSVG from "../common/svg_icons/CloseSVG";

interface MenuItem {
  text: string;
  icon: LucideIcon;
  href?: string;
  children?: MenuItem[];
}

const menuItems1: MenuItem[] = [
  {
    text: "Promotions", icon: Star, children: [
      { text: "Welcome Bonus", icon: Star },
      { text: "Daily Rewards", icon: Calendar },
      { text: "VIP Rewards", icon: Crown },
    ],
  },
  { text: "Affiliate", icon: Users },
  { text: "VIP Club", icon: Award },
  { text: "Blog", icon: Book },
  { text: "Forum", icon: MessageCircle },
];

const menuItems2: MenuItem[] = [
  {
    text: "Sponsorships", icon: Handshake, children: [
      { text: "Partner Program", icon: Handshake },
      { text: "Brand Deals", icon: Briefcase },
    ],
  },
  { text: "Responsible Gambling", icon: Lock },
  { text: "Live Support", icon: Headphones },
];

const menuSections: { items: MenuItem[] }[] = [
  { items: menuItems1 },
  { items: menuItems2 },
];

export default function AppSidebar() {
  const { mobileOpen, toggleMobileOpen } = useSidebarStore();
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 768) {
        toggleMobileOpen();
      }
      else {
        toggleMobileOpen();
      }
    }
  }, [toggleMobileOpen]);


  const handleItemClick = (itemText: string) => {
    if (expandedItems.includes(itemText)) {
      setExpandedItems(expandedItems.filter((i) => i !== itemText));
    } else {
      setExpandedItems([...expandedItems, itemText]);
    }
  };

  return (

    <nav className={`z-50 fixed md:sticky top-0 left-0 h-screen overflow-y-auto border-r border-border bg-sidebar shrink-0
      transition-all duration-300 ${mobileOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 max-w-2xl w-full md:w-auto md:max-w-auto`}>

      {/* Mobile toggle */}
      <div className="sticky top-0 left-0 z-40 flex items-center gap-4 p-4 bg-sidebar">

        <button onClick={toggleMobileOpen} className="flex md:hidden items-center justify-center size-6">
          <CloseSVG className="stroke-white-3" />
        </button>
        <div className="hidden md:block">
          <AnimatedHamburger isOpen={mobileOpen} onClick={toggleMobileOpen} />
        </div>
        <div className={`flex gap-2 items-center transition-all duration-300 overflow-hidden ${mobileOpen ? "max-w-auto md:max-w-0" : "max-w-auto md:max-w-50"}`}>
          <Button href="/casino" variant="gray">Casino</Button>
          <Button href="/sports" variant="gray">Sports</Button>
        </div>
      </div>

      {/* Sidebar container */}
      <div className="text-sidebar-foreground flex flex-col gap-2 p-4">
        {menuSections.map((section, index) => (
          <div key={index} className="rounded-lg bg-background">
            {section.items.map((item) => {
              const isExpanded = expandedItems.includes(item.text);
              return (
                <div key={item.text}>
                  <button
                    onClick={() => item.children && handleItemClick(item.text)}
                    className={`flex gap-0.5 items-center justify-between cursor-pointer
                        w-full p-3 rounded-t-lg overflow-hidden transition-all duration-300
                        ${isExpanded ? 'bg-background-2' : 'bg-transparent'}`}
                  >
                    <span className="flex items-center gap-2">

                      <item.icon className="size-5" />

                      <span className={`whitespace-nowrap overflow-hidden transition-all duration-300 ${mobileOpen ? "max-w-auto md:max-w-0" : "max-w-auto md:max-w-50"}`}>
                        {item.text}
                      </span>
                    </span>
                    {item.children && (
                      isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />
                    )}
                  </button>

                  {item.children && (
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="px-3 flex flex-col mt-1"
                        >
                          {item.children.map((child) => (
                            <button key={child.text} className="flex rounded hover:bg-sidebar-hover">
                              {/* <child.icon className="w-4 h-4" /> */}
                              {/* <svg width="13" height="24" viewBox="0 0 13 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 11C10.5 11 8.6 11 5 11C1.4 11 0.99995 8 1 6V0L1 24" stroke="white" stroke-opacity="0.15" stroke-width="1.5" />
                              </svg> */}

                              <span className="w-6 inline-flex items-center justify-center relative">
                                <span className="bg-background-2 inline-block h-full w-0.5 mx-auto -translate-y-3 absolute top-0 left-1/2 -translate-1/2"></span>
                              </span>

                              <span className={`whitespace-nowrap overflow-hidden transition-all duration-300 py-1 ${mobileOpen ? "max-w-auto md:max-w-0" : "max-w-auto md:max-w-50"}`}>
                                {child.text}
                              </span>
                            </button>
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
};


