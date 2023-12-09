import { Component } from '@angular/core';
import { pages } from '../../types/pages';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  mainpages = pages;
}
