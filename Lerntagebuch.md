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
