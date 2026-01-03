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
          label: 'Profil',
          items: [
            {
              label: 'Mein Profil',
              icon: 'pi pi-user-edit',
              visible: this.loggedIn,
              routerLink: '/profile' // Passe den Pfad bei Bedarf an
            },
            {
              label: 'Kontoverwaltung',
              icon: 'pi pi-cog',
              visible: this.loggedIn,
              routerLink: '/account'
            },
            {
              label: 'Projekte',
              icon: 'pi pi-briefcase',
              visible: this.loggedIn,
              routerLink: '/user/projects'
            },
            {
              label: this.loggedIn ? 'Abmelden' : 'Anmelden',
              icon: this.loggedIn ? 'pi pi-sign-out' : 'pi pi-sign-in',
              visible: true,
              command: () => this.loggedIn ? this.authManager.logout() : this.authManager.login(),
              linkClass: this.loggedIn ? '!text-red-500 dark:!text-red-400' : ''
            }
          ]
        }
      ];
    });
  }

}
