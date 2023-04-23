# Entwicklungsstandards

Das Projekt hat ein paar feste Grundprinzipien. In diesem Dokument soll die grundlegende Struktur (verwendete Technologien & Orte der Dokumentation) und die inhaltlichen Voraussetzungen für beigetragenen Code (Qualität und Vorgaben) beschrieben werden.

## Technische Grundlage

Das Projekt ist eine Single-Page Angular-Applikation, die im Web ([buntnis-ilmenau.de](https://buntnis-ilmenau.de)) und eventuell später als mobile Apps (Apache Cordova) bereitgestellt werden sollen. Die Dokumentation soll primär durch Clean Code und In-Code-Doku (TsDoc) erfüllt werden.

### Sprache

Das Projekt wird in der deutschen Sprache aufgesetzt. Internationalisierung könnte nochmal interessant werden, aber nicht in Code und Doku. 

## Inhaltliche Voraussetzungen

Beigetragener Code soll einen gewissen Qualitätsstandard sichern können. Sowohl für das Öffnen, als auch für das Prüfen von PRs sollten die folgenden Regeln beachtet werden.

### Best Effort

Alle Beiträge sollen nach bestem Bemühen gebaut sein. Auch cooler, funktionaler Code hilft nichts, wenn er die Qualität des Projektes senkt und es schwerer wartbar macht. Ein „Ach, das passt schon so“ kann langfristig zu einem undurchsichtigen, unverständlichen Aufbau führen. Grundlegendend sollte das Prinzip gelten, eine Datei ordentlicher zu verlassen, als man sie vorgefunden hat und nicht umgekehrt.

Trotz allem - wir sind alle nur Menschen. Bestes Bemühen heißt auch, dass nicht jeder Code perfekt sein kann und muss. Die meisten Themen muss man erstmal lernen und während seiner Aufgaben wachsen. Also nett und aufgeschlossen bleiben, gerne auf Fehler und Verbesserungsideen hinweisen, aber stets konstruktiv.

### Fehlerfreiheit

Kein Code ist fehlerfrei. Stimmt. Trotzdem wollen wir versuchen, eine möglichst fehlerfreie Codebasis zu wahren. Was heißt das in der Praxis?

- Jeder Code soll ausführbar sein
    - ein Commit soll funktionierenden Code bereitstellen. Ich möchte grundlegend zu jedem Commit zurücksetzen können, ohne dass die Applikation bricht
    - jeder PR (& eigentlich auch Commit) soll die Tests fehlerfrei ausführen können. Die Deaktivierung einzelner Tests muss sinnvoll begründet und nicht dauerhaft sein (Issue bereits angelegt)
- Lint-Checks erfüllt
    - wenn Sonar (oder ein anderer Linter) Bugs, Vulnerabilities oder Security Hotspots erkennt, müssen diese vor dem Einbau behoben werden
    - weniger drastische Probleme, wie Code Smells sollten nach Möglichkeit auch entfernt oder so gering wie möglich gehalten werden. 10 Code Smells in einem kleinen Commit sind definitiv zu viel, aber auch 5 in einem großen Commit nicht schön. So wenig wie möglich - für die Wartbarkeit!

### TDD

Wir versuchen testgetrieben zu entwickeln. Das muss nicht die eigentliche Idee des TDD - dem Entwickeln der Tests vor dem Code - sein, aber der Code soll möglichst vollständig von Tests gedeckt sein. Um dies sicherzustellen, wollen wir die Coverage prüfen. Ziel soll immer eine Coverage gegen 100 sein, Realität wird um die 90 und zu wenig ist es unter 80. Tests schreiben macht keinen Spaß, ist aber wichtig.

### Zuschneiden & Aufräumen von Commits

Der main-Branch ist unser Hauptentwicklungsbranch. Er ist die Basis, an der wir entwickeln. Daher ist das Rebasing-Prinzip anzuwenden. Es sollen nicht 10 Branches separat auf main gemerged werden. Wir wollen einen fortlaufenden Entwicklungsstand. Also immer vor einem PR rebasen, um Konflikte möglichst früh vermeiden zu können.

Das heißt aber auch, dass Commits vor dem Push aufgeräumt werden sollen. WIP-Commits sind okay - besonders, wenn andere den aktuellen Stand sehen und daran weiterarbeiten sollen, aber WIP-Commits haben nicht auf main verloren und sind vorher zu squashen/entfernen.

Die größe eines Commits soll möglichst ein Feature sein. Schön wäre es, wenn man jederzeit einen beliebigen Commit reverten könnte, ohne dass andere Features damit brechen. Sie sollen aber auch nicht so klein sein, dass man für eine Deaktivierung 10 Commits entfernen muss. Ein Commit soll möglichst ein eigenständiger, weitgehend unabhängiger Teil der App sein.

### Commit-Nachrichten und PR-Titel

Für Commits nutzen wir [Gitmoji](https://gitmoji.dev). Diesen wird gefolgt von der Issue-Nummer. Groß- und Kleinschreibung, sowie Rechtschreibung sind sinnvoll. Da ich nicht weiß, ob das Projekt immer nur Deutsch bleiben wird, sind die Commit-Nachrichten, wie auch die Doku & Benennungen, auf Englisch zu verfassen.

> ✨ #42: Added meaning of everything

Darunter kann eine stichpunktartige Beschreibung der neuen Funktionen/Änderungen erfolgen

> - calculated by a lange computer
> - checked it - mathematically correct

Wenn mehrere Autoren an einem Commit gearbeitet haben, können am Ende noch Co-Authors stehen

> Co-authored-by: NAME <NAME@EXAMPLE.COM>

PRs sollen mit einer Issue-Nummer starten, außer sie sind Work in Progress (was nicht oft passieren sollte)

> #42: Added meaning of everything
