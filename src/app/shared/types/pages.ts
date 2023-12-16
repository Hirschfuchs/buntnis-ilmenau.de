import { KontaktComponent } from '../../kontakt/kontakt.component';
import { BuntesIlmenauComponent } from '../../one-page-areas/buntes-ilmenau/buntes-ilmenau.component';
import { IndexComponent } from '../../one-page-areas/index/index.component';
import { UeberUnsComponent } from '../../one-page-areas/ueber-uns/ueber-uns.component';
import { Mainpage } from './pages.model';

export const pages: Mainpage[] = [
  {
    internalName: 'index',
    url: '',
    name: 'Buntnis',
    pageComponentFrame: { component: IndexComponent },
  },
  {
    internalName: 'Über uns',
    url: 'ueber-uns',
    name: 'Wer sind wir?',
    shortname: 'Über uns',
    pageComponentFrame: { component: UeberUnsComponent },
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
