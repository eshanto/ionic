import { InjectionToken } from '@angular/core';
import { Config as CoreConfig, IonicConfig } from '@ionic/core';

import { IonicWindow } from '../types/interfaces';

export class Config {

  get(key: keyof IonicConfig, fallback?: any): any {
    const c = getConfig();
    if (c) {
      return c.get(key, fallback);
    }
    return null;
  }

  getBoolean(key: keyof IonicConfig, fallback?: boolean): boolean {
    const c = getConfig();
    if (c) {
      return c.getBoolean(key, fallback);
    }
    return false;
  }

  getNumber(key: keyof IonicConfig, fallback?: number): number {
    const c = getConfig();
    if (c) {
      return c.getNumber(key, fallback);
    }
    return 0;
  }

  set(key: keyof IonicConfig, value?: any) {
    const c = getConfig();
    if (c) {
      c.set(key, value);
    }
  }
}

export const ConfigToken = new InjectionToken<any>('USERCONFIG');

function getConfig(): CoreConfig | null {
  const win: IonicWindow | undefined = window as any;
  if (typeof win !== 'undefined') {
    const Ionic = win.Ionic;
    if (Ionic && Ionic.config) {
      return Ionic.config;
    }
  }
  return null;
}
