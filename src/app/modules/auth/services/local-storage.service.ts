import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private keyToken: string = 'X-Token';

  constructor() {}

  getToken(): string | null {
    return localStorage.getItem(this.keyToken);
  }

  setToken(token: string): void {
    localStorage.setItem(this.keyToken, token);
  }

  getItem(keyName: string): string | null {
    return localStorage.getItem(keyName);
  }

  setItem(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  clear(): void {
    localStorage.clear();
  }
}
