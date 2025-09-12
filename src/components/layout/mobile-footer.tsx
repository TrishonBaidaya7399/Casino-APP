import React from "react";
import Link from "next/link";
import { useSidebarStore } from "@/store/sidebar-store";
import { BetsIcon, BrowsIcon, CasinoIcon, ChatIcon, SportsIcon } from "../common/svg_icons/mobile-footer-icons-svg";

function MobileFooter() {
  const { toggleMobileOpen } = useSidebarStore();
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-background border-t border-border flex justify-around py-1">
      <button
        onClick={toggleMobileOpen}
        className="flex flex-col items-center text-primary gap-2 p-1 relative groups"
      >
        <BrowsIcon />
        <span>Browse</span>
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/55 to-foreground/0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none rounded" />
      </button>
      <Link
        href="/"
        scroll={false}
        className="flex flex-col items-center text-primary gap-2 p-1 relative groups"
      >
        <CasinoIcon />
        <span>Casino</span>
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/55 to-foreground/0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none rounded" />
      </Link>
      <Link
        href="/"
        scroll={false}
        className="flex flex-col items-center text-primary gap-2 p-1 relative groups"
      >
        <BetsIcon />
        <span>Bets</span>
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/55 to-foreground/0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none rounded" />
      </Link>
      <Link
        href="/"
        scroll={false}
        className="flex flex-col items-center text-primary gap-2 p-1 relative groups"
      >
        <SportsIcon />
        <span>Sports</span>
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/55 to-foreground/0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none rounded" />
      </Link>
      <Link
        href="/"
        scroll={false}
        className="flex flex-col items-center text-primary gap-2 p-1 relative groups"
      >
        <ChatIcon />
        <span>Chat</span>
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/55 to-foreground/0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none rounded" />
      </Link>
    </nav>
  );
}

export default MobileFooter;

