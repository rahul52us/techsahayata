"use client";
import { makeAutoObservable } from "mobx";

const defaultTheme = {
  colors: {
    custom: {
      light: { primary: "teal.500" },
      dark: { primary: "teal.300" },
    },
  },
};

class ThemeStore {
  themeConfig = defaultTheme;
  openThemeDrawer = false;

  constructor() {
    makeAutoObservable(this);
  }

  setOpenThemeDrawer = () => {
    this.openThemeDrawer = !this.openThemeDrawer;
  };
}

export const themeStore = new ThemeStore();
