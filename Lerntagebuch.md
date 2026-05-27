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

