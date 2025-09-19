"use client";

import { useSearchParams, useRouter } from "next/navigation";
import GlobalModal from "@/components/global-components/global-modal/global-modal";
import { useSidebarStore } from "@/store/sidebar-store";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import WalletSetupStep1 from "./steps/wallet-setup-step1";
import ConfirmEmailStep from "./steps/confirm-email-step";
import ConfirmDetailStep1 from "./steps/confirm-detail-step1";
import UploadIdentificationStep from "./steps/upload-identification-step";
import StepProgress from "./steps/step-progress";
import EligibilitySwitchStep from "./steps/eligibility";

export default function WalletSetupModal({
  initialOpen = false,
}: {
  initialOpen?: boolean;
}) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const step = searchParams.get("wallet-step") || "welcome";
  const { walletSetupModalOpen, toggleWalletSetupModalOpen } =
    useSidebarStore();
  const open = initialOpen ? true : walletSetupModalOpen;

  let content;
  switch (step) {
    case "welcome":
      content = <WalletSetupStep1 />;
      break;
    case "confirmEmail":
      content = <ConfirmEmailStep />;
      break;
    case "1":
      content = <ConfirmDetailStep1 />;
      break;
    case "2":
      content = <EligibilitySwitchStep />;
      break;
    case "3":
      content = <UploadIdentificationStep />;
      break;
    default:
      content = <WalletSetupStep1 />;
  }

  const goToStep = (newStep: string) => {
    const currentParams = new URLSearchParams(window.location.search);
    currentParams.set("wallet-step", newStep);
    router.push(`?${currentParams.toString()}`, { scroll: false });
  };
  const modalTitle =
    step === "welcome"
      ? "Set Up Your Wallet and Start Playing!"
      : step === "confirmEmail"
      ? "Confirm Your Email"
      : step === "1"
      ? "Confirm Your Detail"
      : step === "2"
      ? "We Selected the Currency"
      : step === "3"
      ? "Upload Identification"
      : "Brand Name";
  return (
    <GlobalModal
      open={open}
      onOpenChange={() => {
        const currentParams = new URLSearchParams(window.location.search);
        currentParams.delete("wallet-step");
        router.push(
          currentParams.toString() ? `?${currentParams.toString()}` : "/",
          { scroll: false }
        );
        toggleWalletSetupModalOpen();
      }}
      className="min-h-60 min-w-160"
      title={
        <div className="flex items-center gap-4">
          <div className="inline-flex items-center gap-3">
            {step !== "welcome" && step !== "confirmEmail" && (
              <ArrowLeft
                className="cursor-pointer size-5"
                onClick={() =>
                  goToStep(
                    step === "1"
                      ? "confirmEmail"
                      : step === "2"
                      ? "1"
                      : step === "3"
                      ? "2"
                      : "welcome"
                  )
                }
              />
            )}
            {modalTitle || (
              <div className="flex flex-row items-center gap-1">
                <span>
                  <Image
                    src="/logos/logo.webp"
                    alt="Brand logo"
                    width={32}
                    height={32}
                    loading="lazy"
                  />
                </span>
                <span className="text-lg font-semibold text-foreground">
                  BRAND NAME
                </span>
              </div>
            )}
          </div>
        </div>
      }
    >
      <StepProgress
        goToStep={goToStep}
        currentStep={step === "welcome" || step === "confirmEmail" ? 0 : step === "1" ? 1 : step === "2" ? 2 : step === "3" ? 3 : 1}
      />
      {content}
    </GlobalModal>
  );
}
