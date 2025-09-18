import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { GlobalTabs } from "@/components/global-components/GlobalTabs";
import type { TabProps } from "@/components/global-components/GlobalTabs";
import GlobalModal from "@/components/global-components/global-modal/global-modal";
import LoginContent from "./login-content";
import RegisterContent from "./register-content";
import OTPVerificationContent from "./otp-verification-content";
import Image from "next/image";
import { useSidebarStore } from "@/store/sidebar-store";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";

export default function AuthModal({
  initialOpen = false,
}: {
  initialOpen?: boolean;
}) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();
  const activeTab = searchParams.get("auth-tab") || "login";
  const { authModalOpen, toggleAuthModalOpen } = useSidebarStore();

  const tabs: TabProps[] = [
    { value: "login", label: "Login" },
    { value: "register", label: "Register" },
  ];

  useEffect(() => {
    if (!authModalOpen) {
      const currentParams = new URLSearchParams(window.location.search);
      currentParams.delete("auth-tab");
      currentParams.delete("reg-step");
      router.push(
        currentParams.toString() ? `?${currentParams.toString()}` : pathName,
        { scroll: false }
      );
    }
  }, [!authModalOpen]);

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
      open={initialOpen ? true : authModalOpen}
      onOpenChange={() => {
        const currentParams = new URLSearchParams(window.location.search);
        currentParams.delete("auth-tab");
        router.push(
          currentParams.toString() ? `?${currentParams.toString()}` : "/",
          { scroll: false }
        );
        toggleAuthModalOpen();
      }}
      className="min-h-60"
      title={
        <div className="flex items-center gap-4">
          <div className="inline-flex items-center gap-3">
            {activeTab === "otp" && (
              <ArrowLeft
                className="cursor-pointer size-5"
                onClick={() => router.push(`?auth-tab=login`)}
              />
            )}
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
      {activeTab === "login" && (
        <GlobalTabs tabButtonFull data={tabs} tabName="auth-tab" />
      )}
      {content}
    </GlobalModal>
  );
}
