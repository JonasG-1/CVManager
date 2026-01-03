import {Component, effect, inject, OnInit} from '@angular/core';
import {Avatar} from "primeng/avatar";
import {Menu} from 'primeng/menu';
import {MenuItem} from 'primeng/api';
import {KeycloakService} from 'keycloak-angular';
import {AuthManager} from '../../core/auth/manager/auth-manager.service';

@Component({
  selector: 'app-profile-menu',
  imports: [
    Avatar,
    Menu
  ],
  templateUrl: './profile-menu.html',
  styleUrl: './profile-menu.scss',
})
export class ProfileMenu {
  items: MenuItem[] | undefined;
  authManager = inject(AuthManager);
  loggedIn = false;

  constructor() {
    effect(() => {
      this.loggedIn = this.authManager.authenticated();
      this.items = [
        {
          label: 'Profile',
          icon: 'pi pi-user',
          visible: this.loggedIn
        },
        {
          label: 'Anmelden',
          icon: 'pi pi-sign-in',
          command: () => this.authManager.login(),
          visible: !this.loggedIn
        },
        {
          label: 'Logout',
          icon: 'pi pi-sign-out',
          command: () => this.authManager.logout(),
          visible: this.loggedIn
        }
      ];
    });
  }

}
