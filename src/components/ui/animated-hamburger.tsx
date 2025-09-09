"use client";

import { motion } from "framer-motion";
import { X, Menu } from "lucide-react";

interface AnimatedHamburgerProps {
  isOpen: boolean;
  onClick: () => void;
  color?: string;
  size?: number;
}

export default function AnimatedHamburger({
  isOpen,
  onClick,
  size = 24,
}: AnimatedHamburgerProps) {
  return (
    <motion.button
      onClick={onClick}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="flex h-fit w-fit cursor-pointer items-center justify-center rounded-md p-2 hover:bg-muted/20"
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      <motion.div
        key={isOpen ? "close" : "menu"}
        initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.2 }}
      >
        {isOpen ? <X size={size} className="bg-muted" strokeWidth={2.5} /> : <Menu size={size} className="bg-muted" strokeWidth={2.5} />}
      </motion.div>
    </motion.button>
  );
}
