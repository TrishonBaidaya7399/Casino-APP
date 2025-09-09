import { create } from "zustand";

interface SidebarState {
  mobileOpen: boolean;
  collapsed: boolean;
  hovered: boolean;
  toggleMobileOpen: () => void;
  toggleCollapsed: () => void;
  setHovered: (value: boolean) => void;
}

export const useSidebarStore = create<SidebarState>((set) => ({
  mobileOpen: false,
  collapsed: false,
  hovered: false,

  toggleMobileOpen: () =>
    set((state) => ({ mobileOpen: !state.mobileOpen })),

  toggleCollapsed: () =>
    set((state) => ({ collapsed: !state.collapsed })),

  setHovered: (value: boolean) =>
    set({ hovered: value }),
}));
