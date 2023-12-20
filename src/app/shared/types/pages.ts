import { KontaktComponent } from '../../kontakt/kontakt.component';
import { BuntesIlmenauComponent } from '../../one-page-areas/buntes-ilmenau/buntes-ilmenau.component';
import { UeberUnsComponent } from '../../one-page-areas/ueber-uns/ueber-uns.component';
import { Mainpage } from './pages.model';

export const pages: Mainpage[] = [
  {
    internalName: 'Über uns',
    url: '',
    name: 'Wer sind wir?',
    shortname: 'Über uns',
    pageComponentFrame: { component: UeberUnsComponent },
    altNames: ['ueber-uns'],
  },
  {
    internalName: 'Buntes Ilmenau',
    url: 'ilmenau-bunt',
    name: 'Buntes Ilmenau',
    shortname: 'Buntnis',
    pageComponentFrame: { component: BuntesIlmenauComponent },
  },
  {
    internalName: 'Kontakt',
    url: 'kontakt',
    name: 'Kontakt',
    pageComponentFrame: { component: KontaktComponent },
  },
];
