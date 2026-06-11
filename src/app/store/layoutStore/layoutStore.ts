"use client";
import { makeAutoObservable } from "mobx";

class LayoutStore {
  isCallapse = false;
  fullScreenMode = false;
  mediumScreenMode = false;
  openMobileSideDrawer = false;

  constructor() {
    makeAutoObservable(this);
  }

  openDashSidebarFun = (forceClose?: boolean) => {
    if (forceClose === true) {
      this.isCallapse = true;
    } else {
      this.isCallapse = !this.isCallapse;
    }
  };

  setOpenMobileSideDrawer = (value: boolean) => {
    this.openMobileSideDrawer = value;
  };
}

export const layoutStore = new LayoutStore();
