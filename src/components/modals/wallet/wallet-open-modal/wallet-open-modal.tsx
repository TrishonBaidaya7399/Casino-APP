"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useSidebarStore } from "@/store/sidebar-store";
import GlobalModal from "@/components/global-components/global-modal/global-modal";
import OverviewTab from "./tabs/overview-tab";
import WithdrawTab from "./tabs/withdraw-tab";
import DepositTab from "./tabs/deposit-tab";
import BuyCryptoTab from "./tabs/buy-crypto-tab";
import SettingsTab from "./tabs/settings-tab";
import { GlobalTabs } from "@/components/global-components/GlobalTabs";

export default function WalletOpenModal() {
  const { walletOpenModalOpen, toggleWalletOpenModalOpen } = useSidebarStore();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    const tab = searchParams.get("walletTabs") || "overview";
    setActiveTab(tab);
  }, [searchParams]);

  const handleTabChange = (tab: string) => {
    router.push(`?walletTabs=${tab}`, { scroll: false });
    setActiveTab(tab);
    // toggleWalletOpenModalOpen();
  };

  const renderTab = () => {
    switch (activeTab) {
      case "overview":
        return <OverviewTab onTabChange={handleTabChange} />;
      case "withdraw":
        return <WithdrawTab />;
      case "deposit":
        return <DepositTab />;
      case "buy":
        return <BuyCryptoTab />;
      case "settings":
        return <SettingsTab />;
      default:
        return <OverviewTab onTabChange={handleTabChange} />;
    }
  };

  return (
    <GlobalModal
      title="Wallet"
      open={walletOpenModalOpen}
      onOpenChange={toggleWalletOpenModalOpen}
      className="lg:min-w-160"
    >
      {activeTab === "overview" ||
        activeTab === "buyCrypto" ||
        (activeTab === "settings" && (
          <GlobalTabs
            data={[
              { value: "overview", label: "Overview" },
              { value: "buyCrypto", label: "Buy Crypto" },
              { value: "settings", label: "Settings" },
            ]}
            tabName="walletTabs"
            tabButtonFull
          />
        ))}
      {renderTab()}
    </GlobalModal>
  );
}
