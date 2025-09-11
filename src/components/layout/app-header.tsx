"use client";

import Image from "next/image";
import { useSidebarStore } from "@/store/sidebar-store";
import AnimatedHamburger from "@/components/ui/animated-hamburger";

import { Button } from "../ui/button";
import BrandLogoSVG from "../common/svg_icons/BrandLogoSVG";
import HamburgerSVG from "../common/svg_icons/HamburgerSVG";

export default function AppHeader() {
  const { mobileOpen, toggleMobileOpen } = useSidebarStore();

  return (
    <header className="sticky top-0 left-0 z-40 w-full border-b border-border bg-background transition-all">
      <div className="app-container flex items-center justify-between py-4">
        

        <div className="flex items-center gap-4">
          <div className="block md:hidden">
            <button onClick={toggleMobileOpen}>
              <HamburgerSVG className="stroke-white-3" />
            </button>
          </div>
          
          {/* Logo + Brand */}
          <div className="flex items-center gap-3">
            <span>
              <BrandLogoSVG size={26} />
            </span>
            <span className="hidden text-lg font-semibold text-foreground lg:block">
              BRAND NAME
            </span>
          </div>
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-3">

          <Button
            href="/login"
            variant="outline"
          >
            Login
          </Button>


          <Button
            href="/register"
            variant="orangeGradient"
          >
            Register
          </Button>
        </div>
      </div>
    </header>
  );
}
