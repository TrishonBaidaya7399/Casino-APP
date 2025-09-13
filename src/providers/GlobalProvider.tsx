"use client";

import React, { Suspense, useState, useEffect } from "react";
import { useSidebarStore } from "@/store/sidebar-store";
import dynamic from "next/dynamic";
import { ThemeProvider } from "next-themes";

const AppHeader = dynamic(() => import("../components/layout/app-header"));
const AppSidebar = dynamic(() => import("../components/layout/app-sidebar"));
const Footer = dynamic(() => import("@/components/common/footer/footer"));
const MobileFooter = dynamic(() => import("@/components/layout/mobile-footer"));
const MobileBrowsePanel = dynamic(
  () => import("@/components/layout/mobile-browse-panel")
);

const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isClient, setIsClient] = useState(false);
  const { mobileOpen } = useSidebarStore();

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <ThemeProvider attribute="class">
      <Suspense>
        <div className="bg-background text-foreground relative flex items-start min-h-screen pb-24 md:pb-0">
          <AppSidebar />
          <div className={`mx-auto transition-all duration-300 ${mobileOpen ? 'w-full md:w-[calc(100%-4.75rem)]' : 'w-full md:w-[calc(100%-15.209rem)]'}`}>
            <AppHeader />
            <main className="app-container">{children}</main>
            <Footer />
          </div>
          <MobileFooter />
          <MobileBrowsePanel />
        </div>
      </Suspense>
    </ThemeProvider>
  );
};

export default GlobalProvider;
