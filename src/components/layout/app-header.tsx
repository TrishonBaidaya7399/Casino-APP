"use client";

import Image from "next/image";
import { useSidebarStore } from "@/store/sidebar-store";
import AnimatedHamburger from "@/components/ui/animated-hamburger";

import { Button } from "../ui/button";

export default function AppHeader() {
  const { mobileOpen, toggleMobileOpen } = useSidebarStore();

  return (
    <header className="fixed top-0 left-0 z-40 w-full border-b border-gray-200 bg-white transition-all lg:ml-60 lg:w-[calc(100%-15rem)]">
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
          <span className="hidden text-lg font-semibold text-gray-900 lg:block">
            BRAND NAME
          </span>
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="lg"
            className="rounded-lg border border-gray-900 px-6 text-base font-medium text-gray-900 hover:bg-gray-100"
          >
            Login
          </Button>
          <Button
            variant="default"
            size="lg"
            className="rounded-lg bg-gray-900 px-6 text-base font-medium text-white hover:bg-gray-800"
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
        </div>
      </div>
    </header>
  );
}
