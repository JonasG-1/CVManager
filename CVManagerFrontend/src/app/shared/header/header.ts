import {Component, OnInit} from '@angular/core';
import {Avatar} from "primeng/avatar";
import {Badge} from "primeng/badge";
import {InputText} from "primeng/inputtext";
import {Menubar} from "primeng/menubar";
import {Ripple} from "primeng/ripple";
import {NgClass} from '@angular/common';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-header',
  imports: [
    Avatar,
    Badge,
    InputText,
    Menubar,
    Ripple,
    NgClass
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnInit {

  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
      },
      {
        label: 'Projects',
        icon: 'pi pi-search',
        badge: '3',
        items: [
          {
            label: 'Core',
            icon: 'pi pi-bolt',
            shortcut: '⌘+S',
          },
          {
            label: 'Blocks',
            icon: 'pi pi-server',
            shortcut: '⌘+B',
          },
          {
            separator: true,
          },
          {
            label: 'UI Kit',
            icon: 'pi pi-pencil',
            shortcut: '⌘+U',
          },
        ],
      },
    ];
  }
}
