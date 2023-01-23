import create from "zustand";

export const pages = {
  home: 'home',
  about: 'about',
  skills: 'skills',
  works: 'works',
  contact: 'contact'
} as const;

export type ActivePageState = {
  activePage: keyof typeof pages;
  setActivePage: (activePage: keyof typeof pages) => void;
};

export const useActivePageStore = create<ActivePageState>((set) => ({
  activePage: pages.home,
  setActivePage: (activePage: keyof typeof pages) =>
    set(() => ({ activePage })),
}));
