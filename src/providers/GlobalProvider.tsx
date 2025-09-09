"use client";

import { ThemeProvider } from "next-themes";
import { useSidebarStore } from "@/store/sidebar-store";
import React, { Suspense, useState, useEffect } from "react";

import AppHeader from "../components/layout/app-header";
import AppSidebar from "../components/layout/app-sidebar";

const drawerWidth = 240;
const collapsedDrawerWidth = 64;

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024); // lg breakpoint
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile;
}

const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isClient, setIsClient] = useState(false);
  const isMobile = useIsMobile();
  const { collapsed, hovered } = useSidebarStore();

  const currentDrawerWidth =
    !isMobile && collapsed && !hovered ? collapsedDrawerWidth : drawerWidth;

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <ThemeProvider attribute="class">
      <Suspense>
        <div className="flex min-h-screen bg-background text-foreground">
          <AppHeader />
          <AppSidebar />
          <main
            className="flex-grow min-h-screen transition-[width]"
            style={{
              width: isMobile ? "100%" : `calc(100% - ${currentDrawerWidth}px)`,
            }}
          >
            <div className="h-16" />
            <div className="p-1 sm:p-3">{children}</div>
          </main>
        </div>
      </Suspense>
    </ThemeProvider>
  );
};

export default GlobalProvider;
