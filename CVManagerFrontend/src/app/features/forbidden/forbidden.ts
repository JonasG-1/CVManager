import { Component } from '@angular/core';
import {Header} from '../../shared/header/header';
import {Background} from '../../shared/background/background';

@Component({
  selector: 'app-forbidden',
  imports: [
    Header,
    Background
  ],
  templateUrl: './forbidden.html',
  styleUrl: './forbidden.scss',
})
export class Forbidden {

}
