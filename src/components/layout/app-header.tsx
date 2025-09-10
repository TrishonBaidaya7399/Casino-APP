"use client";

import Image from "next/image";
import { useSidebarStore } from "@/store/sidebar-store";
import AnimatedHamburger from "@/components/ui/animated-hamburger";

import { Button } from "../ui/button";

export default function AppHeader() {
  const { mobileOpen, toggleMobileOpen, collapsed, toggleCollapsed } =
    useSidebarStore();

  // Use drawerWidth (240px) from GlobalProvider context for consistency
  const drawerWidth = 240;
  const sidebarOffset = `ml-[${drawerWidth / 16}rem]`; // Convert 240px to 15rem (240 / 16)
  const collapsedOffset = `ml-[${64 / 16}rem]`; // Convert 64px to 4rem
  const adjustedWidth = collapsed
    ? `w-[calc(100%-${64 / 16}rem)]`
    : `w-[calc(100%-${drawerWidth / 16}rem)]`;

  return (
    <header
      className={`fixed top-0 right-0 z-40 w-full border-b border-border bg-background transition-all ${
        collapsed ? collapsedOffset : sidebarOffset
      } ${adjustedWidth} py-5.5 lg:${adjustedWidth}`}
    >
      <div className="app-container flex items-center justify-between py-4">
        {/* Logo + Brand */}
        <div className="flex items-center">
          <div className="mr-2 h-8 w-8 overflow-hidden rounded-lg">
            <Image
              width={32}
              height={32}
              alt="brand name"
              src="/default.avif"
              placeholder="blur"
              blurDataURL="/default.webp"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <span className="hidden text-lg font-semibold text-foreground lg:block">
            BRAND NAME
          </span>
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="lg"
            className="rounded-lg border border-foreground px-6 text-base font-medium text-foreground hover:bg-foreground/10"
          >
            Login
          </Button>
          <Button
            variant="default"
            size="lg"
            className="rounded-lg bg-foreground px-6 text-base font-medium text-background hover:bg-foreground/70"
          >
            Register
          </Button>

          {/* Hamburger visible only on mobile */}
          <div className="ml-2 lg:hidden">
            <AnimatedHamburger
              isOpen={mobileOpen}
              onClick={toggleMobileOpen}
              size={24}
            />
          </div>
          {/* Collapse toggle for lg displays */}
          <div className="hidden lg:block ml-2">
            <AnimatedHamburger
              isOpen={collapsed}
              onClick={toggleCollapsed}
              size={24}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
