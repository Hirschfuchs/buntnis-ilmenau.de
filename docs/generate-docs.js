const asciidoctor = require("asciidoctor");
const { Glob } = require("glob");
const { copyFile } = require("fs");

const Asciidoctor = asciidoctor();

console.log("Generiere Dokumentation ...", "...", "...");

const documents = new Glob("docs/**/*.adoc", { nocase: true }).walkSync();

console.log(`${documents.length} Dateien zu erzeugen`);

for (const document of documents) {
  console.log(`Erzeuge ${document}`);
  // Asciidoctor.convertFile(document);
  Asciidoctor.convertFile(document, {
    safe: "safe",
    attributes: { linkcss: true },
  });
}
