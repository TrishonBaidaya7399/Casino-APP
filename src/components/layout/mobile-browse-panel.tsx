"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useSidebarStore } from "@/store/sidebar-store";
import { menuSections } from "./app-sidebar";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";

export default function MobileBrowsePanel() {
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
                        ${
                          isExpanded
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
                              className={`pl-5 pr-3 flex flex-col rounded-b-lg ${
                                isExpanded ? "bg-background" : "bg-transparent"
                              }`}
                            >
                              {item.children.map((child) => (
                                <Link
                                  key={child.text}
                                  href={child.href || "#"}
                                  className="flex rounded hover:bg-sidebar-hover gap-2 relative"
                                >
                                  {/* line start */}
                                  <span className="bg-background-2 inline-block h-full w-1_5 absolute -top-5 left-0" />

                                  <span className="flex items-start relative gap-2 py-1">
                                    {/* rounded bottom svg */}
                                    <svg
                                      className="w-3 h-3 stroke-background-2 stroke-2 shrink-0 mt-0.5"
                                      viewBox="0 0 13 12"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path d="M1 0V6C0.99995 8 1.4 11 5 11C8.6 11 10.5 11 13 11" />
                                    </svg>

                                    <span
                                      className="whitespace-nowrap overflow-hidden transition-all duration-300 
                                    text-white/55 cursor-pointer hover:text-white max-w-auto md:max-w-0"
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
