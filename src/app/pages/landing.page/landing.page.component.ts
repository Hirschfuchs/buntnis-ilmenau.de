import { Component } from '@angular/core';
import { PageComponent } from '../../shared/components/page/page.component';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [PageComponent, NgForOf],
  templateUrl: './landing.page.component.html',
  styleUrl: './landing.page.component.scss',
})
export class LandingPageComponent {
  // Todo: pages soll globale Werte empfangen
  pages = ['Über uns', 'Buntes Ilmenau', 'Kontakt'];
}
