"use client";

import { ThemeProvider } from "next-themes";
import React, { Suspense, useState, useEffect } from "react";

import AppHeader from "../components/layout/app-header";
import AppSidebar from "../components/layout/app-sidebar";


const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <ThemeProvider attribute="class">
      <Suspense>
        <div className="bg-background text-foreground relative flex items-start">
          <AppSidebar />
          <div className="flex-grow h-screen overflow-y-auto">
            <AppHeader />
            <main className="app-container">
              {children}
            </main>
          </div>
        </div>
      </Suspense>
    </ThemeProvider>
  );
};

export default GlobalProvider;
