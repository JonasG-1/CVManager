import {effect, inject, Injectable, Signal, signal} from '@angular/core';
import {KEYCLOAK_EVENT_SIGNAL, KeycloakEventType, ReadyArgs, typeEventArgs} from 'keycloak-angular';
import Keycloak from 'keycloak-js';

@Injectable({
  providedIn: 'root',
})
export class AuthManager {

  private keycloak = inject(Keycloak);

  logout() {
    this.keycloak.logout();
  }

  login() {
    this.keycloak.login();
  }

  get authenticated(): Signal<boolean> {
    return this._authenticated.asReadonly();
  }

  private _authenticated = signal<boolean>(false);

  constructor() {
    const keycloakSignal = inject(KEYCLOAK_EVENT_SIGNAL);

    effect(() => {
      const keycloakEvent = keycloakSignal();

      if (keycloakEvent.type === KeycloakEventType.Ready) {
        this._authenticated.set(typeEventArgs<ReadyArgs>(keycloakEvent.args));
      }

      if (keycloakEvent.type === KeycloakEventType.AuthLogout) {
        this._authenticated.set(false);
      }
    });
  }
}
