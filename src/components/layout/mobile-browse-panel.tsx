"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useSidebarStore } from "@/store/sidebar-store";
import { menuSections } from "./app-sidebar";
import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import SearchBar from "../common/search-bar/search-bar";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";

export default function MobileBrowsePanel() {
  const pathname = usePathname();
  const { browseOpen } = useSidebarStore();
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const handleItemClick = (itemText: string) => {
    const isExpanded = expandedItems.includes(itemText);
    if (isExpanded) {
      setExpandedItems(expandedItems.filter((i) => i !== itemText));
    } else {
      setExpandedItems([...expandedItems, itemText]);
    }
  };

  useEffect(() => {
    if (browseOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [browseOpen]);

  return (
    <AnimatePresence>
      {browseOpen && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "tween", duration: 0.3 }}
          className="fixed top-19 bottom-19 inset-0 z-40 bg-sidebar overflow-y-auto"
        >
          {/* search panel */}
          <div className="p-4">
            <SearchBar isMobileSidebar />
          </div>
          <div className="flex gap-4 items-center flex-row px-4">
            <Button
              href="/casino"
              variant={pathname === "/casino" ? "purpleGradient" : "gray"}
              asChild
              className="w-full"
            >
              Casino
            </Button>
            <Button
              href="/sports"
              variant={pathname === "/sports" ? "greenGradient" : "gray"}
              asChild
              className="w-full"
            >
              Sports
            </Button>
          </div>
          {/* menu sections */}
          <div className="text-sidebar-foreground flex flex-col gap-2 p-4">
            {menuSections.map((section, index) => (
              <div key={index} className="rounded-lg bg-background">
                {section.items.map((item) => {
                  const isExpanded = expandedItems.includes(item.text);

                  return (
                    <div key={item.text}>
                      {item.children ? (
                        // parent with children → button
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
                            <item.icon className="size-5" />
                            <span className="whitespace-nowrap overflow-hidden transition-all duration-300 max-w-auto md:max-w-0 pl-2 md:pl-0">
                              {item.text}
                            </span>
                          </span>
                          <span className="static md:absolute md:-right-0.5 md:top-1/2 md:-translate-y-1/2">
                            {isExpanded ? (
                              <ChevronUp className="w-4 h-4" />
                            ) : (
                              <ChevronDown className="w-4 h-4 transform transition-transform duration-300 md:-rotate-90" />
                            )}
                          </span>
                        </button>
                      ) : (
                        // parent without children → Link
                        <Link
                          href={item.href || "#"}
                          className="flex gap-0.5 items-center justify-between relative
                        w-full p-3 overflow-hidden transition-all duration-300
                        hover:bg-background-2 rounded-lg"
                        >
                          <span className="flex items-center relative z-10">
                            <item.icon className="size-5" />
                            <span className="whitespace-nowrap overflow-hidden transition-all duration-300 max-w-auto md:max-w-0 pl-2 md:pl-0">
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
                              className={`px-3 flex flex-col rounded-b-lg ${isExpanded ? "bg-background" : "bg-transparent"}`}
                            >
                              {item.children.map((child) => (
                                <Link
                                  key={child.text}
                                  href={child.href || "#"}
                                  className="flex rounded hover:bg-sidebar-hover gap-2 relative"
                                >

                                  <span className="flex items-start relative py-1 pl-1">

                                    <div className="relative size-6">

                                      <svg className="absolute left-1/2 -translate-x-1/2 -translate-y-[65%] stroke-2 stroke-background-2 h-9" viewBox="0 0 13 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 24V30C0.99995 32 1.4 35 5 35C8.6 35 10.5 35 13 35" />
                                        <path d="M1 0V24" />
                                      </svg>

                                    </div>

                                    <span className="whitespace-nowrap overflow-hidden transition-all duration-300 
                                    text-white/55 cursor-pointer hover:text-white"
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
        </motion.div>
      )}
    </AnimatePresence>
  );
}
