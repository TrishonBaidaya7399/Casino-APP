"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { GlobalTabs } from "@/components/global-components/GlobalTabs";
import type { TabProps } from "@/components/global-components/GlobalTabs";
import GlobalModal from "@/components/global-components/global-modal/global-modal";
import LoginContent from "./login-content";
import RegisterContent from "./register-content";
import OTPVerificationContent from "./otp-verification-content";
import Image from "next/image";

export default function AuthModal({
  initialOpen = false,
}: {
  initialOpen?: boolean;
}) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const activeTab = searchParams.get("auth-tab") || "login";
  const [open, setOpen] = useState(initialOpen);

  useEffect(() => {
    setOpen(!!activeTab);
  }, [activeTab]);

  const tabs: TabProps[] = [
    { value: "login", label: "Login" },
    { value: "register", label: "Register" },
  ];

  let content;
  switch (activeTab) {
    case "login":
      content = <LoginContent />;
      break;
    case "register":
      content = <RegisterContent />;
      break;
    case "otp":
      content = <OTPVerificationContent />;
      break;
    default:
      content = <LoginContent />;
  }

  return (
    <GlobalModal
      open={open}
      onOpenChange={(newOpen) => {
        if (!newOpen) {
          const currentParams = new URLSearchParams(window.location.search);
          currentParams.delete("auth-tab");
          router.push(
            currentParams.toString() ? `?${currentParams.toString()}` : "/",
            { scroll: false }
          );
        }
        setOpen(newOpen);
      }}
      title={
        <div className="flex items-center gap-4">
          <div className="inline-flex items-center gap-3">
            <span>
              <Image
                src="/logos/logo.webp"
                alt="Branch logo"
                width={32}
                height={32}
                loading="lazy"
              />
            </span>
            <span className="text-lg font-semibold text-foreground">
              BRAND NAME
            </span>
          </div>
        </div>
      }
    >
      {activeTab !== "otp" && (
        <GlobalTabs tabButtonFull data={tabs} tabName="auth-tab" />
      )}
      {content}
    </GlobalModal>
  );
}
