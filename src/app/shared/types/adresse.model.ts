export type Adresse = {
  strasse: string;
  hausnummer: string;
  plz: number;
  ort: string;
  bundesland?: string;
  land: 'DE';
}

export const adresseToString = (adresse: Adresse)=>{
  return `${adresse.strasse} ${adresse.hausnummer}\n${adresse.plz} ${adresse.ort}\n${adresse.bundesland}\n${adresse.land}`
}
