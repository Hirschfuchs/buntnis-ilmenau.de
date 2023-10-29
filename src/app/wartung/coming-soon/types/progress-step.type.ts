/**
 * Beschreibt einen zu erledigenden Schritt bis zur Ablöse der Coming Soon Page
 */
export type ProgressStep = {
  /**
   * Name des Schritts
   *
   * <p>Beschreibt den zu erledigenden Schritt möglichst kompakt
   */
  schritt: string;
  /**
   * Ausführlichere Beschreibung des Schritts
   *
   * <p>Ausführliche Beschreibung, die das Verständnis der jeweiligen Aufgaben beim Leser ermöglichen soll
   */
  beschreibung?: string;
  /**
   * Zustand des Arbeitsschritts
   *
   * <p>Auch bereits erledigte Schritte sollen festgehalten werden.
   * So ist die Darstellung eines Fortschrittsbalkens möglich.
   */
  erledigt?: boolean;
  /**
   * Link zu einem zugehörigen Github-Issue
   */
  link?: string;
};

/**
 * Beschreibt Gruppen zusammengehöriger ProgressSteps
 *
 * <p>So können diese auf der Oberfläche gegliedert werden.
 */
export type ProgressStepGroup = {
  /**
   * Name der Gruppe
   */
  name: string;
  /**
   * Elemente der Gruppe
   */
  steps: ProgressStep[];
};
