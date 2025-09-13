import React from "react";
import Link from "next/link";
import { useSidebarStore } from "@/store/sidebar-store";
import { usePathname } from "next/navigation";
import { BrowsIcon } from "../common/svg_icons/brows-icon-svg";
import { CasinoIcon } from "../common/svg_icons/casino-icon-svg";
import { BetsIcon } from "../common/svg_icons/bets-icon";
import { SportsIcon } from "../common/svg_icons/sports-icon-svg";
import { ChatIcon } from "../common/svg_icons/chat-icons.svg";

function MobileFooter() {
  const pathname = usePathname();
  const { toggleBrowseOpen, browseOpen } = useSidebarStore();
  console.log({ pathname });
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border flex pt-2 mt-0.5 ">
      <button
        onClick={toggleBrowseOpen}
        className="flex flex-col items-center text-primary w-1/5 relative groups hover:bg-gradient-to-t hover:from-foreground/15 hover:to-background duration-300 pb-4"
      >
        <BrowsIcon active={browseOpen} />
        <span>Browse</span>
      </button>
      <Link
        href="/casino"
        scroll={false}
        className="flex flex-col items-center text-primary w-1/5 relative groups hover:bg-gradient-to-t hover:from-foreground/15 hover:to-background duration-300 pb-4"
      >
        <CasinoIcon active={pathname === "/casino" ? true : false} />
        <span>Casino</span>
      </Link>
      <Link
        href="/bets"
        scroll={false}
        className="flex flex-col items-center text-primary w-1/5 relative groups hover:bg-gradient-to-t hover:from-foreground/15 hover:to-background duration-300 pb-4"
      >
        <BetsIcon active={pathname === "/bets" ? true : false} />
        <span>Bets</span>
      </Link>
      <Link
        href="/sports"
        scroll={false}
        className="flex flex-col items-center text-primary w-1/5 relative groups hover:bg-gradient-to-t hover:from-foreground/15 hover:to-background duration-300 pb-4"
      >
        <SportsIcon active={pathname === "/sports" ? true : false} />
        <span>Sports</span>
      </Link>
      <Link
        href="/chat"
        scroll={false}
        className="flex flex-col items-center text-primary w-1/5 relative groups hover:bg-gradient-to-t hover:from-foreground/15 hover:to-background duration-300 pb-4"
      >
        <ChatIcon active={pathname === "/chat" ? true : false} />
        <span>Chat</span>
      </Link>
    </nav>
  );
}

export default MobileFooter;
