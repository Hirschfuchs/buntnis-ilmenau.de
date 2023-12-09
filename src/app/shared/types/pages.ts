/**
 * Modellierung einer beliebigen Buntnis-Seite
 *
 * @example
 *   page: Page = {
 *     url: 'docs/tech-docs',
 *     name: 'Technische Dokumentation',
 *     shortname: 'Technische Doku',
 *     internalName: 'docs-tech',
 *     component: TechdocsComponent,
 *     altNames: ['tech-docs', 'docs/tech'],
 *   };
 */
export type Page = {
  /** Relativer Pfad, unter dem die Seite aufgerufen werden kann */
  url: string;
  /** Vollständiger und nach außen sichtbarer Name der Seite */
  name: string;
  /**
   * Gekürzte Fassung des Seitennamens
   *
   * @default Page.name
   */
  shortname?: string;
  /**
   * Interner, nicht nach außen sichtbarer Name der Seite
   *
   * @default Page.name
   */
  internalName?: string;
  /** Komponente, durch welche die Seite dargestellt wird */
  component: BuntnisPageComponent;
  /**
   * Liste von Alternativnamen, unter denen die Seite aufgerufen werden kann
   * Ermöglicht, die Seite auch bei Umbenennung noch erreichen zu können
   *
   * @default [ ]
   */
  altNames?: string[];
};

/**
 * Modellierung einer Hauptseite des Buntnis<li> enthält zusätzliche
 * Informationen, wie Unterseiten einer Hauptseite
 *
 * @see Page
 */
export type Mainpage = Page & {
  /** Auflistung von Unterseiten, die mit der MainPage verknüpft sind */
  subpages?: Page[];
};

/**
 * Die Komponenten, die Seiten des Buntnis darstellen, können in
 * BuntnisPageComponents zusammengefasst werden und so in der Modellierung der
 * Pages eingebunden werden.
 *
 * @experimental
 * @see Page
 */
export class BuntnisPageComponent {}
