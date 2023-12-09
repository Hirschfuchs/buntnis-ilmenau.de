import { Component, Input } from '@angular/core';
import { MatTabNavPanel } from '@angular/material/tabs';
import { pages } from '../../types/pages';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  mainpages = pages;

  @Input({ required: true })
  tabPanel!: MatTabNavPanel;
  replacementPanel: MatTabNavPanel | undefined;
}
