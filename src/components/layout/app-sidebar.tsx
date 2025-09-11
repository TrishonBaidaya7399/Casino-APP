"use client";

import type { LucideIcon } from "lucide-react";

import { useState, useEffect, useRef } from "react";
import { useSidebarStore } from "@/store/sidebar-store";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Book, Lock, Crown, Users, Award, Calendar, ChevronUp, Handshake, Briefcase, Headphones, ChevronDown, MessageCircle } from "lucide-react";

import AnimatedHamburger from "../ui/animated-hamburger";
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
    ]
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
    ]
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
  }, []);


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
                    className="flex gap-0.5 items-center justify-between w-full p-3 rounded overflow-hidden"
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
                          className="pl-6 flex flex-col gap-1 mt-1"
                        >
                          {item.children.map((child) => (
                            <button key={child.text} className="flex items-center gap-2 p-1 rounded hover:bg-sidebar-hover">
                              <child.icon className="w-4 h-4" />
                              <span className={`whitespace-nowrap overflow-hidden transition-all duration-300 ${mobileOpen ? "max-w-auto md:max-w-0" : "max-w-auto md:max-w-50"}`}>
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
}

