# Homepage für buntnis-ilmenau.de & buntnis.de

Dieses Repository beinhaltet den Quellcode für die Webpräsenz des Buntnis Ilmenau - für Demokratie und Weltoffenheit. Dieser Code kann via `npm run build` gebaut und auf die Seiten geladen werden.

Der aktuelle Entwicklungsstand kann auf `test.buntnis.de` betrachtet werden. Die Produktivversionen können auf `buntnis-ilmenau.de` (und `buntnis.de`) gefunden werden.




## Badges

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
![Aktualität](https://img.shields.io/github/last-commit/Hirschfuchs/buntnis-ilmenau.de)
![Code-Menge](https://img.shields.io/github/languages/code-size/Hirschfuchs/buntnis-ilmenau.de)

![Build](https://img.shields.io/github/actions/workflow/status/Hirschfuchs/buntnis-ilmenau.de/tests?branch=main)
![Website-Zustand](https://img.shields.io/website?down_color=red&down_message=offline&up_color=green&up_message=online&url=https%3A%2F%2Fbuntnis-ilmenau.de)
![Coverage](https://img.shields.io/codecov/c/github/Hirschfuchs/buntnis-ilmenau.de?token=db56cf35-93d5-4224-8ca7-1d62389f6f75)
## Roadmap

- einfache Startseite
- Erweiterung mit Unterpunkten
- Verknüpfung zu anderen Projekten, wie [stolpersteine-ilmenau.de](https://stolpersteine-ilmenau.de)


## Tech Stack

**Client:** Angular

**Server:** So far PHP auf Apache, geplant Node

## API Referenz

Geplant ist das Angebot einer REST-API zur Bereitstellung von Buntnis-Informationen und -Inhalten. Somit können stets aktuelle Referenzen und Texte eingebunden werden. Die Idee ist hier, beispielsweise eine Aktualisierung der Ansprechpartner automatisiert in anderen Projekten übernehmen zu können.

Dieser Ansatz ist bislang rein theoretisch

#### Get all items

```http
  GET api.buntnis.de/ansprechpartner
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

## Authors

- [@Hirschfuchs](https://www.github.com/Hirschfuchs)