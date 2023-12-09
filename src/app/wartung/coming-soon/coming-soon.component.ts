import { Component } from '@angular/core';
import { ProgressStepGroup } from './types/progress-step.type';
import { MatCardModule } from '@angular/material/card';
import { NgxSplideModule } from 'ngx-splide';
import { NgForOf, NgOptimizedImage } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-coming-soon',
  imports: [
    MatCardModule,
    NgxSplideModule,
    NgOptimizedImage,
    MatProgressBarModule,
    MatListModule,
    MatCheckboxModule,
    FormsModule,
    NgForOf,
  ],
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.scss'],
})
export class ComingSoonComponent {
  progressStepGroups: ProgressStepGroup[] = [
    {
      name: 'Inhalte',
      steps: [
        {
          schritt: 'Gestaltung der Startseite',
        },
        {
          schritt: 'Text für Startseite',
        },
        {
          schritt: 'Unterseiten definiert',
        },
        {
          schritt: 'Texte für Unterseiten',
        },
        {
          schritt: 'Querverlinkungen',
        },
      ],
    },
    {
      name: 'Anwendungsrahmen',
      steps: [
        {
          schritt: 'Header',
          link: 'https://github.com/Hirschfuchs/buntnis-ilmenau.de/issues/29',
        },
        {
          schritt: 'Impressum & Datenschutz',
          link: 'https://github.com/Hirschfuchs/buntnis-ilmenau.de/issues/30',
        },
      ],
    },
    {
      name: 'Technisches',
      steps: [
        {
          schritt: 'Deployment & Repository',
          link: 'https://github.com/Hirschfuchs/buntnis-ilmenau.de/issues/3',
          erledigt: true,
        },
        {
          schritt: 'Tests',
          link: 'https://github.com/Hirschfuchs/buntnis-ilmenau.de/issues/12',
          erledigt: true,
        },
        {
          schritt: 'E2E-Tests',
          link: 'https://github.com/Hirschfuchs/buntnis-ilmenau.de/issues/56',
          erledigt: false,
        },
      ],
    },
  ];
  externalLinks: {
    name: string;
    link: string;
    image: { url: string; width: number; height: number };
  }[] = [
    {
      name: 'Stolpersteine Ilmenau',
      link: 'https://stolpersteine-ilmenau.de',
      image: {
        url: 'assets/2023/outlinks/stolpersteine-ilmenau-de.png',
        width: 2519,
        height: 1260,
      },
    },
    {
      name: 'MOBIT',
      link: 'https://mobit.org',
      image: {
        url: 'assets/2023/outlinks/mobit.png',
        width: 1101,
        height: 249,
      },
    },
  ];

  protected get currentProgress(): number {
    let erledigte = 0;
    let gesamt = 0;
    this.progressStepGroups.forEach((group) =>
      group.steps.forEach((step) => {
        if (step.erledigt) erledigte++;
        gesamt++;
      }),
    );
    return (erledigte * 100) / gesamt;
  }
}
