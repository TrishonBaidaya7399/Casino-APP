"use client";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
import ForgetPasswordModal from "../modals/forget-password-modal";
import { useRouter } from "next/navigation";
import AuthModal from "../modals/login-register-flow/auth-modal";
import { useSidebarStore } from "@/store/sidebar-store";
import WalletSetupModal from "../modals/wallet/wallet-setup-modal/wallet-setup-modal";

export default function AppHeader() {
  const router = useRouter();
  const { toggleAuthModalOpen, toggleWalletSetupModalOpen } = useSidebarStore();

  const handleLoginClick = () => {
    router.push("?auth-tab=login");
    toggleAuthModalOpen();
  };

  const handleRegisterClick = () => {
    router.push("?auth-tab=register");
    toggleAuthModalOpen();
  };

  const handleWalletClick = () => {
    router.push("?wallet-tab=welcome");
    toggleWalletSetupModalOpen();
  };

  return (
    <header className="sticky top-0 left-0 z-40 w-full border-b border-border bg-background transition-all">
      <div className="app-container flex items-center justify-between py-4">
        <div className="flex items-center gap-4">
          {/* Logo + Brand */}
          <Link href="/" className="inline-flex items-center gap-3">
            <span>
              <Image
                src="/logos/logo.webp"
                alt="Branch logo"
                width={32}
                height={32}
                loading="lazy"
              />
            </span>
            <span className="hidden text-lg font-semibold text-foreground lg:block">
              BRAND NAME
            </span>
          </Link>
        </div>
        <div className="flex flex-row items-center gap-4">
          <Button variant="outline" asChild onClick={handleWalletClick}>
            Wallet
          </Button>
        </div>
        {/* Right side actions */}
        <div className="flex items-center gap-3">
          <Button variant="outline" asChild onClick={() => handleLoginClick()}>
            Login
          </Button>

          <Button
            onClick={() => handleRegisterClick()}
            variant="orangeGradient"
            asChild
          >
            Register
          </Button>
        </div>
        {/* Auth Modal */}
        <AuthModal />
        {/* Forget Password Modal open */}
        <ForgetPasswordModal />
        {/* Wallet Setup Modal */}
        <WalletSetupModal />
      </div>
    </header>
  );
}
