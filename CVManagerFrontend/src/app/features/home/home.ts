import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { Ripple } from 'primeng/ripple';
import {Menubar} from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';
import {Header} from '../../shared/header/header';
import {Background} from '../../shared/background/background';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.css',
  imports: [BadgeModule, AvatarModule, InputTextModule, CommonModule, ButtonModule, Header, Background]
})
export class Home {

}
