import { BuntnisPageComponent, Mainpage } from './pages.model';

export const pages: Mainpage[] = [
  {
    internalName: 'index',
    url: '',
    name: 'Buntnis Ilmenau',
    shortname: 'Buntnis',
    component: new BuntnisPageComponent(),
  },
  {
    internalName: 'Über uns',
    url: 'ueber-uns',
    name: 'Wer sind wir?',
    shortname: 'Über uns',
    component: new BuntnisPageComponent(),
  },
  {
    internalName: 'Buntes Ilmenau',
    url: 'ilmenau-bunt',
    name: 'Buntnis Ilmenau',
    shortname: 'Buntnis',
    component: new BuntnisPageComponent(),
  },
  {
    internalName: 'Kontakt',
    url: 'kontakt',
    name: 'Kontakt',
    component: new BuntnisPageComponent(),
  },
];
