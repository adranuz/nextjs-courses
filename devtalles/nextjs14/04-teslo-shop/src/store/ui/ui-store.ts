import { create } from 'zustand'
interface UIState {
  isSideMenyOpen: boolean;
  openSideMenu: () => void;
  closeSideMenu: () => void;
}
export const useUIStore = create<UIState>()((set) => ({
  isSideMenyOpen: false,
  openSideMenu: () => set({ isSideMenyOpen: true }),
  closeSideMenu: () => set({ isSideMenyOpen: false }),
}))