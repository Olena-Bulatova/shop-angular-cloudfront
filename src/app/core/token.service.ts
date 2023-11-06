import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  readonly tokenKey = 'authorization_token';
  readonly credentials = 'olena-kuchynska=TEST_PASSWORD';

  setAuthorizationToken(): void {
    localStorage.setItem(this.tokenKey, btoa(this.credentials));
  }

  getBasicToken(): string {
    const token = localStorage.getItem(this.tokenKey);

    return token ? `Basic ${token}` : '';
  }
}
