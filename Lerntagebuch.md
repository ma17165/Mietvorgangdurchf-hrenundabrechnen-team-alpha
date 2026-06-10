Lerntagebuch: Meilenstein M1 ("Projektumgebung aufsetzen")
Datum: 18.05.26   Team: Alpha

1. Motivation
Warum ist das Aufsetzen einer Projektumgebung für uns wichtig?
Für uns ist es wichtig, weil wir lernen, wie man ein professionelles Softwareprojekt von Grund auf strukturiert. Eine gute Projektumgebung
spart Zeit, vermeidet Konflikte und macht die Zusammenarbeit im Team transparenter. Ohne eine klare Infrastruktur (GitHub, Board,
Stack-Entscheidung) wäre das Projekt schnell chaotisch.

Was erwarte ich von dieser Phase?
Wir erwarten, dass wir am Ende ein funktionierendes GitHub-Repository haben, ein klares Board für die Aufgabenverteilung und eine fundierte 
Entscheidung für den Technologiestack. Zudem möchten wir verstehen, wie KI uns bei der Recherche und Dokumentation unterstützen kann.

2. Eigene Vorkenntnisse
Habe ich bereits mit Git/GitHub gearbeitet? Wenn ja: Wann? Welche Erfahrungen?
ja, in Grundlangen der web Programmierung .Ich kenne git clone, git add, git commit und git push, aber noch nicht mit Branches oder .gitignore.

 Kenne ich Projektmanagement-Tools wie Trello/Notion? Welche?
 Ich habe Notion noch nicht genutzt. Ein Board für ein Teamprojekt ist neu für mich.

 Welchen Technologiestack habe ich bisher verwendet?
 In meinem letzten Projekt: HTML/CSS/JS (Frontend) + PHP (Backend) + MySQL (Datenbank). Auch Frameworks wie Spring Boot oder React.

 Habe ich Erfahrung mit Cloud-Diensten wie Render/Vercel?
 Nein, aber ich kenne das Prinzip von Heroku.

 3. Vorgehen & Entscheidungen
Wie haben wir den Technologiestack gewählt? Welche Alternativen verglichen?
Wir haben uns für Spring Boot (Backend) entschieden, weil:
- Java-Kenntnisse im Team vorhanden sind,
- Spring Boot eine hohe Skalierbarkeit bietet (wichtig für Mietwagen-Verwaltung mit vielen Nutzern),
- die Community groß ist (schnelle Hilfe bei Problemen),
- und wir später ggf. Microservices nutzen könnten

 Alternativen:

Django (Python): Einfacher zu lernen, aber weniger performant für große Datenmengen.
React.js haben wir gewählt, weil es eine große Community hat und wir damit bereits Erfahrung sammeln können.

Wie das Board strukturiert?
Unser Trello-Board hat 4 Spalten: To Do, In Progress, Review, Done. Für M1 haben wir folgende Aufgaben angelegt:
1-Repository einrichten
2-Technologiestack evaluieren
3-README.md verfassen

Welche Rolle habe ich übernommen?
Ich habe das GitHub-Repository eingerichtet.

4. Was hat gut / nicht geklappt?
- Stackwahl
Was gut lief: Die KI hat uns schnell eine Entscheidungsmatrix geliefert, die wir nutzen konnten.
Was nicht geklappt hat: Die Diskussion über Spring Boot vs. Django hat länger gedauert als geplant.
Wir hätten früher eine Entscheidung treffen sollen.

-Repository-Einrichtung
Was gut lief: GitHub Copilot hat uns geholfen, die .gitignore-Datei korrekt zu konfigurieren.
Was nicht geklappt hat: Wir hatten zunächst keine klare Branch-Strategie – erst nach 20 Minuten haben wir uns auf main/dev geeinigt.

-Projektboard
Was gut lief: Die Swimlanes in Trello sind sehr übersichtlich und helfen bei der Priorisierung.

-Teamarbeit
Was nicht geklappt hat: Die Rollenverteilung war nicht klar, und jeder wusste nicht, was zu tun ist.

5. Noch offen
Welche Technologien muss ich noch lernen?
Ich muss noch Spring Boot vertiefen

 Welche Setupschritte fehlen?
 Wir müssen noch lokale Entwicklungsumgebung für alle Teammitglieder einrichten (z. B. Java JDK, Node.js, MySQL). Zudem fehlt 
 eine CI/CD-Pipeline (z. B. GitHub Actions für automatische Tests)

 Welche Fragen zum Projekt sind noch ungeklärt?
 Wie soll die Authentifizierung umgesetzt werden? (Spring Security? Oder einfach Session-basiert?) Brauchen wir Docker für die lokale Entwicklung?

 6. Eigenreflexion
 Was habe ich über Teamarbeit und Technologieentscheidungen gelernt?
Dokumentation (README.md, Board) essenziell ist, um alle auf dem gleichen Stand zu halten.
KI-Tools wie ChatGPT und GitHub Copilot Zeit sparen können, aber man die Ergebnisse kritisch hinterfragen muss.
Transparenz im Board hilft, Fortschritte sichtbar zu machen und Blockaden früh zu erkennen.

Wie hat KI meine Recherchearbeit verändert?
KI hat mir schnelle Antworten auf technische Fragen gegeben . Sie hat mir auch Struktur für die Entscheidungsmatrix gegeben, die wir 
dann anpassen konnten. Allerdings musste ich die Empfehlungen der KI hinterfragen – z. B. hat sie Django als 'einfach' bewertet, aber 
für unser Projekt war Spring Boot besser geeignet.

Was würde ich beim nächsten Mal anders tun?
Beim nächsten Mal:
- Branch-Strategie direkt zu Projektbeginn festlegen .
- Setup-Anleitung für alle Teammitglieder vorab erstellen .
Meilensteine (M2–M7) direkt im Board anlegen, auch wenn sie noch nicht bearbeitet werden.
KI nicht blind vertrauen – immer eigene Recherche parallel durchführen.

Entscheidungsmatrix

| Kriterium                             | Spring Boot | Django  | .NET Core |
| ------------------------------------- | ----------- | ------- | --------- |
| Sprache                               | Java        | Python  | C#        |
| Lernkurve                             | Mittel      | Einfach | Mittel    |
| Gute Eignung für Business-Anwendungen | Sehr gut    | Gut     | Sehr gut  |
| Datenbankintegration                  | Sehr gut    | Gut     | Sehr gut  |
| Community / Tutorials                 | Sehr groß   | Groß    | Groß      |
| PDF / REST API Unterstützung          | Sehr gut    | Gut     | Sehr gut  |
| Hochschulumfeld geeignet              | Sehr gut    | Gut     | Gut       |
| Gesamtbewertung                       | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐|

Für die Umsetzung des Projekts wurde ein Technologiestack bestehend aus React, Spring Boot und MySQL ausgewählt. Ziel war es, 
Technologien zu verwenden, die sowohl für webbasierte Geschäftsanwendungen geeignet als auch innerhalb der Projektlaufzeit 
realistisch umsetzbar sind.

React wurde für die Entwicklung des Frontends gewählt, da damit moderne und benutzerfreundliche Oberflächen effizient umgesetzt 
werden können. Besonders die komponentenbasierte Struktur erleichtert die Wiederverwendbarkeit und Wartbarkeit der Benutzeroberfläche.

Im Backend fiel die Entscheidung auf Spring Boot, da das Framework im Bereich der Unternehmensanwendungen weit verbreitet ist und eine
gute Unterstützung für REST-Schnittstellen, Datenbankzugriffe und Sicherheitsmechanismen bietet. Zudem existiert umfangreiche 
Dokumentation sowie eine große Entwickler-Community.

Meilenstein 2 (UI-Design / Interaktionsmuster)
### 1. Designentscheidungs-Notiz 
Für das UI-Design der Autovermietung wurde ein konsistentes Dark-Mode-Layout (Anthrazit/Dunkelgrau) mit signalstarken orangefarbenen Akzenten gewählt. Dieses Farbmuster sorgt für einen modernen, dynamischen Look (Anlehnung an bekannte Sharing-Dienste) und bietet einen hohen visuellen Kontrast für die Barrierefreiheit. 

Bei den UX-Mustern haben wir sich strikt an etablierte Industriestandards gehalten: Die Login-Maske (B1) nutzt klare Input-Validierungen und platziert Fehlermeldungen direkt im Sichtfeld, um Frustration zu vermeiden. Die Fahrzeugauswahl (B1) basiert auf einem übersichtlichen Card-Layout mit Filter-Tabs am oberen Rand, was eine intuitive und schnelle Navigation ermöglicht. Für das Mitarbeiter-Dashboard (B2/B3) wurde ein kompaktes Formular-Muster mit klar beschrifteten Kontrollkästchen (Checkboxen) gewählt, um Fehleingaben im stressigen Stationsalltag zu minimieren. Die Abrechnungsseite (B4) setzt auf ein klares, tabellarisches Muster, das geschäftliche Pflichtangaben (wie die 19% MwSt.) sofort ersichtlich macht.

---

### 2. Lerntagebuch-Eintrag (M2)

| Kategorie | Inhalt |

| **Motivation** | Uns interessiert am UI/UX-Design besonders die Schnittstelle zwischen Ästhetik und Funktionalität. Apps wie Spotify oder moderne Banking-Apps empfinden wir als intuitiv, weil sie den Nutzer ohne visuelle Ablenkung (Clean Design) ans Ziel führen. Das wollten wir auch für unsere Autovermietung umsetzen. |
| **Eigene Vorkenntnisse** | Wir hatten minimale Vorkenntnisse in Figma, aber Konzepte wie "User Flows", "Wireframes" oder komponentenbasiertes Design waren für uns in der praktischen Umsetzung neu. |
| **Vorgehen & Entscheidungen** | Wir haben die User Stories analysiert und die Screens funktional aufgeteilt. Statt alles händisch zu zeichnen, haben wir v0.dev genutzt. Durch gezieltes Prompting (z.B. „Erstelle eine moderne Fahrzeugauswahl...“) haben wir Layouts generiert. Die Entwürfe haben wir per Screenshot in Figma importiert, dort als Designsystem organisiert und final als PNG exportiert. |
| **Was hat gut / nicht geklappt** | Das Generieren der Grund-Layouts mit der KI lief extrem schnell und zeiteffizient. Schwieriger war die Feinabstimmung: v0 hat Anpassungen manchmal als Unterseiten (wie /fahrzeuge) angelegt oder Bezeichnungen (z.B. „E-Mail“ statt „Kundennummer“) vertauscht. Hier mussten wir durch präzise Folge-Prompts manuell nachbessern. |
| **Noch offen** | Alle Kern-Screens (B1 bis B4) sind vollständig umgesetzt. In der nächsten Phase (Implementierung) müssen wir darauf achten, die Formular-Validierungen (z.B. Fehlermeldung bei falschem Passwort) auch im echten Code exakt so dynamisch wie im Design darzustellen. |
| **Eigenreflexion** | Der frühzeitige Prototyp hat uns massiv verbessert. Das spart uns später beim Coden viele Diskussionen. |

Als Datenbank wurde MySQL eingesetzt, da die Anwendung stark strukturierte Daten wie Kunden, Reservierungen, Fahrzeuge und Rechnungen 
verarbeitet. Relationale Datenbanken eignen sich besonders gut für solche Geschäftsprozesse.

Insgesamt bietet der gewählte Stack eine gute Balance zwischen Skalierbarkeit, Lernaufwand und praktischer Umsetzbarkeit im Hochschulprojekt.


## Meilenstein 3 (Datenbankschema & Datenbasis)

### 1. Dokumentation der Designentscheidungen & Normalisierung
Unser relationales Datenbankschema wurde streng auf Basis des vom Ihnen bereitgestellten Klassendiagramms entworfen und vollständig in die **3. Normalform (3NF)** überführt. 

* **1. Normalform (1NF):** Alle Attribute sind atomar (z.B. Aufteilung von Name in `vorname` und `nachname`; Adressen in der Tabelle `Mietstation` wurden in `strasse`, `plz` und `ort` zerlegt). Es gibt keine Mehrfachwerte oder Wiederholungsgruppen.
* **2. Normalform (2NF):** Die Tabellen befinden sich in der 1NF und jedes Nicht-Primärattribut ist voll funktionell abhängig vom gesamten Primärschlüssel. Da wir durchgehend künstliche, eindeutige Auto-Increment-IDs als Primärschlüssel nutzen (`kundenNr`, `vertragsNr`, etc.), ist diese Bedingung inhärent erfüllt.
* **3. Normalform (3NF):** Es existieren keine transitiven Abhängigkeiten. Nicht-Primärattribute hängen direkt und ausschließlich vom Primärschlüssel ab (z. B. wurden Berechnungen für Rechnungsbeträge wie Netto, MwSt. und Brutto sauber getrennt und hängen direkt an der `rechnungsNr`).

#### Beziehungstypen (Kardinalitäten):
* **Kunde zu Mietvertrag (1:N):** Ein Kunde kann im Laufe der Zeit viele Mietverträge abschließen, ein konkreter Mietvertrag gehört jedoch immer exakt zu einem Kunden.
* **Kfz zu Mietvertrag (1:N):** Ein Fahrzeug kann nacheinander für mehrere Mietverträge gebucht werden, aber zu einem spezifischen Zeitraum ist es genau einem Vertrag zugeordnet.
* **Mietstation zu Mietvertrag (1:N):** Eine Station kann als Abhol- oder Rückgabeort für beliebig viele Verträge dienen.

---

### 2. Lerntagebuch-Eintrag (M3)

| Kategorie | Inhalt |
| :--- | :--- |
| **Motivation** | Die saubere Strukturierung von Daten im Backend ist das Fundament jeder stabilen Anwendung. Uns hat besonders motiviert, die abstrakten Klassenbeziehungen aus dem Entwurf in logische Tabellenstrukturen mit funktionierenden Fremdschlüsseln (Foreign Keys) zu übersetzen, um Dateninkonsistenzen im späteren Betrieb zu verhindern. |
| **Eigene Vorkenntnisse** | Grundbegriffe wie SQL, Primärschlüssel und `CREATE TABLE` waren theoretisch bekannt. Die praktische Verknüpfung komplexer Tabellen über relationale Integritätsregeln (`ON DELETE RESTRICT` / `ON DELETE CASCADE`) im Team abzustimmen, war jedoch eine neue Erfahrung. |
| **Vorgehen & Entscheidungen** | Wir haben das vorgegebene Klassendiagramm exakt analysiert und die Tabellennamen sowie Attribute präzise übernommen. Das Schema wurde in die Stammdaten (`Kunde`, `Mitarbeiter`, `Kfz`, `Mietstation`) und Bewegungshistorie (`Mietvertrag`, `Rechnung`) unterteilt. Für die Datenbasis haben wir eine `seed.sql` mit logisch zusammenhängenden Testdaten geschrieben, um alle typischen Geschäftsfälle (Reserviert, Laufend, Beendet) direkt abbilden zu können. |
| **Was hat gut / nicht geklappt** | Das Erstellen der SQL-Dateien verlief sehr geradlinig. Eine Herausforderung war die korrekte Reihenfolge der `CREATE TABLE`-Befehle in der `schema.sql`: Da Tabellen wie `Mietvertrag` auf `Kunde` und `Kfz` verweisen, mussten die Stammdaten zwingend zuerst angelegt werden. Hier kam es anfangs zu Fehlern bei den Fremdschlüssel-Referenzen, die wir durch Umsortieren gelöst haben. |
| **Noch offen** | Das Datenbankschema und die Testdaten sind komplett fertig und einsatzbereit. Als nächstes müssen wir die MySQL-Datenbank lokal in XAMPP importieren und die PHP-Schnittstellen für das Backend vorbereiten. |
| **Eigenreflexion** | Durch den exakten Abgleich mit Ihrem Diagramm haben wir gelernt, wie wichtig präzise Vorgaben in der Softwarearchitektur sind. Jedes Attribut, das wir jetzt angelegt haben, korrespondiert perfekt mit den Eingabefeldern unserer UI-Screens aus M2. Das gibt uns enorme Sicherheit für die bevorstehende Programmierphase. |


## Meilenstein 4 (Front-End Entwicklung)

### Lerntagebuch-Eintrag (M4)

| Kategorie | Inhalt |
| :--- | :--- |
| **Motivation** | Es war extrem motivierend zu sehen, wie aus den statischen UI-Designs aus M2 und der Datenstruktur aus M3 nun ein echtes, interaktives Produkt im Browser wird. Das direkte Feedback bei erfolgreichen Eingaben oder Validierungsfehlern hat dem Projekt richtig Leben eingehaucht. |
| **Eigene Vorkenntnisse** | HTML und grundlegendes CSS waren uns geläufig. Die komponentenbasierte Entwicklung in React und die Nutzung von Tailwind CSS über Utility-Klassen waren für uns jedoch neu und eine sehr lehrreiche Erfahrung. |
| **Vorgehen & Entscheidungen** | Wir haben uns für ein React-Vite-Setup entschieden, um eine schnelle, modulare Applikation zu bauen. Die Screens wurden in separate Komponenten ausgelagert (`LoginScreen`, `VehicleSelectScreen`, etc.). Das Routing haben wir über ein zustandsbasiertes State-Management gelöst, um Ihnen ein nahtloses Durchklicken ohne Server-Setup zu ermöglichen. KI-Tools wie v0.dev halfen uns beim schnellen Generieren der Tailwind-Grundlayouts. |
| **Was hat gut / nicht geklappt** | Das Erstellen der Layouts und das Einbinden der Mockdaten verliefen reibungslos, da die Tabellenstruktur aus M3 perfekt vorbereitet war. Herausfordernder war die clientseitige Validierung von Logik-Fehlern – beispielsweise zu verhindern, dass ein Mitarbeiter ein Auto mit einem niedrigeren Kilometerstand zurücknimmt, als es abgeholt wurde. Das konnten wir über JavaScript-Plausibilitätsprüfungen lösen. |
| **Noch offen** | Das Front-End läuft lokal und im Mockup-Modus perfekt. Als nächstes steht der große Meilenstein 5 an: Die Anbindung des PHP-Backends an unsere MySQL-Datenbank, um die echten Formulardaten zu speichern. |
| **Eigenreflexion** | Die KI-Unterstützung durch v0.dev hat unsere Entwicklungsgeschwindigkeit enorm beschleunigt. Wir verstehen den generierten Code durch die saubere Aufteilung in React-Komponenten vollkommen. Für uns als angehende Wirtschaftsinformatiker zeigt dieser Meilenstein perfekt, wie wichtig die Verzahnung von UI/UX-Design und Programmierlogik ist. |


## Meilenstein 5 (Back-End Entwicklung & API)

### Lerntagebuch-Eintrag (M5)

| Kategorie | Inhalt |
| :--- | :--- |
| **Motivation** | Es war extrem motivierend zu sehen, wie schnell sich mit FastAPI aus dem Stand ein funktionierendes Backend aufbauen lässt. Der Moment, als die interaktive Swagger-UI automatisch generiert wurde und ich den ersten Login-Schnittstellentest live im Browser ausführen konnte, hat mir gezeigt, wie nah ich an einem echten Full-Stack-Produkt bin. |
| **Eigene Vorkenntnisse** | Grundlegende Python-Kenntnisse und das theoretische Konzept des Schichtenmodells (Controller/Service/Repository) aus der Vorlesung  waren vorhanden. Die konkrete Umsetzung einer asynchronen API mit FastAPI und das Handling von CORS-Middlewares für die Frontend-Kommunikation waren für mich jedoch neu und eine sehr lehrreiche Erfahrung. |
| **Vorgehen & Entscheidungen** | Ich habe mich für ein FastAPI-Setup in Kombination mit Uvicorn entschieden, um eine performante und automatisch dokumentierte API zu erhalten. Die Endpunkte wurden nach Funktionen getrennt in separate Router-Dateien (`auth.py`, `vehicles.py`, `rentals.py`) im Ordner `/routers` ausgelagert. Zudem habe ich eine CORS-Middleware integriert, um die Cross-Origin-Kommunikation mit meinem React-Frontend abzusichern. |
| **Was hat gut / nicht geklappt** | Die automatische Generierung der OpenAPI-Schnittstelle und die serverseitige Live-Abrechnungskalkulation (19% MwSt.) funktionierten auf Anhieb reibungslos. Zu Beginn gab es einen kleinen `ImportError` in der `main.py`, weil eine Router-Datei im Dateisystem vergessen wurde. Außerdem blockierte die Windows-PowerShell kurzzeitig den Start des Frontend-Parallelbetriebs über Skript-Restriktionen (`PSSecurityException`). Beide Probleme konnten wir durch eine strukturierte Explorer-Prüfung und den Wechsel auf die klassische Eingabeaufforderung (CMD) zügig lösen. |
| **Noch offen** | Die Endpunkte laufen derzeit noch mit realistischen Mock-Daten (In-Memory). Als nächstes steht die persistente Anbindung der Routen an eine echte relationale Datenbank im Ordner `/db` an, um die simulierten Fahrzeug- und Mietdaten durch echte Tabelleneinträge zu ersetzen und den Full-Stack-Mietprozess final abzurunden. |


Meilenstein 6 (Modul-, Integrations- und Systemtest)Lerntagebuch-Eintrag (M6)KategorieInhaltMotivationEs war äußerst motivierend zu sehen, wie der zuvor geschriebene Code durch systematische Tests auf Herz und Nieren geprüft wird. Zu sehen, wie die automatisierten Tests im Terminal in weniger als $0{,}06\ \text{s}$ grün durchlaufen, gibt ein enormes Sicherheitsgefühl und zeigt, wie professionelle Softwarequalität gesichert wird.Eigene VorkenntnisseGrundlegende theoretische Konzepte zum Thema Softwarequalität und Teststufen (Unit-Tests, Integrationstests, Systemtests) aus der Vorlesung waren vorhanden. Die praktische Umsetzung – insbesondere das Schreiben von Testklassen in Python mit dem Framework pytest und das strukturierte Protokollieren von Bugs – war für mich jedoch eine sehr lehrreiche neue Erfahrung.Vorgehen & EntscheidungenWir haben uns für einen risikobasierten Testansatz entschieden. Da Rundungs- und Berechnungsfehler bei der Rechnungsstellung das größte wirtschaftliche und rechtliche Risiko darstellen, haben wir die kaufmännische Berechnungslogik (Umsatzsteuerausweis von $19\,\%$ und korrekte Rundung) mit automatisierten Modultests (pytest) abgesichert. Login-Abläufe und die Fahrzeugübersicht wurden über strukturierte manuelle Systemtests validiert.Was hat gut / nicht geklapptGut geklappt: Die Implementierung der automatisierten Unit-Tests mit pytest lief nach dem Bereinigen der Syntax hervorragend. Die Testergebnisse waren sofort im Terminal sichtbar.Nicht geklappt: Beim ersten Versuch hatten sich Markdown-Formatierungen in unsere .py-Datei eingeschlichen, was zu Syntaxfehlern führte. Zudem gab es beim Git-Upload einen Push-Konflikt ([rejected] main -> main (fetch first)), da die Testdokumentation direkt im GitHub-Webeditor erstellt wurde. Beide Hürden konnten jedoch erfolgreich durch Code-Säuberung und ein git pull --rebase im Terminal gelöst werden.
