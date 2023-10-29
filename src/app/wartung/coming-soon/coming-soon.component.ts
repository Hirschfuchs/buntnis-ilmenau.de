import { Component } from '@angular/core';
import { ProgressStepGroup } from './types/progress-step.type';

@Component({
  selector: 'app-coming-soon',
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
