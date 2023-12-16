import { Component } from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {adresseToString} from "../shared/types/adresse.model";
import {Kontakt} from "../shared/types/kontakt.model";

@Component({
  selector: 'app-kontakt',
  standalone: true,
  imports: [
    MatCardModule
  ],
  templateUrl: './kontakt.component.html',
  styleUrl: './kontakt.component.scss',
})
export class KontaktComponent {
  private _contactData: Kontakt = {
    ansprechpartner: 'Ansprechpartner',
    adresse: {
      strasse: 'Straße',
      hausnummer: '2a',
      plz: 98693,
      ort: 'Ilmenau',
      bundesland: 'Thüringen',
      land: 'DE'
    }
  }


  get contactData(){
      return `Ansprechpartner: ${this._contactData.ansprechpartner}\nAdresse:\n${adresseToString(this._contactData.adresse)}`
  }
}
