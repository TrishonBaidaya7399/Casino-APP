import { create } from "zustand";

interface SidebarState {
  mobileOpen: boolean;
  browseOpen: boolean;
  collapsed: boolean;
  hovered: boolean;
  toggleMobileOpen: () => void;
  toggleBrowseOpen: () => void;
  toggleCollapsed: () => void;
  setHovered: (value: boolean) => void;
}

export const useSidebarStore = create<SidebarState>((set) => ({
  mobileOpen: false,
  browseOpen: false,
  collapsed: false,
  hovered: false,

  toggleMobileOpen: () => set((state) => ({ mobileOpen: !state.mobileOpen })),

  toggleBrowseOpen: () => set((state) => ({ browseOpen: !state.browseOpen })),

  toggleCollapsed: () => set((state) => ({ collapsed: !state.collapsed })),

  setHovered: (value: boolean) => set({ hovered: value }),
}));
