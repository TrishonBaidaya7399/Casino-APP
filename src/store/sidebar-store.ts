import { create } from "zustand";

interface SidebarState {
  mobileOpen: boolean;
  authModalOpen: boolean;
  walletSetupModalOpen: boolean;
  walletOpenModalOpen: boolean;
  browseOpen: boolean;
  collapsed: boolean;
  forgetPasswordModalOpen: boolean;
  hovered: boolean;
  toggleMobileOpen: () => void;
  toggleAuthModalOpen: () => void;
  toggleWalletSetupModalOpen: () => void;
  toggleWalletOpenModalOpen: () => void;
  setWalletOpenModalOpen: (value: boolean) => void;
  toggleBrowseOpen: () => void;
  toggleCollapsed: () => void;
  toggleForgetPasswordModalOpen: () => void;
  setHovered: (value: boolean) => void;
}

export const useSidebarStore = create<SidebarState>((set) => ({
  mobileOpen: false,
  authModalOpen: false,
  walletSetupModalOpen: false,
  walletOpenModalOpen: false,
  browseOpen: false,
  collapsed: false,
  forgetPasswordModalOpen: false,
  hovered: false,

  toggleMobileOpen: () => set((state) => ({ mobileOpen: !state.mobileOpen })),
  toggleAuthModalOpen: () =>
    set((state) => ({ authModalOpen: !state.authModalOpen })),
  toggleWalletSetupModalOpen: () =>
    set((state) => ({ walletSetupModalOpen: !state.walletSetupModalOpen })),
  toggleWalletOpenModalOpen: () =>
    set((state) => ({ walletOpenModalOpen: !state.walletOpenModalOpen })),
  setWalletOpenModalOpen: (value: boolean) =>
    set({ walletOpenModalOpen: value }),
  toggleBrowseOpen: () => set((state) => ({ browseOpen: !state.browseOpen })),
  toggleCollapsed: () => set((state) => ({ collapsed: !state.collapsed })),
  toggleForgetPasswordModalOpen: () =>
    set((state) => ({
      forgetPasswordModalOpen: !state.forgetPasswordModalOpen,
    })),

  setHovered: (value: boolean) => set({ hovered: value }),
}));
