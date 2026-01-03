import { Component } from '@angular/core';
import {Avatar} from "primeng/avatar";
import {Menu} from 'primeng/menu';
import {MenuItem} from 'primeng/api';

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

  items: MenuItem[] = [
    {label: 'Profile', icon: 'pi pi-user'},
    {label: 'Anmelden', icon: 'pi pi-sign-in'},
    {label: 'Logout', icon: 'pi pi-sign-out'}
  ];


}
