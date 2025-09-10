"use client";

import type { LucideIcon } from "lucide-react";
import { useState } from "react";
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
import AnimatedHamburger from "../ui/animated-hamburger";

interface MenuItem {
  text: string;
  icon: LucideIcon;
  href?: string;
  children?: MenuItem[];
}

const menuItems1: MenuItem[] = [
  {
    text: "Promotions",
    icon: Star,
    children: [
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
    text: "Sponsorships",
    icon: Handshake,
    children: [
      { text: "Partner Program", icon: Handshake },
      { text: "Brand Deals", icon: Briefcase },
    ],
  },
  { text: "Responsible Gambling", icon: Lock },
  { text: "Live Support", icon: Headphones },
];

const MobileSidebar = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const handleItemClick = (itemText: string) => {
    if (expandedItems.includes(itemText)) {
      setExpandedItems(expandedItems.filter((i) => i !== itemText));
    } else {
      setExpandedItems([...expandedItems, itemText]);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed inset-y-0 left-0 z-50 w-[240px] bg-sidebar text-sidebar-foreground flex flex-col p-4 gap-4 overflow-y-auto"
          onClick={onClose}
        >
          <div className="flex justify-end mb-4">
            <AnimatedHamburger isOpen={isOpen} onClick={onClose} size={28} />
          </div>
          {[...menuItems1, ...menuItems2].map((item) => {
            const isExpanded = expandedItems.includes(item.text);
            return (
              <div key={item.text}>
                <button
                  onClick={() => item.children && handleItemClick(item.text)}
                  className="flex items-center justify-between w-full p-2 rounded hover:bg-sidebar-hover"
                >
                  <span className="flex items-center gap-2">
                    <item.icon className="w-5 h-5" />
                    {item.text}
                  </span>
                  {item.children &&
                    (isExpanded ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    ))}
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
                          <button
                            key={child.text}
                            className="flex items-center gap-2 p-1 rounded hover:bg-sidebar-hover"
                          >
                            <child.icon className="w-4 h-4" />
                            {child.text}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            );
          })}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const DesktopSidebar = ({
  isCollapsed,
  onToggle,
}: {
  isCollapsed: boolean;
  onToggle: () => void;
}) => {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const handleItemClick = (itemText: string) => {
    if (expandedItems.includes(itemText)) {
      setExpandedItems(expandedItems.filter((i) => i !== itemText));
    } else {
      setExpandedItems([...expandedItems, itemText]);
    }
  };

  return (
    <nav className="relative z-50">
      <motion.div
        className={`fixed top-0 left-0 h-full flex flex-col p-4 gap-4 overflow-y-auto transition-all duration-300 ${
          isCollapsed ? "w-[64px]" : "w-[240px]"
        } bg-sidebar text-sidebar-foreground`}
        initial={false}
        animate={{ width: isCollapsed ? "64px" : "240px" }}
      >
        {/* Hamburger at the top for desktop */}
        <div className="mb-4">
          <AnimatedHamburger
            isOpen={isCollapsed}
            onClick={onToggle}
            size={28}
          />
        </div>
        {[...menuItems1, ...menuItems2].map((item) => {
          const isExpanded = expandedItems.includes(item.text);
          return (
            <div key={item.text}>
              <button
                onClick={() => item.children && handleItemClick(item.text)}
                className="flex items-center justify-between w-full p-2 rounded hover:bg-sidebar-hover"
              >
                <span
                  className={`flex items-center gap-2 ${
                    isCollapsed ? "justify-center" : ""
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  {!isCollapsed && item.text}
                </span>
                {!isCollapsed &&
                  item.children &&
                  (isExpanded ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  ))}
              </button>
              {!isCollapsed && item.children && (
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="pl-6 flex flex-col gap-1 mt-1"
                    >
                      {item.children.map((child) => (
                        <button
                          key={child.text}
                          className="flex items-center gap-2 p-1 rounded hover:bg-sidebar-hover"
                        >
                          <child.icon className="w-4 h-4" />
                          {!isCollapsed && child.text}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          );
        })}
      </motion.div>
    </nav>
  );
};

export default function AppSidebar({
  isMobile,
  onToggle,
}: {
  isMobile: boolean;
  onToggle: () => void;
}) {
  const { mobileOpen, collapsed } = useSidebarStore();

  if (isMobile) {
    return <MobileSidebar isOpen={mobileOpen} onClose={onToggle} />;
  }
  return <DesktopSidebar isCollapsed={collapsed} onToggle={onToggle} />;
}
